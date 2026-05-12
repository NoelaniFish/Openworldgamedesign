import { Shadow } from './Shadow';
import raccoonImage from 'figma:asset/4ec2f284fb07317c7ac65f6d5da7ef4da4211a42.png';
import chickenImage from 'figma:asset/2d71bd5bbe6de62ca2e0f3e5b96da12cb54d9765.png';
import flockImage from 'figma:asset/2dbac79976483e1e0bbce34cb1d458b2e36d0a33.png';
import pigeonImage from 'figma:asset/77092cc073ffb9f9bf30a261d54d1f6da460c8c1.png';
import pigeonPairImage from 'figma:asset/faae96ac2b3769e95174029483154bfc494485a5.png';
import pigeonFlockImage from 'figma:asset/e92eb1d6a6d4ff87229e792be14e59f5d44d3139.png';
import ratImage from 'figma:asset/08ab30300a076585ad2e7ad0282372a70172a44d.png';
import tree1Image from 'figma:asset/468067e7958c86d3dba715b8f26b4af3ff679c7d.png';
import tree2Image from 'figma:asset/05c3fc12dc654815a7d8b21fe43adb06d23e2c50.png';
import tree3Image from 'figma:asset/d27e6e76f3fffac5a1c5b074841902a34dc4cf2f.png';
import tree4Image from 'figma:asset/64a46dc5653ba1aae5712394d85ea7cd66244eae.png';
import tree5Image from 'figma:asset/db5d619b3a9489bbd9d7c11a925e032bb437df3a.png';

interface BlockadeProps {
  blockade: {
    id: string;
    type: 'raccoon' | 'chicken' | 'bird' | 'flock' | 'pigeon' | 'pigeonPair' | 'pigeonFlock' | 'rat' | 'tree';
    x: number;
    y: number;
    treeVariant?: number;
  };
  onClick?: () => void;
}

export function Blockade({ blockade, onClick }: BlockadeProps) {
  let image = raccoonImage;
  let size = 20; // Default size for raccoons and chickens
  let isClickable = false;
  
  if (blockade.type === 'raccoon') {
    image = raccoonImage;
  } else if (blockade.type === 'chicken') {
    image = chickenImage;
  } else if (blockade.type === 'bird') {
    image = flockImage;
    size = 20; // Same size as raccoons/chickens for single birds
  } else if (blockade.type === 'flock') {
    image = flockImage;
    size = 40; // 2x bigger for flocks
  } else if (blockade.type === 'pigeon') {
    image = pigeonImage;
    size = 20; // Same size as single birds
  } else if (blockade.type === 'pigeonPair') {
    image = pigeonPairImage;
    size = 30; // Bigger for pair
  } else if (blockade.type === 'pigeonFlock') {
    image = pigeonFlockImage;
    size = 40; // Same as bird flock
  } else if (blockade.type === 'rat') {
    image = ratImage;
    size = 25; // Slightly bigger than pigeon
  } else if (blockade.type === 'tree') {
    // Select tree image based on variant
    const treeImages = [tree1Image, tree2Image, tree3Image, tree4Image, tree5Image];
    image = treeImages[blockade.treeVariant || 0];
    size = 50; // Large size for trees
    isClickable = true;
  }
  
  return (
    <>
      <Shadow
        x={blockade.x}
        y={blockade.y}
        width={size * 3}
        height={size * 1.5}
        offsetY={size}
      />
      <img
        src={image}
        alt={blockade.type}
        className={`absolute transition-transform ${isClickable ? 'cursor-pointer hover:scale-110' : 'pointer-events-none'}`}
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          left: `${blockade.x - size * 2}px`,
          top: `${blockade.y - size * 2}px`,
        }}
        onClick={isClickable ? onClick : undefined}
      />
    </>
  );
}