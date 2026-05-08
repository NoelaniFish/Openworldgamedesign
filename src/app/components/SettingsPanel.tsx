import { useState } from 'react';

interface SettingsPanelProps {
  brightness: number;
  onBrightnessChange: (value: number) => void;
  musicEnabled: boolean;
  onMusicToggle: () => void;
  onAudioToggle: (enabled: boolean) => void;
  responses: Array<{ timestamp: string; response: string }>;
  onClose: () => void;
}

export function SettingsPanel({
  brightness,
  onBrightnessChange,
  musicEnabled,
  onMusicToggle,
  onAudioToggle,
  responses,
  onClose,
}: SettingsPanelProps) {
  const [activeTab, setActiveTab] = useState<'settings' | 'responses'>('settings');

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'Helvetica, sans-serif' }}
      >
        {/* Tabs */}
        <div className="flex border-b border-gray-300">
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 px-6 py-4 text-lg font-medium transition-colors ${
              activeTab === 'settings'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Settings
          </button>
          <button
            onClick={() => setActiveTab('responses')}
            className={`flex-1 px-6 py-4 text-lg font-medium transition-colors ${
              activeTab === 'responses'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Response Bank ({responses.length})
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[500px] overflow-y-auto">
          {activeTab === 'settings' ? (
            <div className="space-y-6">
              {/* Brightness Control */}
              <div>
                <label className="block text-gray-800 text-lg font-medium mb-3">
                  Brightness
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0.1"
                    max="2.0"
                    step="0.1"
                    value={brightness}
                    onChange={(e) => onBrightnessChange(parseFloat(e.target.value))}
                    className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #1e293b 0%, #3b82f6 ${
                        ((brightness - 0.1) / (2.0 - 0.1)) * 100
                      }%, #cbd5e1 ${((brightness - 0.1) / (2.0 - 0.1)) * 100}%, #cbd5e1 100%)`,
                    }}
                  />
                  <span className="text-gray-700 font-medium w-12 text-right">
                    {Math.round(brightness * 100)}%
                  </span>
                </div>
              </div>

              {/* Audio Enable/Disable */}
              <div>
                <label className="block text-gray-800 text-lg font-medium mb-3">
                  Audio
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => onAudioToggle(true)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      musicEnabled
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                    }`}
                  >
                    🔊 Enable
                  </button>
                  <button
                    onClick={() => onAudioToggle(false)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      !musicEnabled
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                    }`}
                  >
                    🔇 Disable
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {responses.length === 0 ? (
                <p className="text-gray-600 text-center py-8">
                  No responses collected yet. Click on cars in the game to share your thoughts!
                </p>
              ) : (
                <>
                  <p className="text-gray-700 text-sm mb-4">
                    All responses to: <span className="font-medium">"What does being butch mean to you or others?"</span>
                  </p>
                  {responses.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border border-gray-300 rounded-lg p-4"
                    >
                      <div className="text-xs text-gray-500 mb-2">
                        {new Date(item.timestamp).toLocaleString()}
                      </div>
                      <div className="text-gray-800 whitespace-pre-wrap">
                        {item.response}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Close Button */}
        <div className="border-t border-gray-300 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}