import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import introImage from 'figma:asset/b209c05719d4cea76eb928cd9f0d6f3efb6a19ad.png';

export function IntroPage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'image' | 'welcome'>('image');

  // Phase 1: Show image for 5 seconds
  useEffect(() => {
    if (phase === 'image') {
      const timer = setTimeout(() => {
        setPhase('welcome');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleWorldSelect = (world: 'world1' | 'world2') => {
    sessionStorage.setItem('selectedWorld', world);
    navigate('/profile');
  };

  return (
    <>
      {/* Phase 1: Intro Image (5 seconds) */}
      {phase === 'image' && (
        <div
          className="fixed inset-0 z-[100] transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${introImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Phase 2: Welcome Screen */}
      {phase === 'welcome' && (
        <div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center px-8 animate-fadeIn"
        >
          <h1 className="text-white text-6xl font-bold font-['Helvetica'] mb-8 text-center">
            Welcome!
          </h1>

          <p className="text-white text-2xl font-['Helvetica'] max-w-3xl mb-8 leading-relaxed italic text-left mx-auto">
            Butch.world is an open world exploration project exploring the butch and masculine sapphic identity across locations!
          </p>

          <p className="text-white text-2xl font-['Helvetica'] max-w-3xl mb-4 leading-relaxed italic text-left mx-auto">
            To interact with butch.world, click the objects (trees, cars, etc) and approach the various figures within the scene.
          </p>

          <div className="text-white text-xl font-['Helvetica'] max-w-3xl mb-8 italic text-left mx-auto">
            <p className="mb-1">Best,</p>
            <p>Your Neighborhood Butch</p>
          </div>

          <div className="flex gap-12 mt-12">
            <button
              onClick={() => handleWorldSelect('world1')}
              className="px-6 py-3 bg-white hover:bg-gray-200 text-black text-lg font-bold font-['Helvetica'] rounded-lg transition-all hover:scale-110 transform shadow-2xl"
            >
              Knoxville, Tennessee
            </button>

            <button
              onClick={() => handleWorldSelect('world2')}
              className="px-6 py-3 bg-white hover:bg-gray-200 text-black text-lg font-bold font-['Helvetica'] rounded-lg transition-all hover:scale-110 transform shadow-2xl"
            >
              New York City
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
      `}</style>
    </>
  );
}
