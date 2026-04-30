import { useState, useRef, useEffect } from 'react';

interface ProfileFormProps {
  onComplete: (profile: { name: string; identity: string; portrait: string }) => void;
  selectedWorld: 'world1' | 'world2' | null;
}

export function ProfileForm({ onComplete, selectedWorld }: ProfileFormProps) {
  const [identity, setIdentity] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set white background for visibility during drawing
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set drawing styles
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (canvas) {
      // Create a temporary canvas to convert white background to transparent
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      
      if (tempCtx) {
        // Draw the original canvas
        tempCtx.drawImage(canvas, 0, 0);
        
        // Get image data to process
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        
        // Convert white pixels to transparent, keep black pixels
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // If pixel is close to white, make it transparent
          if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }
        
        // Put the processed image data back
        tempCtx.putImageData(imageData, 0, 0);
        
        const portraitData = tempCanvas.toDataURL('image/png');
        onComplete({ name: '', identity, portrait: portraitData });
      }
    }
  };

  // Determine background color based on selected world
  const backgroundColor = selectedWorld === 'world2' 
    ? '#1e40af' // Cobalt blue for NYC
    : '#991b1b'; // Deep red for Knoxville

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center px-8 transition-opacity duration-1000"
      style={{ 
        opacity: isVisible ? 1 : 0,
        backgroundColor: backgroundColor
      }}
    >
      <form onSubmit={handleSubmit} className="w-full max-w-6xl">
        <h2 className="text-white text-5xl font-bold font-['Helvetica'] mb-12 text-center">
          Create Your Profile
        </h2>
        
        <div className="flex gap-12 items-start">
          {/* Left: Drawing Canvas */}
          <div className="flex-shrink-0">
            <label className="text-white text-2xl font-['Helvetica'] mb-4 block">
              Draw Your Portrait
            </label>
            <div className="relative">
              <canvas
                ref={canvasRef}
                width={400}
                height={400}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="border-4 border-white rounded-lg cursor-crosshair bg-white"
              />
              <button
                type="button"
                onClick={clearCanvas}
                className="mt-4 px-6 py-2 bg-white hover:bg-gray-200 text-black text-lg font-['Helvetica'] rounded-lg transition-all"
              >
                Clear Canvas
              </button>
            </div>
          </div>
          
          {/* Right: Form Fields */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <label className="text-white text-2xl font-['Helvetica'] mb-4 block">
                Explain Your Own Identity
              </label>
              <textarea
                value={identity}
                onChange={(e) => setIdentity(e.target.value)}
                required
                rows={12}
                className="w-full px-6 py-4 text-xl font-['Helvetica'] rounded-lg border-4 border-white bg-black text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                placeholder="Share your thoughts on your identity..."
              />
            </div>
            
            <button
              type="submit"
              className="px-12 py-6 bg-white hover:bg-gray-200 text-black text-2xl font-bold font-['Helvetica'] rounded-lg transition-all hover:scale-105 transform shadow-2xl self-end"
            >
              Enter butch.world
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}