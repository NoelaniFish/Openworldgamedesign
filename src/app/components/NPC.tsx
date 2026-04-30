interface NPCProps {
  npc: {
    id: string;
    name: string;
    x: number;
    y: number;
    color: string;
    letter?: string;
    image?: string;
  };
  onClick: () => void;
  isActive: boolean;
  isRevealed?: boolean;
  world?: 'world1' | 'world2';
}

export function NPC({ npc, onClick, isActive, isRevealed = false, world }: NPCProps) {
  // Debug logging
  console.log('NPC rendering:', { name: npc.name, hasImage: !!npc.image, imagePath: npc.image });

  // Always show image if it exists
  const showImage = npc.image;
  
  // NYC NPCs are 3/5 bigger than half size (72px * 1.6 = 115.2px)
  const isNYC = world === 'world2';
  const containerSize = isNYC ? 144 : 180;
  const offset = isNYC ? 72 : 90;
  const imageClass = isNYC ? 'w-29 h-29' : 'w-36 h-36';
  const circleSize = isNYC ? 72 : 90;
  const fontSize = isNYC ? '35px' : '45px';
  
  return (
    <div
      className="absolute cursor-pointer transition-all hover:scale-110 z-30"
      style={{
        left: `${npc.x - offset}px`,
        top: `${npc.y - offset}px`,
        width: `${containerSize}px`,
        height: `${containerSize}px`,
        pointerEvents: 'auto',
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-full h-full">
        {showImage ? (
          <img 
            src={npc.image} 
            alt={npc.name}
            className={`${imageClass} object-contain pointer-events-none ${isActive ? 'ring-4 ring-yellow-400 rounded-full' : ''}`}
          />
        ) : (
          <div 
            className={`rounded-full border-4 border-white shadow-lg flex items-center justify-center pointer-events-none ${isActive ? 'ring-4 ring-yellow-400' : ''}`}
            style={{ backgroundColor: npc.color, width: `${circleSize}px`, height: `${circleSize}px` }}
          >
            {npc.letter && (
              <span className="text-white text-xl uppercase select-none" style={{ fontSize }}>
                {npc.letter}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}