import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { GameWorld } from '../components/GameWorld';
import { DialogueBox } from '../components/DialogueBox';
import { WorldSelector } from '../components/WorldSelector';
import { TreeFactModal } from '../components/TreeFactModal';
import { NotepadModal } from '../components/NotepadModal';
import { SettingsPanel } from '../components/SettingsPanel';
import { npcsWorld1, npcsWorld2 } from '../components/npcData';
import { useKnoxvilleWeather } from '../hooks/useKnoxvilleWeather';
import { useNYCWeather } from '../hooks/useNYCWeather';
import { treeFacts } from '../components/treeFacts';
import homingSound from '../imports/homing.mp3';
import maloneyRdSound from '../imports/Maloney_Rd_2.mp3';

// Generate trees of knowledge (8-12 trees)
const generateTrees = () => {
  const treeCount = Math.floor(Math.random() * 5) + 8;
  const trees = [];

  for (let i = 0; i < treeCount; i++) {
    const factIndex = Math.floor(Math.random() * treeFacts.length);
    trees.push({
      id: `tree-${i}`,
      type: 'tree' as const,
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100,
      treeVariant: Math.floor(Math.random() * 5),
      factIndex
    });
  }

  console.log(`Generated ${trees.length} trees with facts:`, trees.map(t => ({ id: t.id, factIndex: t.factIndex, fact: treeFacts[t.factIndex] })));
  return trees;
};

// Generate random blockades (2-6 of them)
const generateBlockades = () => {
  const animalCount = Math.floor(Math.random() * 5) + 2;
  const flockCount = Math.floor(Math.random() * 7) + 2;
  const birdCount = Math.floor(Math.random() * 5) + 2;
  const animalTypes: ('raccoon' | 'chicken')[] = ['raccoon', 'chicken'];
  const blockades = [];

  for (let i = 0; i < animalCount; i++) {
    blockades.push({
      id: `blockade-${i}`,
      type: animalTypes[Math.floor(Math.random() * animalTypes.length)],
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100
    });
  }

  for (let i = 0; i < flockCount; i++) {
    blockades.push({
      id: `blockade-flock-${i}`,
      type: 'flock' as const,
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100
    });
  }

  for (let i = 0; i < birdCount; i++) {
    blockades.push({
      id: `blockade-bird-${i}`,
      type: 'bird' as const,
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100
    });
  }

  return blockades;
};

// Generate random cars for Knoxville (3-5 cars)
const generateKnoxvilleCars = () => {
  const carCount = Math.floor(Math.random() * 3) + 3;
  const carTypes: ('car1' | 'car2' | 'car3' | 'car4')[] = ['car1', 'car2', 'car3', 'car4'];
  const cars = [];

  for (let i = 0; i < carCount; i++) {
    const vx = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 3 + 4);
    const vy = 0;

    cars.push({
      id: `car-knox-${i}`,
      type: carTypes[Math.floor(Math.random() * carTypes.length)],
      x: Math.random() * 1600 + 200,
      y: Math.random() * 800 + 200,
      vx,
      vy,
      world: 'world1' as const
    });
  }

  return cars;
};

// Generate random pigeons for NYC
const generatePigeons = () => {
  const pigeonCount = Math.floor(Math.random() * 5) + 2;
  const pigeonPairCount = Math.floor(Math.random() * 4) + 2;
  const pigeonFlockCount = Math.floor(Math.random() * 5) + 2;
  const pigeons = [];

  for (let i = 0; i < pigeonCount; i++) {
    pigeons.push({
      id: `pigeon-${i}`,
      type: 'pigeon' as const,
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100
    });
  }

  for (let i = 0; i < pigeonPairCount; i++) {
    pigeons.push({
      id: `pigeon-pair-${i}`,
      type: 'pigeonPair' as const,
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100
    });
  }

  for (let i = 0; i < pigeonFlockCount; i++) {
    pigeons.push({
      id: `pigeon-flock-${i}`,
      type: 'pigeonFlock' as const,
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100
    });
  }

  return pigeons;
};

// Generate random rats for NYC
const generateRats = () => {
  const ratCount = Math.floor(Math.random() * 4) + 3;
  const rats = [];

  for (let i = 0; i < ratCount; i++) {
    rats.push({
      id: `rat-${i}`,
      type: 'rat' as const,
      x: Math.random() * 2360 + 100,
      y: Math.random() * 1240 + 100
    });
  }

  return rats;
};

export function GameWorldPage() {
  const navigate = useNavigate();
  const { world } = useParams<{ world: 'knoxville' | 'nyc' }>();
  const currentWorld: 'world1' | 'world2' = world === 'knoxville' ? 'world1' : 'world2';

  // Load user profile
  const userProfileStr = sessionStorage.getItem('userProfile');
  const userProfile = userProfileStr ? JSON.parse(userProfileStr) : null;

  // Redirect to intro if no profile
  useEffect(() => {
    if (!userProfile) {
      navigate('/intro');
    }
  }, [userProfile, navigate]);

  const [player, setPlayer] = useState({ x: 1280, y: 720 });
  const [currentDialogue, setCurrentDialogue] = useState<any>(null);
  const [currentNpc, setCurrentNpc] = useState<any>(null);
  const [keysPressed, setKeysPressed] = useState<Set<string>>(new Set());
  const [isMoving, setIsMoving] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [revealedNpcs, setRevealedNpcs] = useState<Set<string>>(new Set());

  const knoxvilleWeather = useKnoxvilleWeather();
  const nycWeather = useNYCWeather();

  const [trees] = useState(generateTrees());
  const [selectedTreeFact, setSelectedTreeFact] = useState<string | null>(null);
  const [showNotepad, setShowNotepad] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [brightness, setBrightness] = useState(1.0);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [responses, setResponses] = useState<Array<{ timestamp: string; response: string }>>([]);

  const homingAudioRef = useRef<HTMLAudioElement | null>(null);
  const maloneyAudioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingHomingRef = useRef(false);
  const isPlayingMaloneyRef = useRef(false);

  const [showAudioEnable, setShowAudioEnable] = useState(true);
  const [controlsTimer, setControlsTimer] = useState<NodeJS.Timeout | null>(null);

  const [blockades] = useState(generateBlockades());
  const [knoxvilleCars] = useState(generateKnoxvilleCars());
  const [pigeons] = useState(generatePigeons());
  const [rats] = useState(generateRats());

  const [blockadePositions, setBlockadePositions] = useState<Record<string, { x: number; y: number; vx: number; vy: number }>>(() => {
    const positions: Record<string, { x: number; y: number; vx: number; vy: number }> = {};
    blockades.forEach(blockade => {
      positions[blockade.id] = {
        x: blockade.x,
        y: blockade.y,
        vx: blockade.type === 'flock' ? 0 : (Math.random() - 0.5) * 2,
        vy: blockade.type === 'flock' ? 0 : (Math.random() - 0.5) * 2
      };
    });
    return positions;
  });

  const [pigeonPositions, setPigeonPositions] = useState<Record<string, { x: number; y: number; vx: number; vy: number }>>(() => {
    const positions: Record<string, { x: number; y: number; vx: number; vy: number }> = {};
    [...pigeons, ...rats].forEach(creature => {
      positions[creature.id] = {
        x: creature.x,
        y: creature.y,
        vx: creature.type === 'pigeonPair' ? 0 : (Math.random() - 0.5) * 2,
        vy: creature.type === 'pigeonPair' ? 0 : (Math.random() - 0.5) * 2
      };
    });
    return positions;
  });

  const [npcPositions, setNpcPositions] = useState<Record<string, { x: number; y: number; vx: number; vy: number }>>(() => {
    const positions: Record<string, { x: number; y: number; vx: number; vy: number }> = {};
    [...npcsWorld1, ...npcsWorld2].forEach(npc => {
      positions[npc.id] = {
        x: npc.x,
        y: npc.y,
        vx: (Math.random() - 0.5) * 4.5,
        vy: (Math.random() - 0.5) * 4.5
      };
    });
    return positions;
  });

  const [carPositions, setCarPositions] = useState<Record<string, { x: number; y: number; vx: number; vy: number; flipped: boolean }>>(() => {
    const positions: Record<string, { x: number; y: number; vx: number; vy: number; flipped: boolean }> = {};
    [...knoxvilleCars].forEach(car => {
      positions[car.id] = {
        x: car.x,
        y: car.y,
        vx: car.vx,
        vy: car.vy,
        flipped: false
      };
    });
    return positions;
  });

  const currentNpcs = (currentWorld === 'world1' ? npcsWorld1 : npcsWorld2).map(npc => ({
    ...npc,
    x: npcPositions[npc.id]?.x ?? npc.x,
    y: npcPositions[npc.id]?.y ?? npc.y
  }));

  const currentBlockades = blockades.map(blockade => ({
    ...blockade,
    x: blockadePositions[blockade.id]?.x ?? blockade.x,
    y: blockadePositions[blockade.id]?.y ?? blockade.y
  }));

  const currentPigeons = pigeons.map(pigeon => ({
    ...pigeon,
    x: pigeonPositions[pigeon.id]?.x ?? pigeon.x,
    y: pigeonPositions[pigeon.id]?.y ?? pigeon.y
  }));

  const currentRats = rats.map(rat => ({
    ...rat,
    x: pigeonPositions[rat.id]?.x ?? rat.x,
    y: pigeonPositions[rat.id]?.y ?? rat.y
  }));

  const currentCars = [...knoxvilleCars].map(car => ({
    ...car,
    x: carPositions[car.id]?.x ?? car.x,
    y: carPositions[car.id]?.y ?? car.y,
    vx: carPositions[car.id]?.vx ?? car.vx,
    vy: carPositions[car.id]?.vy ?? car.vy,
    flipped: carPositions[car.id]?.flipped ?? false
  }));

  // Initialize audio on mount
  useEffect(() => {
    console.log('Initializing audio files...');

    const homing = new Audio(homingSound);
    homing.loop = true;
    homing.volume = 0.5;
    homing.preload = 'auto';
    homingAudioRef.current = homing;

    const maloney = new Audio(maloneyRdSound);
    maloney.loop = true;
    maloney.volume = 0.5;
    maloney.preload = 'auto';
    maloneyAudioRef.current = maloney;

    return () => {
      if (homingAudioRef.current) {
        homingAudioRef.current.pause();
        homingAudioRef.current = null;
      }
      if (maloneyAudioRef.current) {
        maloneyAudioRef.current.pause();
        maloneyAudioRef.current = null;
      }
    };
  }, []);

  // Load responses from localStorage on mount
  useEffect(() => {
    const storedResponses = JSON.parse(localStorage.getItem('butchResponses') || '[]');
    setResponses(storedResponses);
  }, []);

  // Hide controls after 3 minutes initially
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(false);
    }, 180000);

    return () => clearTimeout(timer);
  }, []);

  // Show controls for 30 seconds when exiting dialogue
  useEffect(() => {
    if (!currentDialogue && !showControls) {
      setShowControls(true);

      if (controlsTimer) {
        clearTimeout(controlsTimer);
      }

      const timer = setTimeout(() => {
        setShowControls(false);
      }, 30000);

      setControlsTimer(timer);
    }

    if (currentDialogue) {
      setShowControls(false);
    }

    return () => {
      if (controlsTimer) {
        clearTimeout(controlsTimer);
      }
    };
  }, [currentDialogue]);

  // Bird encounter detection in NYC
  useEffect(() => {
    if (!homingAudioRef.current) return;

    if (currentWorld !== 'world2') {
      if (isPlayingHomingRef.current) {
        homingAudioRef.current.pause();
        homingAudioRef.current.currentTime = 0;
        isPlayingHomingRef.current = false;
      }
      return;
    }

    let nearPigeon = false;
    for (const pigeon of currentPigeons) {
      const dx = player.x - pigeon.x;
      const dy = player.y - pigeon.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        nearPigeon = true;
        break;
      }
    }

    if (nearPigeon && !isPlayingHomingRef.current) {
      homingAudioRef.current.play()
        .then(() => {
          isPlayingHomingRef.current = true;
        })
        .catch(err => console.error('Homing audio play failed:', err));
    } else if (!nearPigeon && isPlayingHomingRef.current) {
      homingAudioRef.current.pause();
      homingAudioRef.current.currentTime = 0;
      isPlayingHomingRef.current = false;
    }
  }, [player.x, player.y, currentPigeons, currentWorld]);

  // Animal encounter detection in Knoxville
  useEffect(() => {
    if (!maloneyAudioRef.current) return;

    if (currentWorld !== 'world1') {
      if (isPlayingMaloneyRef.current) {
        maloneyAudioRef.current.pause();
        maloneyAudioRef.current.currentTime = 0;
        isPlayingMaloneyRef.current = false;
      }
      return;
    }

    let nearAnimal = false;
    for (const animal of currentBlockades) {
      const dx = player.x - animal.x;
      const dy = player.y - animal.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        nearAnimal = true;
        break;
      }
    }

    if (nearAnimal && !isPlayingMaloneyRef.current) {
      maloneyAudioRef.current.play()
        .then(() => {
          isPlayingMaloneyRef.current = true;
        })
        .catch(err => console.error('Maloney audio play failed:', err));
    } else if (!nearAnimal && isPlayingMaloneyRef.current) {
      maloneyAudioRef.current.pause();
      maloneyAudioRef.current.currentTime = 0;
      isPlayingMaloneyRef.current = false;
    }
  }, [player.x, player.y, currentBlockades, currentWorld]);

  // Blockade wandering logic
  useEffect(() => {
    const moveBlockades = () => {
      setBlockadePositions(prev => {
        const newPositions = { ...prev };

        Object.keys(newPositions).forEach(blockadeId => {
          const pos = newPositions[blockadeId];

          let newX = pos.x + pos.vx;
          let newY = pos.y + pos.vy;
          let newVx = pos.vx;
          let newVy = pos.vy;

          if (newX < 100 || newX > 1900) {
            newVx = -newVx + (Math.random() - 0.5) * 0.2;
            newX = Math.max(100, Math.min(1900, newX));
          }
          if (newY < 100 || newY > 1100) {
            newVy = -newVy + (Math.random() - 0.5) * 0.2;
            newY = Math.max(100, Math.min(1100, newY));
          }

          if (Math.random() < 0.02) {
            newVx += (Math.random() - 0.5) * 0.5;
            newVy += (Math.random() - 0.5) * 0.5;
          }

          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          if (speed > 3.0) {
            newVx = (newVx / speed) * 3.0;
            newVy = (newVy / speed) * 3.0;
          }

          newPositions[blockadeId] = {
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        });

        return newPositions;
      });
    };

    const interval = setInterval(moveBlockades, 50);
    return () => clearInterval(interval);
  }, []);

  // Pigeon wandering logic
  useEffect(() => {
    const movePigeons = () => {
      setPigeonPositions(prev => {
        const newPositions = { ...prev };

        Object.keys(newPositions).forEach(pigeonId => {
          const pos = newPositions[pigeonId];

          let newX = pos.x + pos.vx;
          let newY = pos.y + pos.vy;
          let newVx = pos.vx;
          let newVy = pos.vy;

          if (newX < 100 || newX > 1900) {
            newVx = -newVx + (Math.random() - 0.5) * 0.2;
            newX = Math.max(100, Math.min(1900, newX));
          }
          if (newY < 100 || newY > 1100) {
            newVy = -newVy + (Math.random() - 0.5) * 0.2;
            newY = Math.max(100, Math.min(1100, newY));
          }

          if (Math.random() < 0.02) {
            newVx += (Math.random() - 0.5) * 0.5;
            newVy += (Math.random() - 0.5) * 0.5;
          }

          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          if (speed > 3.0) {
            newVx = (newVx / speed) * 3.0;
            newVy = (newVy / speed) * 3.0;
          }

          newPositions[pigeonId] = {
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        });

        return newPositions;
      });
    };

    const interval = setInterval(movePigeons, 50);
    return () => clearInterval(interval);
  }, []);

  // NPC wandering logic
  useEffect(() => {
    const moveNpcs = () => {
      setNpcPositions(prev => {
        const newPositions = { ...prev };

        Object.keys(newPositions).forEach(npcId => {
          const pos = newPositions[npcId];

          let newX = pos.x + pos.vx;
          let newY = pos.y + pos.vy;
          let newVx = pos.vx;
          let newVy = pos.vy;

          if (newX < 100 || newX > 1900) {
            newVx = -newVx + (Math.random() - 0.5) * 0.2;
            newX = Math.max(100, Math.min(1900, newX));
          }
          if (newY < 100 || newY > 1100) {
            newVy = -newVy + (Math.random() - 0.5) * 0.2;
            newY = Math.max(100, Math.min(1100, newY));
          }

          if (Math.random() < 0.01) {
            newVx += (Math.random() - 0.5) * 0.3;
            newVy += (Math.random() - 0.5) * 0.3;
          }

          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          if (speed > 9.0) {
            newVx = (newVx / speed) * 9.0;
            newVy = (newVy / speed) * 9.0;
          }

          newPositions[npcId] = {
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        });

        return newPositions;
      });
    };

    const interval = setInterval(moveNpcs, 50);
    return () => clearInterval(interval);
  }, []);

  // Car driving logic
  useEffect(() => {
    const moveCars = () => {
      setCarPositions(prev => {
        const newPositions = { ...prev };
        const allCarIds = Object.keys(newPositions);

        Object.keys(newPositions).forEach(carId => {
          const pos = newPositions[carId];

          const lastX = pos.x;
          const lastY = pos.y;

          let newX = pos.x + pos.vx;
          let newY = pos.y + pos.vy;
          let newVx = pos.vx;
          let newVy = pos.vy;
          let veered = false;

          for (const otherCarId of allCarIds) {
            if (otherCarId === carId) continue;

            const otherCar = newPositions[otherCarId];
            const dx = newX - otherCar.x;
            const dy = newY - otherCar.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 225) {
              const angle = Math.atan2(dy, dx);
              const veerAngle = angle + (Math.random() > 0.5 ? Math.PI / 4 : -Math.PI / 4);

              const speed = Math.sqrt(newVx * newVx + newVy * newVy);
              newVx = Math.cos(veerAngle) * speed;
              newVy = Math.sin(veerAngle) * speed;

              newX = pos.x + newVx * 2;
              newY = pos.y + newVy * 2;
              veered = true;
              break;
            }
          }

          const carWorld = carId.startsWith('car-nyc') ? 'world2' : 'world1';
          if (currentWorld === carWorld) {
            const dx = newX - player.x;
            const dy = newY - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180) {
              const angle = Math.atan2(dy, dx);
              const veerAngle = angle + (Math.random() > 0.5 ? Math.PI / 3 : -Math.PI / 3);

              const speed = Math.sqrt(newVx * newVx + newVy * newVy);
              newVx = Math.cos(veerAngle) * speed;
              newVy = Math.sin(veerAngle) * speed;

              newX = pos.x + newVx * 2;
              newY = pos.y + newVy * 2;
              veered = true;
            }
          }

          if (carId.startsWith('car-nyc')) {
            const hitWater =
              newX < 200 ||
              newX > 1800 ||
              newY < 150 ||
              newY > 1000;

            if (hitWater) {
              newVx = -newVx;
              newVy = -newVy;
              newX = Math.max(200, Math.min(1800, newX));
              newY = Math.max(150, Math.min(1000, newY));
            }
          }

          if (newX < 100 || newX > 1900) {
            newVx = -newVx;
            newX = Math.max(100, Math.min(1900, newX));
          }
          if (newY < 100 || newY > 1100) {
            newVy = -newVy;
            newY = Math.max(100, Math.min(1100, newY));
          }

          const wasHorizontal = Math.abs(pos.vy) < 0.1;

          if (!veered) {
            if (wasHorizontal) {
              newVy = 0;
              if (Math.abs(newVx) < 4) {
                newVx = (newVx > 0 ? 1 : -1) * 5;
              }
            } else {
              if (Math.abs(newVx) < 2) {
                newVx = (newVx > 0 ? 1 : -1) * 4;
              }
              if (Math.abs(newVy) < 2) {
                newVy = (newVy > 0 ? 1 : -1) * 4;
              }
            }
          }

          const movedDistance = Math.sqrt((newX - lastX) ** 2 + (newY - lastY) ** 2);
          if (movedDistance < 0.5 && !veered) {
            const randomAngle = Math.random() * Math.PI * 2;
            const speed = wasHorizontal ? 5.5 : 6.5;
            newVx = Math.cos(randomAngle) * speed;
            newVy = Math.sin(randomAngle) * speed;
          }

          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          const maxSpeed = wasHorizontal ? 7.0 : 8.0;
          const minSpeed = wasHorizontal ? 4.0 : 5.0;

          if (speed > maxSpeed) {
            newVx = (newVx / speed) * maxSpeed;
            newVy = (newVy / speed) * maxSpeed;
          }
          if (speed < minSpeed && speed > 0) {
            newVx = (newVx / speed) * minSpeed;
            newVy = (newVy / speed) * minSpeed;
          }

          newPositions[carId] = {
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            flipped: pos.flipped
          };
        });

        return newPositions;
      });
    };

    const interval = setInterval(moveCars, 50);
    return () => clearInterval(interval);
  }, [currentWorld, player]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentDialogue) return;
      setKeysPressed(prev => new Set(prev).add(e.key.toLowerCase()));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeysPressed(prev => {
        const newSet = new Set(prev);
        newSet.delete(e.key.toLowerCase());
        return newSet;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [currentDialogue]);

  useEffect(() => {
    const movePlayer = () => {
      setPlayer(prev => {
        let newX = prev.x;
        let newY = prev.y;
        const speed = 1.5;
        let moved = false;

        if (keysPressed.has('w') || keysPressed.has('arrowup')) {
          newY -= speed;
          moved = true;
        }
        if (keysPressed.has('s') || keysPressed.has('arrowdown')) {
          newY += speed;
          moved = true;
        }
        if (keysPressed.has('a') || keysPressed.has('arrowleft')) {
          newX -= speed;
          moved = true;
          setFacingLeft(true);
        }
        if (keysPressed.has('d') || keysPressed.has('arrowright')) {
          newX += speed;
          moved = true;
          setFacingLeft(false);
        }

        setIsMoving(moved);

        newX = Math.max(48, Math.min(2000 - 48, newX));
        newY = Math.max(48, Math.min(1200 - 48, newY));

        if (currentWorld === 'world1') {
          for (const blockade of currentBlockades) {
            const dx = newX - blockade.x;
            const dy = newY - blockade.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 60) {
              const angle = Math.atan2(dy, dx);
              newX = blockade.x + Math.cos(angle) * 60;
              newY = blockade.y + Math.sin(angle) * 60;
            }
          }
        }

        if (currentWorld === 'world2') {
          for (const pigeon of currentPigeons) {
            const dx = newX - pigeon.x;
            const dy = newY - pigeon.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 60) {
              const angle = Math.atan2(dy, dx);
              newX = pigeon.x + Math.cos(angle) * 60;
              newY = pigeon.y + Math.sin(angle) * 60;
            }
          }

          for (const rat of currentRats) {
            const dx = newX - rat.x;
            const dy = newY - rat.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 60) {
              const angle = Math.atan2(dy, dx);
              newX = rat.x + Math.cos(angle) * 60;
              newY = rat.y + Math.sin(angle) * 60;
            }
          }
        }

        return { x: newX, y: newY };
      });
    };

    const interval = setInterval(movePlayer, 16);
    return () => clearInterval(interval);
  }, [keysPressed, currentWorld, currentBlockades, currentPigeons, currentRats]);

  const handleNpcClick = (npc: any) => {
    const distance = Math.sqrt(
      Math.pow(player.x - npc.x, 2) + Math.pow(player.y - npc.y, 2)
    );

    if (distance < 80) {
      setCurrentNpc(npc);
      setCurrentDialogue(npc.dialogue);
      setRevealedNpcs(prev => new Set(prev).add(npc.id));
    }
  };

  const handleDialogueChoice = (nextDialogue: any) => {
    if (nextDialogue) {
      setCurrentDialogue(nextDialogue);
    } else {
      setCurrentDialogue(null);
      setCurrentNpc(null);
    }
  };

  const handleWorldSwitch = (world: 'world1' | 'world2') => {
    const worldPath = world === 'world1' ? '/world/knoxville' : '/world/nyc';
    navigate(worldPath);
  };

  const handleTreeClick = (tree: any) => {
    const distance = Math.sqrt(
      Math.pow(player.x - tree.x, 2) + Math.pow(player.y - tree.y, 2)
    );

    if (distance < 300) {
      console.log('Tree clicked:', { treeId: tree.id, factIndex: tree.factIndex, fact: treeFacts[tree.factIndex] });
      const fact = treeFacts[tree.factIndex];
      if (fact) {
        setSelectedTreeFact(fact);
      } else {
        console.error('No fact found for tree', tree);
      }
    }
  };

  const handleCarClick = () => {
    setShowNotepad(true);
  };

  const handleNotepadSubmit = (response: string) => {
    const timestamp = new Date().toISOString();
    console.log('=== BUTCH IDENTITY RESPONSE ===');
    console.log('Timestamp:', timestamp);
    console.log('Question: What does being butch mean to you or others?');
    console.log('Response:', response);
    console.log('===============================');

    const storedResponses = JSON.parse(localStorage.getItem('butchResponses') || '[]');
    storedResponses.push({
      timestamp,
      response
    });
    localStorage.setItem('butchResponses', JSON.stringify(storedResponses));

    setResponses(prev => [...prev, { timestamp, response }]);
  };

  const handleEnableAudio = () => {
    if (homingAudioRef.current && maloneyAudioRef.current) {
      homingAudioRef.current.play()
        .then(() => {
          homingAudioRef.current?.pause();
          homingAudioRef.current!.currentTime = 0;
        })
        .catch(err => console.error('Homing unlock failed:', err));

      maloneyAudioRef.current.play()
        .then(() => {
          maloneyAudioRef.current?.pause();
          maloneyAudioRef.current!.currentTime = 0;
        })
        .catch(err => console.error('Maloney unlock failed:', err));

      setShowAudioEnable(false);
    }
  };

  if (!userProfile) return null;

  return (
    <div
      className="relative overflow-hidden w-screen h-screen"
      style={{
        filter: `brightness(${brightness})`,
      }}
    >
      <div className="relative">
        <GameWorld
          playerPos={player}
          npcs={currentNpcs}
          onNpcClick={handleNpcClick}
          currentWorld={currentWorld}
          currentNpc={currentNpc}
          isMoving={isMoving}
          facingLeft={facingLeft}
          blockades={currentBlockades}
          pigeons={currentPigeons}
          rats={currentRats}
          cars={currentCars}
          trees={trees}
          weatherFilter={knoxvilleWeather.filterStyle}
          nycWeatherFilter={nycWeather.filterStyle}
          knoxvilleWeatherCondition={knoxvilleWeather.weather}
          nycWeatherCondition={nycWeather.weather}
          onTreeClick={handleTreeClick}
          onCarClick={handleCarClick}
          revealedNpcs={revealedNpcs}
          userPortrait={userProfile?.portrait}
        />

        <WorldSelector
          currentWorld={currentWorld}
          onWorldSwitch={handleWorldSwitch}
        />

        {currentDialogue && (
          <DialogueBox
            dialogue={currentDialogue}
            npcName={currentNpc?.name}
            npcPortrait={currentNpc?.portraitImage}
            onChoice={handleDialogueChoice}
            currentWorld={currentWorld}
          />
        )}

        {selectedTreeFact && (
          <TreeFactModal
            fact={selectedTreeFact}
            onClose={() => setSelectedTreeFact(null)}
          />
        )}

        {showNotepad && (
          <NotepadModal
            onClose={() => setShowNotepad(false)}
            onSubmit={handleNotepadSubmit}
          />
        )}

        {showSettings && (
          <SettingsPanel
            brightness={brightness}
            onBrightnessChange={setBrightness}
            musicEnabled={musicEnabled}
            onMusicToggle={() => setMusicEnabled(prev => !prev)}
            responses={responses}
            onClose={() => setShowSettings(false)}
          />
        )}

        <button
          onClick={() => setShowSettings(true)}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-lg transition-all flex items-center justify-center font-bold text-xl"
          style={{ fontFamily: 'Helvetica, sans-serif' }}
        >
          i
        </button>

        {showControls && (
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-['Helvetica']">
            <p className="text-sm">Use WASD or Arrow Keys to move</p>
            <p className="text-sm">Click on NPCs to talk</p>
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-3 rounded-lg font-['Helvetica'] border-2 border-white/30">
          {currentWorld === 'world1' && (
            <p className="text-sm font-semibold">
              Knoxville, Tennessee: {knoxvilleWeather.weather} • {knoxvilleWeather.hour > 12 ? knoxvilleWeather.hour - 12 : knoxvilleWeather.hour}:{('0' + (new Date().getMinutes())).slice(-2)}{knoxvilleWeather.hour >= 12 ? 'PM' : 'AM'}
            </p>
          )}
          {currentWorld === 'world2' && (
            <p className="text-sm font-semibold">
              New York City: {nycWeather.weather} • {nycWeather.hour > 12 ? nycWeather.hour - 12 : nycWeather.hour}:{('0' + (new Date().getMinutes())).slice(-2)}{nycWeather.hour >= 12 ? 'PM' : 'AM'}
            </p>
          )}
        </div>

        {showAudioEnable && (
          <button
            onClick={handleEnableAudio}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-2xl transition-all flex items-center justify-center font-bold text-lg z-50"
            style={{ fontFamily: 'Helvetica, sans-serif' }}
          >
            🔊 Enable Audio
          </button>
        )}
      </div>
    </div>
  );
}
