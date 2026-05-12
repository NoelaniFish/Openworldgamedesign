import { useState, useRef, useEffect } from 'react';
import fullBodyImage from '../imports/Untitled_Artwork_32-1.gif';

interface ProfileFormProps {
  onComplete: (profile: { name: string; identity: string; portrait: string }) => void;
  selectedWorld: 'world1' | 'world2' | null;
}

export function ProfileForm({ onComplete, selectedWorld }: ProfileFormProps) {
  const [identity, setIdentity] = useState('');
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const drawingCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [avatarMaskLoaded, setAvatarMaskLoaded] = useState(false);
  const [noiseOffset, setNoiseOffset] = useState(0);
  const avatarImageRef = useRef<HTMLImageElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Fade in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animate noise/grain effect with random seeds
  useEffect(() => {
    const animateNoise = () => {
      setNoiseOffset(Math.random() * 1000);
    };

    const interval = setInterval(animateNoise, 50); // Update noise every 50ms with random position
    return () => clearInterval(interval);
  }, []);

  // Helper function to create white-filled body from avatar mask
  const createAvatarOutline = (ctx: CanvasRenderingContext2D, maskCtx: CanvasRenderingContext2D) => {
    const maskImageData = maskCtx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const maskPixels = maskImageData.data;
    const outlineImageData = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
    const outlinePixels = outlineImageData.data;

    // Fill the entire body with white
    for (let y = 0; y < ctx.canvas.height; y++) {
      for (let x = 0; x < ctx.canvas.width; x++) {
        const i = (y * ctx.canvas.width + x) * 4;

        if (maskPixels[i + 3] > 0) {
          // Fill all pixels inside the mask with white
          outlinePixels[i] = 255;
          outlinePixels[i + 1] = 255;
          outlinePixels[i + 2] = 255;
          outlinePixels[i + 3] = 255;
        }
      }
    }

    ctx.putImageData(outlineImageData, 0, 0);
  };

  // Initialize canvas with animated full body avatar
  useEffect(() => {
    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    const drawingCanvas = drawingCanvasRef.current;
    if (!canvas || !maskCanvas || !drawingCanvas) return;

    const ctx = canvas.getContext('2d');
    const maskCtx = maskCanvas.getContext('2d');
    const drawingCtx = drawingCanvas.getContext('2d');
    if (!ctx || !maskCtx || !drawingCtx) return;

    // Load the animated GIF
    const img = new Image();
    img.onload = () => {
      avatarImageRef.current = img;

      // Calculate scale to fill canvas
      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;

      // Draw mask (static, for hit detection)
      maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
      maskCtx.drawImage(img, x, y, scaledWidth, scaledHeight);

      // Animate the base canvas with the GIF
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      animate();

      // Set drawing styles for the drawing layer
      drawingCtx.strokeStyle = 'black';
      drawingCtx.lineWidth = 1.5;
      drawingCtx.lineCap = 'round';
      drawingCtx.lineJoin = 'round';

      setAvatarMaskLoaded(true);
    };
    img.src = fullBodyImage;

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!avatarMaskLoaded) return;

    const drawingCanvas = drawingCanvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!drawingCanvas || !maskCanvas) return;

    const drawingCtx = drawingCanvas.getContext('2d');
    const maskCtx = maskCanvas.getContext('2d');
    if (!drawingCtx || !maskCtx) return;

    const rect = drawingCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only start drawing if inside the avatar mask
    const maskData = maskCtx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
    if (maskData[3] > 0) {
      setIsDrawing(true);
      drawingCtx.beginPath();
      drawingCtx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !avatarMaskLoaded) return;

    const drawingCanvas = drawingCanvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!drawingCanvas || !maskCanvas) return;

    const drawingCtx = drawingCanvas.getContext('2d');
    const maskCtx = maskCanvas.getContext('2d');
    if (!drawingCtx || !maskCtx) return;

    const rect = drawingCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if inside the avatar mask
    const maskData = maskCtx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;

    if (maskData[3] > 0) {
      drawingCtx.lineTo(x, y);
      drawingCtx.stroke();
    } else {
      // Start new path when re-entering mask
      drawingCtx.beginPath();
      drawingCtx.moveTo(x, y);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const drawingCanvas = drawingCanvasRef.current;
    if (!drawingCanvas) return;

    const drawingCtx = drawingCanvas.getContext('2d');
    if (!drawingCtx) return;

    // Clear only the drawing layer (base animated GIF continues)
    drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

    // Reset drawing styles
    drawingCtx.strokeStyle = 'black';
    drawingCtx.lineWidth = 1.5;
    drawingCtx.lineCap = 'round';
    drawingCtx.lineJoin = 'round';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const drawingCanvas = drawingCanvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!drawingCanvas || !maskCanvas) return;

    // Create temporary canvas for processing
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = drawingCanvas.width;
    tempCanvas.height = drawingCanvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    const maskCtx = maskCanvas.getContext('2d');
    if (!tempCtx || !maskCtx) return;

    // Draw the drawing layer
    tempCtx.drawImage(drawingCanvas, 0, 0);

    // Get image data
    const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    const maskData = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height);
    const data = imageData.data;
    const mask = maskData.data;

    // Apply avatar mask - make transparent if outside mask
    for (let i = 0; i < data.length; i += 4) {
      const maskAlpha = mask[i + 3];

      // Make transparent if outside the avatar mask
      if (maskAlpha === 0) {
        data[i + 3] = 0;
      }
    }

    // Apply processed data and convert to base64
    tempCtx.putImageData(imageData, 0, 0);
    const portraitData = tempCanvas.toDataURL('image/png');
    onComplete({ name: '', identity, portrait: portraitData });
  };

  // Determine background gradient based on selected world
  const backgroundGradient = selectedWorld === 'world2'
    ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #1e40af 75%, #1e3a8a 100%)' // Blue gradient for NYC
    : 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #991b1b 75%, #7f1d1d 100%)'; // Red gradient for Knoxville

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto transition-opacity duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        background: backgroundGradient
      }}
    >
      {/* Animated noise/grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundPosition: `${noiseOffset}% ${noiseOffset}%`,
          backgroundSize: '150px 150px',
          mixBlendMode: 'overlay',
          opacity: 0.9
        }}
      />

      <div className="min-h-screen flex items-center justify-center py-6 px-6">
        <form onSubmit={handleSubmit} className="w-full max-w-4xl relative z-10">
          <h2 className="text-white text-8xl font-bold font-['Instrument_Serif'] mb-6 text-center tracking-tight">
            create your profile
          </h2>

          <div className="flex gap-6 items-start">
            {/* Left: Drawing Canvas */}
            <div className="flex-shrink-0 flex flex-col justify-between" style={{ height: '100%' }}>
              <div>
                <label className="text-white text-lg font-['Helvetica'] mb-3 block tracking-wide">
                  draw your portrait
                </label>
                <div className="relative flex flex-col items-center mt-8">
                  <div className="relative">
                    {/* Base canvas - animated GIF */}
                    <canvas
                      ref={canvasRef}
                      width={300}
                      height={340}
                      className="absolute top-0 left-0"
                      style={{ pointerEvents: 'none' }}
                    />
                    {/* Drawing layer - transparent, on top */}
                    <canvas
                      ref={drawingCanvasRef}
                      width={300}
                      height={340}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      className="cursor-crosshair relative"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                  {/* Hidden canvas for mask detection */}
                  <canvas
                    ref={maskCanvasRef}
                    width={300}
                    height={340}
                    className="hidden"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={clearCanvas}
                className="px-5 py-2 bg-black border-2 border-white hover:bg-white hover:text-black text-white text-sm font-['Helvetica'] rounded-lg transition-all self-start"
              >
                clear canvas
              </button>
            </div>

            {/* Right: Form Fields */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="mb-6">
                <label className="text-white text-lg font-['Helvetica'] mb-3 block tracking-wide">
                  share your thoughts
                </label>
                <div className="border-4 border-white rounded-2xl p-2 bg-black shadow-2xl">
                  <textarea
                    value={identity}
                    onChange={(e) => setIdentity(e.target.value)}
                    required
                    rows={8}
                    className="w-full px-5 py-3 text-base rounded-lg bg-black text-white focus:outline-none resize-none placeholder-gray-400 identity-textarea"
                    placeholder="share your thoughts on your identity..."
                    style={{
                      fontFamily: "'The Girl Next Door', cursive"
                    }}
                  />
                </div>
                <style>{`
                  .identity-textarea::placeholder {
                    font-family: 'Helvetica', sans-serif;
                  }
                `}</style>
              </div>

              <button
                type="submit"
                className="px-10 py-3 bg-black border-2 border-white hover:bg-white hover:text-black text-white text-lg font-bold font-['Helvetica'] rounded-lg transition-all hover:scale-105 transform shadow-2xl self-end"
              >
                enter butch.world
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}