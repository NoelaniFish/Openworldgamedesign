import { useState } from 'react';

interface NotepadModalProps {
  onClose: () => void;
  onSubmit: (response: string) => void;
  isMobile?: boolean;
}

export function NotepadModal({ onClose, onSubmit, isMobile = false }: NotepadModalProps) {
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    if (response.trim()) {
      onSubmit(response);
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`bg-[#FFFBF0] border-2 border-yellow-800 rounded-lg ${isMobile ? 'p-4 max-w-sm' : 'p-8 max-w-2xl'} w-full mx-4 shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent ${isMobile ? '23px' : '31px'}, #cbd5e1 ${isMobile ? '23px' : '31px'}, #cbd5e1 ${isMobile ? '24px' : '32px'})`,
        }}
      >
        <div className={`bg-[#FFFBF0]/50 ${isMobile ? '-mx-4 -mt-4 px-4 pt-4 pb-3 mb-3' : '-mx-8 -mt-8 px-8 pt-6 pb-4 mb-4'} border-b-2 border-yellow-800`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-light text-gray-800 mb-2`} style={{ fontFamily: 'Courier, monospace' }}>
            Roadside Reflection
          </h2>
          <p className={`text-gray-700 ${isMobile ? 'text-sm' : 'text-lg'} font-light`} style={{ fontFamily: 'Courier, monospace' }}>
            What does being butch mean to you or others?
          </p>
        </div>

        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Share your thoughts here..."
          className={`w-full ${isMobile ? 'h-40 text-sm' : 'h-64 text-lg'} bg-transparent text-gray-800 resize-none outline-none font-light`}
          style={{
            fontFamily: 'Courier, monospace',
            lineHeight: isMobile ? '24px' : '32px',
            paddingTop: '7px',
            paddingLeft: isMobile ? '8px' : '16px',
            paddingRight: isMobile ? '8px' : '16px',
          }}
          autoFocus
        />

        <div className={`flex gap-${isMobile ? '2' : '4'} justify-end ${isMobile ? 'mt-4' : 'mt-6'}`}>
          <button
            onClick={onClose}
            className={`${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-2'} bg-gray-400 hover:bg-gray-500 text-white rounded-lg font-light transition-colors`}
            style={{ fontFamily: 'Courier, monospace' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!response.trim()}
            className={`${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-2'} bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-light transition-colors`}
            style={{ fontFamily: 'Courier, monospace' }}
          >
            Submit
          </button>
        </div>

        <p className={`${isMobile ? 'text-[10px] mt-2' : 'text-xs mt-4'} text-gray-500 text-right font-light`} style={{ fontFamily: 'Courier, monospace' }}>
          Your response will be logged.
        </p>
      </div>
    </div>
  );
}