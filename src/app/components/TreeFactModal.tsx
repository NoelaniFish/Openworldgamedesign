import { useState, useEffect, useRef } from 'react';
import paperImage from 'figma:asset/d80cecff805d2f144fb5d9bb9c46f979c59ee8e3.png';

interface TreeFactModalProps {
  fact: string;
  onClose: () => void;
}

export function TreeFactModal({ fact, onClose }: TreeFactModalProps) {
  const [phase, setPhase] = useState<'float' | 'fall' | 'dragging' | 'thrown'>('float');
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: -100 });
  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [rotationVelocity, setRotationVelocity] = useState(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());

  useEffect(() => {
    if (phase !== 'float') return;
    
    // Floating phase - 3 seconds
    const floatDuration = 3000;
    const startTime = Date.now();
    
    const floatInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / floatDuration;
      
      if (progress >= 1) {
        setPhase('fall');
        clearInterval(floatInterval);
        return;
      }
      
      // Gentle floating motion
      const floatX = window.innerWidth / 2 + Math.sin(elapsed / 500) * 100;
      const floatY = 150 + Math.sin(elapsed / 700) * 30;
      const floatRotation = Math.sin(elapsed / 800) * 10;
      
      setPosition({ x: floatX, y: floatY });
      setRotation(floatRotation);
    }, 16);
    
    return () => clearInterval(floatInterval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'fall') return;
    
    // Falling phase with drift
    let vel = { x: (Math.random() - 0.5) * 2, y: 0 };
    let currentPos = { ...position };
    let currentRotation = rotation;
    let rotVel = (Math.random() - 0.5) * 4;
    
    const fallInterval = setInterval(() => {
      // Apply gravity
      vel.y += 0.3;
      
      // Add horizontal drift
      vel.x += (Math.random() - 0.5) * 0.2;
      vel.x *= 0.99; // Slight drag
      
      // Update position
      currentPos.x += vel.x;
      currentPos.y += vel.y;
      
      // Update rotation
      currentRotation += rotVel;
      rotVel += (Math.random() - 0.5) * 0.5;
      
      setPosition(currentPos);
      setRotation(currentRotation);
      
      // Close when off screen
      if (currentPos.y > window.innerHeight + 200) {
        clearInterval(fallInterval);
        onClose();
      }
    }, 16);
    
    return () => clearInterval(fallInterval);
  }, [phase, onClose]);

  useEffect(() => {
    if (phase !== 'thrown') return;
    
    // Thrown phase - physics with initial velocity
    let vel = { ...velocity };
    let currentPos = { ...position };
    let currentRotation = rotation;
    let rotVel = rotationVelocity;
    
    const thrownInterval = setInterval(() => {
      // Apply gravity
      vel.y += 0.5;
      
      // Apply air resistance
      vel.x *= 0.98;
      vel.y *= 0.99;
      
      // Update position
      currentPos.x += vel.x;
      currentPos.y += vel.y;
      
      // Update rotation
      currentRotation += rotVel;
      rotVel *= 0.98;
      
      setPosition(currentPos);
      setRotation(currentRotation);
      
      // Close when off screen
      if (currentPos.y > window.innerHeight + 200 || 
          currentPos.x < -300 || 
          currentPos.x > window.innerWidth + 300 ||
          currentPos.y < -300) {
        clearInterval(thrownInterval);
        onClose();
      }
    }, 16);
    
    return () => clearInterval(thrownInterval);
  }, [phase, velocity, rotationVelocity, onClose]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (phase === 'dragging' || phase === 'thrown') return;
    
    setPhase('dragging');
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    lastUpdateTime.current = Date.now();
    e.stopPropagation();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (phase !== 'dragging') return;
    
    const now = Date.now();
    const dt = now - lastUpdateTime.current;
    
    if (dt > 0) {
      // Calculate velocity based on mouse movement
      const vel = {
        x: (e.clientX - lastMousePos.current.x) / dt * 16,
        y: (e.clientY - lastMousePos.current.y) / dt * 16
      };
      
      setVelocity(vel);
      
      // Calculate rotation velocity based on horizontal movement
      const rotVel = vel.x * 0.5;
      setRotationVelocity(rotVel);
    }
    
    setPosition({ x: e.clientX, y: e.clientY });
    setRotation(rotation + (e.clientX - lastMousePos.current.x) * 0.1);
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    lastUpdateTime.current = now;
  };

  const handleMouseUp = () => {
    if (phase !== 'dragging') return;
    
    // Throw with current velocity
    setPhase('thrown');
  };

  useEffect(() => {
    if (phase !== 'dragging') return;
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [phase, rotation]);

  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none"
    >
      <div 
        className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="relative w-[700px] h-[400px]">
          <img
            src={paperImage}
            alt="Paper"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))',
              pointerEvents: 'none'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-16 pointer-events-none">
            <p className="text-gray-900 text-xl font-medium text-center leading-relaxed font-['Helvetica']" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>
              {fact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}