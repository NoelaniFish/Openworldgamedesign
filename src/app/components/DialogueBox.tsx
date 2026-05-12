import { useState, useEffect } from 'react';
import amberPortrait from 'figma:asset/8d059209cc7277c78c75868132f115dfe7032cc7.png';
import playerPortrait1 from 'figma:asset/5854554aaa991c7f576b96aafdbb51d68eaef82a.png';
import playerPortrait2 from 'figma:asset/fdc9d0d4d6bee91a1195a5b8a36f3b356cc873f9.png';
import playerPortrait3 from 'figma:asset/79dd05f1739d7883febf75b05c913b207211c0d1.png';
import knoxvilleDialogueBg from 'figma:asset/a740d7695efd8e78acb4f95fa995dd1499527d2e.png';
import nycDialogueBg from 'figma:asset/acfb5c98a9570dee20cd4a358d26d838f88577bd.png';

interface DialogueBoxProps {
  dialogue: {
    text: string;
    choices?: Array<{
      text: string;
      next: any;
    }>;
  };
  npcName: string;
  npcPortrait: string;
  onChoice: (nextDialogue: any) => void;
  currentWorld: 'world1' | 'world2';
  rootDialogue?: any;
  isMobile?: boolean;
}

const exitQuips = [
  "Gotta run, talk later!",
  "This has been... interesting.",
  "I've heard enough for now.",
  "Let me think about that.",
  "Catch you later!",
  "I need to keep moving.",
  "Thanks for the chat!",
  "I'll be on my way now."
];

export function DialogueBox({ dialogue, npcName, npcPortrait, onChoice, currentWorld, rootDialogue, isMobile = false }: DialogueBoxProps) {
  const [playerPortraitIndex, setPlayerPortraitIndex] = useState(0);
  const [colorShift, setColorShift] = useState(0);
  const [exitQuip, setExitQuip] = useState('');
  const [noiseOffset, setNoiseOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const playerPortraits = [playerPortrait1, playerPortrait2, playerPortrait3];
  
  // Trigger fade-in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Set a new random exit quip whenever dialogue changes
  useEffect(() => {
    const randomQuip = exitQuips[Math.floor(Math.random() * exitQuips.length)];
    setExitQuip(randomQuip);
  }, [dialogue.text]); // Re-randomize when dialogue text changes
  
  // Rotate player portrait at random intervals
  useEffect(() => {
    const changePortrait = () => {
      setPlayerPortraitIndex(prev => (prev + 1) % playerPortraits.length);
      const nextDelay = Math.random() * 50000 + 10000; // 10-60 seconds
      return setTimeout(changePortrait, nextDelay);
    };
    
    const timeout = changePortrait();
    return () => clearTimeout(timeout);
  }, []);
  
  // Animate color shift only
  useEffect(() => {
    const interval = setInterval(() => {
      setColorShift(prev => (prev + 0.3) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animate noise effect
  useEffect(() => {
    const animateNoise = () => {
      setNoiseOffset(prev => (prev + 1) % 100);
    };
    
    const interval = setInterval(animateNoise, 50);
    return () => clearInterval(interval);
  }, []);
  
  // Determine player portrait filter based on world
  const playerPortraitFilter = currentWorld === 'world2' ? 'brightness-0 invert' : '';
  
  // Get gradient colors based on world with shifting hues
  const getShiftedColors = () => {
    if (currentWorld === 'world2') {
      // NYC: Only cool tones (cyan, blue, green)
      return {
        color1: `hsl(${180 + colorShift * 0.3}, 50%, ${15 + Math.sin(colorShift * 0.05) * 5}%)`,
        color2: `hsl(${210 + colorShift * 0.2}, 45%, ${20 + Math.sin(colorShift * 0.07) * 6}%)`,
        color3: `hsl(${150 + colorShift * 0.4}, 40%, ${18 + Math.sin(colorShift * 0.09) * 7}%)`,
      };
    } else {
      // Knoxville: Only warm tones (red, orange, yellow)
      return {
        color1: `hsl(${0 + colorShift * 0.3}, 70%, ${25 + Math.sin(colorShift * 0.05) * 8}%)`,
        color2: `hsl(${30 + colorShift * 0.2}, 85%, ${30 + Math.sin(colorShift * 0.07) * 10}%)`,
        color3: `hsl(${15 + colorShift * 0.4}, 75%, ${22 + Math.sin(colorShift * 0.09) * 8}%)`,
      };
    }
  };
  
  const gradientColors = getShiftedColors();
  
  return (
    <>
      {/* Background - Image for Knoxville, Gradient for NYC */}
      {currentWorld === 'world1' ? (
        // Knoxville: Aerial roadmap image background
        <div 
          className="fixed inset-0 z-40 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${knoxvilleDialogueBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Animated grain layers */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent 0px,
                  rgba(255, 255, 255, 0.15) 1px,
                  transparent 2px,
                  rgba(0, 0, 0, 0.15) 3px,
                  transparent 4px
                )
              `,
              animation: 'grain-fast 0.15s steps(6) infinite',
              mixBlendMode: 'overlay'
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  -45deg,
                  transparent 0px,
                  rgba(255, 255, 255, 0.2) 2px,
                  transparent 4px,
                  rgba(0, 0, 0, 0.2) 6px,
                  transparent 8px
                )
              `,
              animation: 'grain-medium 0.25s steps(5) infinite',
              mixBlendMode: 'soft-light'
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at ${noiseOffset % 100}% ${(noiseOffset * 1.3) % 100}%,
                  rgba(255, 255, 255, 0.25) 0%,
                  transparent 50%
                ),
                radial-gradient(
                  circle at ${(100 - noiseOffset) % 100}% ${(noiseOffset * 0.8) % 100}%,
                  rgba(0, 0, 0, 0.25) 0%,
                  transparent 50%
                )
              `,
              mixBlendMode: 'overlay',
              filter: 'blur(0.5px)'
            }}
          />
        </div>
      ) : (
        // NYC: Aerial map with colored transit lines background
        <div 
          className="fixed inset-0 z-40 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${nycDialogueBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Animated grain layers */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent 0px,
                  rgba(255, 255, 255, 0.15) 1px,
                  transparent 2px,
                  rgba(0, 0, 0, 0.15) 3px,
                  transparent 4px
                )
              `,
              animation: 'grain-fast 0.15s steps(6) infinite',
              mixBlendMode: 'overlay'
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  -45deg,
                  transparent 0px,
                  rgba(255, 255, 255, 0.2) 2px,
                  transparent 4px,
                  rgba(0, 0, 0, 0.2) 6px,
                  transparent 8px
                )
              `,
              animation: 'grain-medium 0.25s steps(5) infinite',
              mixBlendMode: 'soft-light'
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at ${noiseOffset % 100}% ${(noiseOffset * 1.3) % 100}%,
                  rgba(255, 255, 255, 0.25) 0%,
                  transparent 50%
                ),
                radial-gradient(
                  circle at ${(100 - noiseOffset) % 100}% ${(noiseOffset * 0.8) % 100}%,
                  rgba(0, 0, 0, 0.25) 0%,
                  transparent 50%
                )
              `,
              mixBlendMode: 'overlay',
              filter: 'blur(0.5px)'
            }}
          />
        </div>
      )}
      
      {isMobile ? (
        /* Mobile Layout: Portrait on top, dialogue below, options at bottom */
        <>
          {/* NPC portrait centered at top */}
          <div
            className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate(-50%, 0)' : 'translate(-50%, -50px)',
            }}
          >
            <img
              src={npcPortrait}
              alt="NPC portrait"
              className="object-contain drop-shadow-2xl"
              style={{ width: '50vw', height: '50vw' }}
            />
          </div>

          {/* Dialogue text below portrait */}
          <div
            className="fixed left-3 right-3 z-50 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
              top: 'calc(50vw + 1rem)',
            }}
          >
            <div className="bg-black/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl">
              <h3 className="text-yellow-400 mb-1 text-base font-bold font-['Helvetica']">{npcName}</h3>
              <p className="text-white text-xs leading-snug font-['Helvetica']">{dialogue.text}</p>
            </div>
          </div>

          {/* Answer choices at bottom */}
          <div
            className="fixed bottom-2 left-3 right-3 z-50 transition-all duration-1000 max-h-[45vh] overflow-y-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            }}
          >
            <div className="bg-black/90 backdrop-blur-sm rounded-lg p-3 shadow-2xl">
              <h4 className="text-yellow-400 mb-2 text-sm font-bold font-['Helvetica'] text-center">Your Response:</h4>
              <div className="grid grid-cols-1 gap-1.5">
                {dialogue.choices && dialogue.choices.length > 0 && (
                  dialogue.choices.map((choice, index) => {
                    const isRestart = choice.next?.__restart === true;
                    const isExit = choice.next?.__exit === true;
                    return (
                      <button
                        key={index}
                        onClick={() => isExit ? onChoice(null) : onChoice(choice.next)}
                        className={`w-full text-left px-3 py-2 ${
                          isRestart
                            ? 'bg-blue-900/70 hover:bg-blue-800 border-blue-600 hover:border-blue-400'
                            : isExit
                            ? 'bg-red-900/70 hover:bg-red-800 border-red-600 hover:border-red-400'
                            : 'bg-gray-800/90 hover:bg-gray-700 border-gray-600 hover:border-yellow-400'
                        } text-white rounded-lg border-2 transition-all text-xs font-['Helvetica'] ${
                          isRestart || isExit ? 'italic' : ''
                        }`}
                      >
                        <span className={`${
                          isRestart
                            ? 'text-blue-400'
                            : isExit
                            ? 'text-red-400'
                            : 'text-yellow-400'
                        } mr-1.5 text-sm`}>
                          {isRestart ? '↻' : isExit ? '✕' : '▶'}
                        </span>
                        {choice.text}
                      </button>
                    );
                  })
                )}
                {rootDialogue && (!dialogue.choices || dialogue.choices.length === 0) && (
                  <>
                    <button
                      onClick={() => onChoice(rootDialogue)}
                      className="w-full text-left px-3 py-2 bg-blue-900/70 hover:bg-blue-800 text-white rounded-lg border-2 border-blue-600 hover:border-blue-400 transition-all text-xs font-['Helvetica'] italic"
                    >
                      <span className="text-blue-400 mr-1.5 text-sm">↻</span>
                      let's try that again
                    </button>
                    <button
                      onClick={() => onChoice(null)}
                      className="w-full text-left px-3 py-2 bg-red-900/70 hover:bg-red-800 text-white rounded-lg border-2 border-red-600 hover:border-red-400 transition-all text-xs font-['Helvetica'] italic"
                    >
                      <span className="text-red-400 mr-1.5 text-sm">✕</span>
                      "{exitQuip}"
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Desktop Layout: Original layout */
        <>
          {/* NPC portrait in the left corner */}
          <div
            className="fixed top-0 left-0 z-50 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            }}
          >
            <img
              src={npcPortrait}
              alt="NPC portrait"
              className="object-contain drop-shadow-2xl"
              style={{ width: '50vw', height: '50vw' }}
            />
          </div>

          {/* Dialogue text in upper center */}
          <div
            className="fixed top-8 left-8 right-8 mx-auto max-w-3xl z-50 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
              marginLeft: 'calc(50vw + 2rem)',
            }}
          >
            <div className="bg-black backdrop-blur-sm rounded-xl p-6 shadow-2xl">
              <h3 className="text-yellow-400 mb-3 text-2xl font-bold font-['Helvetica']">{npcName}</h3>
              <p className="text-white text-xl leading-relaxed font-['Helvetica']">{dialogue.text}</p>
            </div>
          </div>

          {/* Answer choices spanning the bottom */}
          <div
            className="fixed bottom-8 left-8 right-8 mx-auto max-w-5xl z-50 transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            }}
          >
            <div className="bg-black backdrop-blur-sm rounded-xl p-6 shadow-2xl">
              <h4 className="text-yellow-400 mb-4 text-xl font-bold font-['Helvetica'] text-center">Your Response:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dialogue.choices && dialogue.choices.length > 0 && (
                  dialogue.choices.map((choice, index) => {
                    const isRestart = choice.next?.__restart === true;
                    const isExit = choice.next?.__exit === true;
                    return (
                      <button
                        key={index}
                        onClick={() => onChoice(choice.next)}
                        className={`w-full text-left px-6 py-4 ${
                          isRestart
                            ? 'bg-blue-900/70 hover:bg-blue-800 border-blue-600 hover:border-blue-400'
                            : isExit
                            ? 'bg-red-900/70 hover:bg-red-800 border-red-600 hover:border-red-400'
                            : 'bg-gray-800/90 hover:bg-gray-700 border-gray-600 hover:border-yellow-400'
                        } text-white rounded-lg border-2 transition-all text-lg font-['Helvetica'] hover:scale-105 transform ${
                          isRestart || isExit ? 'italic' : ''
                        }`}
                      >
                        <span className={`${
                          isRestart
                            ? 'text-blue-400'
                            : isExit
                            ? 'text-red-400'
                            : 'text-yellow-400'
                        } mr-3 text-xl`}>
                          {isRestart ? '↻' : isExit ? '✕' : '▶'}
                        </span>
                        {choice.text}
                      </button>
                    );
                  })
                )}
                {/* Show "let's try that again" and exit buttons at conversation end points */}
                {rootDialogue && (!dialogue.choices || dialogue.choices.length === 0) && (
                  <>
                    <button
                      onClick={() => onChoice(rootDialogue)}
                      className="w-full text-left px-6 py-4 bg-blue-900/70 hover:bg-blue-800 text-white rounded-lg border-2 border-blue-600 hover:border-blue-400 transition-all text-lg font-['Helvetica'] hover:scale-105 transform italic"
                    >
                      <span className="text-blue-400 mr-3 text-xl">↻</span>
                      let's try that again
                    </button>
                    <button
                      onClick={() => onChoice(null)}
                      className="w-full text-left px-6 py-4 bg-red-900/70 hover:bg-red-800 text-white rounded-lg border-2 border-red-600 hover:border-red-400 transition-all text-lg font-['Helvetica'] hover:scale-105 transform italic"
                    >
                      <span className="text-red-400 mr-3 text-xl">✕</span>
                      "{exitQuip}"
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      
      <style>{`
        @keyframes grain-fast {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        
        @keyframes grain-medium {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
      `}</style>
    </>
  );
}