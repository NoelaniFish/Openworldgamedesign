import { useState, useEffect } from 'react';

export function GrainEffect() {
  const [noiseOffset, setNoiseOffset] = useState(0);

  useEffect(() => {
    const animateNoise = () => {
      setNoiseOffset(prev => (prev + 1) % 100);
    };

    const interval = setInterval(animateNoise, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Layer 1: Fast moving grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent 0px,
              rgba(255, 255, 255, 0.2) 1px,
              transparent 2px,
              rgba(0, 0, 0, 0.2) 3px,
              transparent 4px
            )
          `,
          animation: 'grain-fast 0.15s steps(6) infinite',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Layer 2: Medium moving grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent 0px,
              rgba(255, 255, 255, 0.25) 2px,
              transparent 4px,
              rgba(0, 0, 0, 0.25) 6px,
              transparent 8px
            )
          `,
          animation: 'grain-medium 0.25s steps(5) infinite',
          mixBlendMode: 'soft-light'
        }}
      />

      {/* Layer 3: Slow moving noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at ${noiseOffset % 100}% ${(noiseOffset * 1.3) % 100}%,
              rgba(255, 255, 255, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at ${(100 - noiseOffset) % 100}% ${(noiseOffset * 0.8) % 100}%,
              rgba(0, 0, 0, 0.3) 0%,
              transparent 50%
            )
          `,
          animation: 'grain-slow 0.6s linear infinite',
          mixBlendMode: 'overlay',
          filter: 'blur(0.5px)'
        }}
      />

      {/* Layer 4: Heavy static grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.15) 0px,
              rgba(0, 0, 0, 0.15) 2px,
              transparent 4px,
              rgba(128, 128, 128, 0.2) 6px,
              transparent 8px
            )
          `,
          animation: 'grain-heavy 0.1s steps(8) infinite',
          mixBlendMode: 'hard-light'
        }}
      />

      {/* Layer 5: Flickering overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.3) 0%,
              transparent 20%,
              rgba(0, 0, 0, 0.3) 40%,
              transparent 60%,
              rgba(255, 255, 255, 0.3) 80%,
              transparent 100%
            )
          `,
          animation: 'grain-flicker 0.2s steps(4) infinite',
          mixBlendMode: 'overlay'
        }}
      />

      <style>{`
        @keyframes grain-fast {
          0% { transform: translate(0, 0); opacity: 0.6; }
          16% { transform: translate(-3px, 2px); opacity: 0.7; }
          33% { transform: translate(2px, -3px); opacity: 0.5; }
          50% { transform: translate(-2px, 3px); opacity: 0.8; }
          66% { transform: translate(3px, -2px); opacity: 0.6; }
          83% { transform: translate(-3px, -3px); opacity: 0.7; }
          100% { transform: translate(2px, 2px); opacity: 0.6; }
        }

        @keyframes grain-medium {
          0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          20% { transform: translate(2px, -2px) scale(1.05); opacity: 0.6; }
          40% { transform: translate(-2px, 2px) scale(0.95); opacity: 0.7; }
          60% { transform: translate(3px, 1px) scale(1.03); opacity: 0.5; }
          80% { transform: translate(-1px, -2px) scale(0.97); opacity: 0.6; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        }

        @keyframes grain-slow {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-2px, 2px) rotate(2deg); }
          50% { transform: translate(2px, -1px) rotate(-2deg); }
          75% { transform: translate(-1px, -2px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes grain-heavy {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.35; }
          12.5% { transform: translate(-4px, 3px) rotate(1deg); opacity: 0.45; }
          25% { transform: translate(3px, -4px) rotate(-1deg); opacity: 0.3; }
          37.5% { transform: translate(-3px, -3px) rotate(0.5deg); opacity: 0.5; }
          50% { transform: translate(4px, 2px) rotate(-0.5deg); opacity: 0.35; }
          62.5% { transform: translate(-2px, 4px) rotate(1deg); opacity: 0.4; }
          75% { transform: translate(3px, -2px) rotate(-1deg); opacity: 0.45; }
          87.5% { transform: translate(-4px, -4px) rotate(0.5deg); opacity: 0.3; }
          100% { transform: translate(2px, 3px) rotate(0deg); opacity: 0.35; }
        }

        @keyframes grain-flicker {
          0% { opacity: 0.3; }
          25% { opacity: 0.5; }
          50% { opacity: 0.2; }
          75% { opacity: 0.4; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </>
  );
}
