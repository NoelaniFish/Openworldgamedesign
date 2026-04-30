import { useState } from 'react';

interface NotepadModalProps {
  onClose: () => void;
  onSubmit: (response: string) => void;
}

export function NotepadModal({ onClose, onSubmit }: NotepadModalProps) {
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
        className="bg-[#FFFBF0] border-2 border-yellow-800 rounded-lg p-8 max-w-2xl w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #cbd5e1 31px, #cbd5e1 32px)',
        }}
      >
        <div className="bg-[#FFFBF0]/50 -mx-8 -mt-8 px-8 pt-6 pb-4 mb-4 border-b-2 border-yellow-800">
          <h2 className="text-2xl font-light text-gray-800 mb-2" style={{ fontFamily: 'Courier, monospace' }}>
            Roadside Reflection
          </h2>
          <p className="text-gray-700 text-lg font-light" style={{ fontFamily: 'Courier, monospace' }}>
            What does being butch mean to you or others?
          </p>
        </div>

        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Share your thoughts here..."
          className="w-full h-64 bg-transparent text-gray-800 text-lg resize-none outline-none font-light"
          style={{ 
            fontFamily: 'Courier, monospace',
            lineHeight: '32px',
            paddingTop: '7px',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
          autoFocus
        />

        <div className="flex gap-4 justify-end mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg font-light transition-colors"
            style={{ fontFamily: 'Courier, monospace' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!response.trim()}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-light transition-colors"
            style={{ fontFamily: 'Courier, monospace' }}
          >
            Submit Response
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-right font-light" style={{ fontFamily: 'Courier, monospace' }}>
          Your response will be logged.
        </p>
      </div>
    </div>
  );
}