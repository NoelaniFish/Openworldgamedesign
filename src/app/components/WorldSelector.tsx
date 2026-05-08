interface WorldSelectorProps {
  currentWorld: 'world1' | 'world2';
  onWorldSwitch: (world: 'world1' | 'world2') => void;
}

export function WorldSelector({ currentWorld, onWorldSwitch }: WorldSelectorProps) {
  return (
    <div className="absolute top-4 right-4 flex gap-2">
      <button
        onClick={() => onWorldSwitch('world1')}
        className={`px-4 py-2 rounded-lg border-2 transition-all font-['Helvetica'] ${
          currentWorld === 'world1'
            ? 'border-white text-white'
            : 'bg-gray-700 border-gray-500 text-gray-300 hover:bg-gray-600'
        }`}
        style={{
          backgroundColor: currentWorld === 'world1' ? '#991b1b' : undefined
        }}
      >
        Knoxville, Tennessee
      </button>
      <button
        onClick={() => onWorldSwitch('world2')}
        className={`px-4 py-2 rounded-lg border-2 transition-all font-['Helvetica'] ${
          currentWorld === 'world2'
            ? 'border-white text-white'
            : 'bg-gray-700 border-gray-500 text-gray-300 hover:bg-gray-600'
        }`}
        style={{
          backgroundColor: currentWorld === 'world2' ? '#1e40af' : undefined
        }}
      >
        New York, New York
      </button>
    </div>
  );
}