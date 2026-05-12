import { Shadow } from './Shadow';
import car1Image from 'figma:asset/6f6d88627d83702050ff44ff53e8fa5274c7c032.png';
import car2Image from 'figma:asset/68ef78cc7d1bff0281613edf407f13a563bd655d.png';
import car3Image from 'figma:asset/1a0089b9aeff528a766b3f1a73f3f5cbd1e95c91.png';
import car4Image from 'figma:asset/b4c04ca8e3c17adc9ac93d8c3e364a7e43846e8b.png';

interface CarProps {
  car: {
    id: string;
    type: 'car1' | 'car2' | 'car3' | 'car4';
    x: number;
    y: number;
    vx: number;
    vy: number;
  };
  onClick?: () => void;
}

const carImages = {
  car1: car1Image,
  car2: car2Image,
  car3: car3Image,
  car4: car4Image
};

export function Car({ car, onClick }: CarProps) {
  const image = carImages[car.type];
  const size = 72; // 288px total (3x player size of 96px) - 25% smaller than before
  
  // Cars should be horizontal with wheels on the bottom
  // Facing OPPOSITE of velocity direction (smoke trail shows where they came from)
  const facingLeft = car.vx > 0; // If moving right, face left (smoke behind)
  
  return (
    <>
      <Shadow
        x={car.x}
        y={car.y}
        width={size * 3}
        height={size * 1.5}
        offsetY={size}
        zIndex={19}
      />
      <div
        className="absolute cursor-pointer hover:opacity-90 transition-opacity z-20"
        style={{
          left: `${car.x - size * 2}px`,
          top: `${car.y - size * 2}px`,
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          pointerEvents: 'auto',
        }}
        onClick={onClick}
      >
        <img
          src={image}
          alt="car"
          className="absolute"
          style={{
            width: '100%',
            height: '100%',
            transform: `scaleX(${facingLeft ? -1 : 1})`,
            transformOrigin: 'center center'
          }}
        />
      </div>
    </>
  );
}