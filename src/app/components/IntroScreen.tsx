import { useState, useEffect } from 'react';
import introImage from 'figma:asset/b209c05719d4cea76eb928cd9f0d6f3efb6a19ad.png';
import { ProfileForm } from './ProfileForm';

interface IntroScreenProps {
  onComplete: (startWorld: 'world1' | 'world2', profile: { name: string; identity: string; portrait: string }) => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<'image' | 'welcome' | 'profile' | 'fadeOut'>('image');
  const [selectedWorld, setSelectedWorld] = useState<'world1' | 'world2' | null>(null);
  const [profile, setProfile] = useState<{ name: string; identity: string; portrait: string }>({ name: '', identity: '', portrait: '' });

  // Phase 1: Show image for 5 seconds
  useEffect(() => {
    if (phase === 'image') {
      const timer = setTimeout(() => {
        setPhase('welcome');
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Handle world selection and fade out
  const handleWorldSelect = (world: 'world1' | 'world2') => {
    setSelectedWorld(world);
    setPhase('profile');
  };

  // Handle profile completion and fade out
  const handleProfileComplete = (profile: { name: string; identity: string; portrait: string }) => {
    setProfile(profile);
    setPhase('fadeOut');
    
    // Fade out then complete
    setTimeout(() => {
      onComplete(selectedWorld as 'world1' | 'world2', profile);
    }, 1000); // 1 second fade out
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
              New York, New York
            </button>
          </div>
        </div>
      )}

      {/* Phase 3: Profile Form */}
      {phase === 'profile' && (
        <ProfileForm onComplete={handleProfileComplete} selectedWorld={selectedWorld} />
      )}

      {/* Phase 4: Fade Out */}
      {phase === 'fadeOut' && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 opacity-0"
        >
          <h1 className="text-white text-6xl font-bold font-['Helvetica'] mb-12 text-center">
            welcome to butch.world
          </h1>
          
          <p className="text-white text-2xl font-['Helvetica'] max-w-3xl text-center mb-16 leading-relaxed">
            to interact with your world and explore the identity of butches across different locations click objects and approach the figures.
          </p>
          
          <div className="flex gap-8">
            <button
              className="px-8 py-4 bg-white text-black text-xl font-bold font-['Helvetica'] rounded-lg shadow-2xl"
            >
              {selectedWorld === 'world1' ? 'Knoxville, Tennessee' : 'New York, New York'}
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