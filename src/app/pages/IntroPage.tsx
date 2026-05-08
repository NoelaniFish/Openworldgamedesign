import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import introImage from 'figma:asset/b209c05719d4cea76eb928cd9f0d6f3efb6a19ad.png';

export function IntroPage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'image' | 'welcome'>('image');

  // Check if user has already completed intro/profile
  useEffect(() => {
    const hasCompletedIntro = sessionStorage.getItem('hasCompletedIntro');
    const selectedWorld = sessionStorage.getItem('selectedWorld');
    const userProfile = sessionStorage.getItem('userProfile');

    // If they've completed the intro and have a profile, redirect to their world
    if (hasCompletedIntro && selectedWorld && userProfile) {
      const worldPath = selectedWorld === 'world1' ? '/world/knoxville' : '/world/nyc';
      navigate(worldPath, { replace: true });
    }
  }, [navigate]);

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
          <h1 className="text-white text-6xl font-bold font-['Instrument_Serif'] mb-8 text-center">
            welcome!
          </h1>

          <p className="text-white text-xl font-['Helvetica'] max-w-3xl mb-8 leading-relaxed text-left mx-auto">
            butch.world is an open world exploration project exploring the butch and masculine sapphic identity across locations!
          </p>

          <p className="text-white text-xl font-['Helvetica'] max-w-3xl mb-4 leading-relaxed text-left mx-auto">
            to interact with butch.world, click the objects (trees, cars, etc) and approach the various figures within the scene.
          </p>

          <div className="text-white text-lg font-['Helvetica'] max-w-3xl mb-8 text-left mx-auto">
            <p className="mb-1">Best,</p>
            <p>Your Neighborhood Butch</p>
          </div>

          <div className="flex gap-12 mt-12">
            <button
              onClick={() => handleWorldSelect('world1')}
              className="px-6 py-3 bg-black border-2 border-white hover:bg-white hover:text-black text-white text-base font-bold font-['Helvetica'] rounded-lg transition-all hover:scale-110 transform shadow-2xl"
            >
              Knoxville, Tennessee
            </button>

            <button
              onClick={() => handleWorldSelect('world2')}
              className="px-6 py-3 bg-black border-2 border-white hover:bg-white hover:text-black text-white text-base font-bold font-['Helvetica'] rounded-lg transition-all hover:scale-110 transform shadow-2xl"
            >
              New York, New York
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
