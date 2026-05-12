import { Shadow } from './Shadow';
import { GrainEffect } from './GrainEffect';
import { NPC } from './NPC';
import { Blockade } from './Blockade';
import { Car } from './Car';
import { useState, useEffect } from 'react';
import playerIdleImage1 from 'figma:asset/df251d5367ba852442dc6af19fa6aea921f85ad3.png';
import playerIdleImage2 from 'figma:asset/8446841ed471aede251459534da0046941381e3e.png';
import playerIdleImage3 from 'figma:asset/b222411a73242dc42ff03ca8f512ab716cb0bc2e.png';
import playerMovingImage from 'figma:asset/3ff73c4afc87209ba7eb4b790111df6edd2bb482.png';
import knoxvilleBackground from 'figma:asset/748f08803cfdfebd30a90932cc2fc1fbe0d37a8a.png';
import nycBackground from 'figma:asset/1a1d12cc1db30f1bff2c035f83e1ff8e7e7e7e93.png';

interface GameWorldProps {
  playerPos: { x: number; y: number };
  npcs: any[];
  onNpcClick: (npc: any) => void;
  currentWorld: 'world1' | 'world2';
  currentNpc: any;
  isMoving: boolean;
  facingLeft: boolean;
  blockades: any[];
  pigeons?: any[];
  rats?: any[];
  cars: any[];
  trees: any[];
  weatherFilter: string;
  nycWeatherFilter: string;
  knoxvilleWeatherCondition: 'sunny' | 'cloudy' | 'rainy' | 'overcast' | 'stormy' | 'partly-cloudy';
  nycWeatherCondition: 'clear' | 'foggy' | 'rainy' | 'overcast' | 'stormy' | 'partly-cloudy';
  onTreeClick: (tree: any) => void;
  onCarClick: (car: any) => void;
  revealedNpcs?: Set<string>;
  userPortrait?: string;
}

export function GameWorld({ playerPos, npcs, onNpcClick, currentWorld, currentNpc, isMoving, facingLeft, blockades, pigeons = [], rats = [], cars, trees, weatherFilter, nycWeatherFilter, knoxvilleWeatherCondition, nycWeatherCondition, onTreeClick, onCarClick, revealedNpcs, userPortrait }: GameWorldProps) {
  const [idleFrameIndex, setIdleFrameIndex] = useState(0);
  const [viewportDimensions, setViewportDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const idleFrames = [playerIdleImage1, playerIdleImage2, playerIdleImage3];

  const VIEWPORT_WIDTH = viewportDimensions.width;
  const VIEWPORT_HEIGHT = viewportDimensions.height;
  const WORLD_WIDTH = 2000;
  const WORLD_HEIGHT = 1200;

  // Update viewport dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate camera offset to center on player
  const cameraX = Math.max(0, Math.min(playerPos.x - VIEWPORT_WIDTH / 2, WORLD_WIDTH - VIEWPORT_WIDTH));
  const cameraY = Math.max(0, Math.min(playerPos.y - VIEWPORT_HEIGHT / 2, WORLD_HEIGHT - VIEWPORT_HEIGHT));

  // Cycle through idle animations every 2 seconds
  useEffect(() => {
    const scheduleNextFrame = () => {
      const randomDelay = 2000 + Math.random() * 28000; // 2-30 seconds
      return setTimeout(() => {
        setIdleFrameIndex(prev => (prev + 1) % idleFrames.length);
      }, randomDelay);
    };

    const timeout = scheduleNextFrame();

    return () => clearTimeout(timeout);
  }, [idleFrameIndex]);
  
  // Check if current weather should show grain
  const shouldShowGrain = 
    (currentWorld === 'world1' && knoxvilleWeatherCondition === 'rainy') ||
    (currentWorld === 'world2' && nycWeatherCondition === 'rainy');

  return (
    <div 
      className="relative w-screen h-screen border-4 border-white rounded-lg overflow-hidden"
    >
      {/* World container that moves with camera */}
      <div
        className="absolute"
        style={{
          width: `${WORLD_WIDTH}px`,
          height: `${WORLD_HEIGHT}px`,
          left: `${-cameraX}px`,
          top: `${-cameraY}px`,
          backgroundImage: currentWorld === 'world1' ? `url(${knoxvilleBackground})` : `url(${nycBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top right',
          transition: 'left 0.1s, top 0.1s',
          filter: currentWorld === 'world1' ? weatherFilter : nycWeatherFilter
        }}
      >
        {/* Blockades (only in Knoxville/world1) */}
        {currentWorld === 'world1' && blockades.map(blockade => (
          <Blockade
            key={blockade.id}
            blockade={blockade}
          />
        ))}

        {/* Pigeons (only in NYC/world2) */}
        {currentWorld === 'world2' && pigeons.map(pigeon => (
          <Blockade
            key={pigeon.id}
            blockade={pigeon}
          />
        ))}

        {/* Rats (only in NYC/world2) */}
        {currentWorld === 'world2' && rats.map(rat => (
          <Blockade
            key={rat.id}
            blockade={rat}
          />
        ))}

        {/* Trees - show in both worlds */}
        {trees.map(tree => (
          <Blockade
            key={tree.id}
            blockade={tree}
            onClick={() => onTreeClick(tree)}
          />
        ))}

        {/* NPCs - render above trees */}
        {npcs.map(npc => (
          <NPC
            key={npc.id}
            npc={npc}
            onClick={() => onNpcClick(npc)}
            isActive={currentNpc?.id === npc.id}
            isRevealed={revealedNpcs?.has(npc.id)}
            world={currentWorld}
          />
        ))}

        {/* Cars - render on top of everything */}
        {cars.filter(car => {
          const carWorld = car.id.startsWith('car-nyc') ? 'world2' : 'world1';
          return carWorld === currentWorld;
        }).map(car => (
          <Car
            key={car.id}
            car={car}
            onClick={() => onCarClick(car)}
          />
        ))}

        <Shadow
          x={playerPos.x}
          y={playerPos.y}
          width={72}
          height={36}
          offsetY={24}
          zIndex={9}
        />

        {/* Player */}
        <img
          src={isMoving ? playerMovingImage : idleFrames[idleFrameIndex]}
          alt="Player"
          className="absolute w-24 h-24 transition-all duration-75 z-10 pointer-events-none"
          style={{
            left: `${playerPos.x - 48}px`,
            top: `${playerPos.y - 48}px`,
            transform: facingLeft ? 'scaleX(-1)' : 'scaleX(1)',
            filter: 'brightness(0) invert(1)'
          }}
        />
        
        {/* User portrait overlay - colored lines masked to player shape */}
        {userPortrait && (
          <div
            className="absolute transition-all duration-75 pointer-events-none"
            style={{
              left: `${playerPos.x - 48}px`,
              top: `${playerPos.y - 48}px`,
              width: '96px',
              height: '96px',
              transform: facingLeft ? 'scaleX(-1)' : 'scaleX(1)',
              zIndex: 11,
              maskImage: `url(${isMoving ? playerMovingImage : idleFrames[idleFrameIndex]})`,
              WebkitMaskImage: `url(${isMoving ? playerMovingImage : idleFrames[idleFrameIndex]})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}
          >
            <img
              src={userPortrait}
              alt="User portrait"
              className="w-full h-full object-contain"
              style={{
                filter: currentWorld === 'world2' 
                  ? 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(3500%) hue-rotate(200deg) brightness(105%) contrast(105%)' // Blue lines
                  : 'brightness(0) saturate(100%) invert(15%) sepia(98%) saturate(7495%) hue-rotate(359deg) brightness(95%) contrast(120%)' // Red lines
              }}
            />
          </div>
        )}
      </div>
      
      {shouldShowGrain && <GrainEffect />}
    </div>
  );
}