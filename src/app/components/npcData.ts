// Knox County NPCs - orange/red holographic figures (GIFs)
import knoxNpc1 from '../imports/Untitled_Artwork_40.gif';
import knoxNpc2 from '../imports/Untitled_Artwork_41.gif';
import knoxNpc3 from '../imports/Untitled_Artwork_42.gif';
import knoxNpc4 from '../imports/Untitled_Artwork_43.gif';
import knoxNpc5 from '../imports/Untitled_Artwork_44.gif';

// NYC NPCs - blue holographic figures (GIFs)
import nycNpc1 from '../imports/Untitled_Artwork_45.gif';
import nycNpc2 from '../imports/Untitled_Artwork_46.gif';
import nycNpc3 from '../imports/Untitled_Artwork_47.gif';
import nycNpc4 from '../imports/Untitled_Artwork_48.gif';

// Portrait images (GIFs)
import amberImg from '../imports/Untitled_Artwork_18-1.gif';
import portiaImg from '../imports/Untitled_Artwork_17-1.gif';
import joceImg from '../imports/IMG_1860-1.gif';

// Import shared dialogue
import { amberDialogue } from './amberDialogue';
import { portiaDialogue } from './portiaDialogue';
import { joceDialogue } from './joceDialogue';

// Debug logging
console.log('NPC GIF imports:', {
  knoxNpc1,
  nycNpc1,
  amberImg,
  portiaImg,
  joceImg
});

// World 1 NPCs - Knox County, Tennessee
export const npcsWorld1 = [
  {
    id: 'elder',
    name: 'Joce',
    x: 350,
    y: 800,
    color: '#8b4513',
    letter: 'r',
    image: knoxNpc1,
    portraitImage: joceImg,
    dialogue: joceDialogue
  },
  {
    id: 'merchant',
    name: 'Joce',
    x: 1600,
    y: 350,
    color: '#ff6347',
    letter: 'p',
    image: knoxNpc2,
    portraitImage: joceImg,
    dialogue: joceDialogue
  },
  {
    id: 'traveler',
    name: 'Joce',
    x: 1200,
    y: 900,
    color: '#20b2aa',
    letter: 'q',
    image: knoxNpc3,
    portraitImage: joceImg,
    dialogue: joceDialogue
  },
  {
    id: 'artist',
    name: 'Joce',
    x: 800,
    y: 400,
    color: '#ff8c00',
    letter: 'k',
    image: knoxNpc4,
    portraitImage: joceImg,
    dialogue: joceDialogue
  },
  {
    id: 'teacher',
    name: 'Joce',
    x: 500,
    y: 600,
    color: '#ff4500',
    letter: 't',
    image: knoxNpc5,
    portraitImage: joceImg,
    dialogue: joceDialogue
  }
];

// World 2 NPCs - NYC - Interview-based conversational dialogue
export const npcsWorld2 = [
  {
    id: 'guardian',
    name: 'Portia',
    x: 1000,
    y: 600,
    color: '#9370db',
    letter: 'r',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'scholar',
    name: 'Amber',
    x: 350,
    y: 200,
    color: '#663399',
    letter: 'a',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'wanderer',
    name: 'Portia',
    x: 1700,
    y: 1000,
    color: '#4169e1',
    letter: 's',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'creator',
    name: 'Amber',
    x: 600,
    y: 800,
    color: '#6a5acd',
    letter: 'm',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'poet',
    name: 'Portia',
    x: 450,
    y: 450,
    color: '#8a2be2',
    letter: 'p',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'architect',
    name: 'Amber',
    x: 1400,
    y: 300,
    color: '#5f4b8b',
    letter: 'b',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'historian',
    name: 'Portia',
    x: 900,
    y: 200,
    color: '#7b68ee',
    letter: 'h',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'philosopher',
    name: 'Amber',
    x: 1500,
    y: 750,
    color: '#483d8b',
    letter: 'f',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'musician',
    name: 'Portia',
    x: 250,
    y: 650,
    color: '#6495ed',
    letter: 'u',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'storyteller',
    name: 'Amber',
    x: 1800,
    y: 500,
    color: '#551a8b',
    letter: 'y',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'observer',
    name: 'Portia',
    x: 700,
    y: 150,
    color: '#836fff',
    letter: 'o',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'dreamer',
    name: 'Amber',
    x: 1200,
    y: 900,
    color: '#4b0082',
    letter: 'd',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'guide',
    name: 'Portia',
    x: 500,
    y: 1000,
    color: '#5d478b',
    letter: 'g',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'visionary',
    name: 'Amber',
    x: 1600,
    y: 200,
    color: '#6a0dad',
    letter: 'v',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'seeker',
    name: 'Portia',
    x: 800,
    y: 950,
    color: '#7d26cd',
    letter: 'k',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'explorer',
    name: 'Amber',
    x: 1300,
    y: 500,
    color: '#9932cc',
    letter: 'e',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'sentinel',
    name: 'Portia',
    x: 400,
    y: 300,
    color: '#8470ff',
    letter: 'n',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'voyager',
    name: 'Amber',
    x: 1750,
    y: 700,
    color: '#6959cd',
    letter: 'w',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'keeper',
    name: 'Portia',
    x: 650,
    y: 550,
    color: '#7a67ee',
    letter: 'l',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'sage',
    name: 'Amber',
    x: 950,
    y: 400,
    color: '#5d3fd3',
    letter: 'x',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'mystic',
    name: 'Portia',
    x: 1450,
    y: 850,
    color: '#9966cc',
    letter: 'c',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'prophet',
    name: 'Amber',
    x: 300,
    y: 900,
    color: '#7851a9',
    letter: 'i',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'oracle',
    name: 'Portia',
    x: 1100,
    y: 250,
    color: '#9370db',
    letter: 'j',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'bard',
    name: 'Amber',
    x: 750,
    y: 700,
    color: '#6a5acd',
    letter: 'z',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'nomad',
    name: 'Portia',
    x: 1850,
    y: 350,
    color: '#483d8b',
    letter: '1',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'apprentice',
    name: 'Amber',
    x: 550,
    y: 150,
    color: '#8b7ab8',
    letter: '2',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'champion',
    name: 'Portia',
    x: 1550,
    y: 600,
    color: '#9400d3',
    letter: '3',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'witness',
    name: 'Amber',
    x: 850,
    y: 850,
    color: '#663399',
    letter: '4',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'watcher',
    name: 'Portia',
    x: 200,
    y: 500,
    color: '#7b68ee',
    letter: '5',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'pilgrim',
    name: 'Amber',
    x: 1650,
    y: 450,
    color: '#9370db',
    letter: '6',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'advocate',
    name: 'Portia',
    x: 450,
    y: 750,
    color: '#6a5acd',
    letter: '7',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'pioneer',
    name: 'Amber',
    x: 1250,
    y: 150,
    color: '#4b0082',
    letter: '8',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'mentor',
    name: 'Portia',
    x: 700,
    y: 950,
    color: '#8a2be2',
    letter: '9',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'curator',
    name: 'Amber',
    x: 1900,
    y: 800,
    color: '#5d478b',
    letter: '0',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'luminary',
    name: 'Portia',
    x: 350,
    y: 400,
    color: '#836fff',
    letter: 'A',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'scribe',
    name: 'Amber',
    x: 1400,
    y: 550,
    color: '#6495ed',
    letter: 'B',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'herald',
    name: 'Portia',
    x: 600,
    y: 350,
    color: '#551a8b',
    letter: 'C',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'envoy',
    name: 'Amber',
    x: 1050,
    y: 750,
    color: '#6a0dad',
    letter: 'D',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'emissary',
    name: 'Portia',
    x: 1700,
    y: 250,
    color: '#7d26cd',
    letter: 'E',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'guardian2',
    name: 'Amber',
    x: 800,
    y: 600,
    color: '#9932cc',
    letter: 'F',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'pathfinder',
    name: 'Portia',
    x: 250,
    y: 800,
    color: '#8470ff',
    letter: 'G',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'chronicler',
    name: 'Amber',
    x: 1500,
    y: 950,
    color: '#6959cd',
    letter: 'H',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'steward',
    name: 'Portia',
    x: 900,
    y: 500,
    color: '#7a67ee',
    letter: 'I',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'artisan',
    name: 'Amber',
    x: 400,
    y: 200,
    color: '#5d3fd3',
    letter: 'J',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'weaver',
    name: 'Portia',
    x: 1350,
    y: 700,
    color: '#9966cc',
    letter: 'K',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'tinker',
    name: 'Amber',
    x: 650,
    y: 450,
    color: '#7851a9',
    letter: 'L',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'builder',
    name: 'Portia',
    x: 1800,
    y: 600,
    color: '#9370db',
    letter: 'M',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'architect2',
    name: 'Amber',
    x: 500,
    y: 900,
    color: '#6a5acd',
    letter: 'N',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'inventor',
    name: 'Portia',
    x: 1150,
    y: 350,
    color: '#483d8b',
    letter: 'O',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'crafter',
    name: 'Amber',
    x: 750,
    y: 800,
    color: '#8b7ab8',
    letter: 'P',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'designer',
    name: 'Portia',
    x: 1600,
    y: 500,
    color: '#9400d3',
    letter: 'Q',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'maker',
    name: 'Amber',
    x: 300,
    y: 600,
    color: '#663399',
    letter: 'R',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'sculptor',
    name: 'Portia',
    x: 1450,
    y: 150,
    color: '#7b68ee',
    letter: 'S',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'painter',
    name: 'Amber',
    x: 850,
    y: 250,
    color: '#9370db',
    letter: 'T',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'composer',
    name: 'Portia',
    x: 550,
    y: 700,
    color: '#6a5acd',
    letter: 'U',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'conductor',
    name: 'Amber',
    x: 1750,
    y: 850,
    color: '#4b0082',
    letter: 'V',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'performer',
    name: 'Portia',
    x: 200,
    y: 350,
    color: '#8a2be2',
    letter: 'W',
    image: nycNpc1,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'dancer',
    name: 'Amber',
    x: 1200,
    y: 650,
    color: '#5d478b',
    letter: 'X',
    image: nycNpc2,
    portraitImage: amberImg,
    dialogue: amberDialogue
  },
  {
    id: 'acrobat',
    name: 'Portia',
    x: 700,
    y: 400,
    color: '#836fff',
    letter: 'Y',
    image: nycNpc3,
    portraitImage: portiaImg,
    dialogue: portiaDialogue
  },
  {
    id: 'jester',
    name: 'Amber',
    x: 1900,
    y: 200,
    color: '#6495ed',
    letter: 'Z',
    image: nycNpc4,
    portraitImage: amberImg,
    dialogue: amberDialogue
  }
];