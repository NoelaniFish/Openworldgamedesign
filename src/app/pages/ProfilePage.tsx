import { useNavigate } from 'react-router';
import { ProfileForm } from '../components/ProfileForm';
import { useEffect } from 'react';

export function ProfilePage() {
  const navigate = useNavigate();
  const selectedWorld = sessionStorage.getItem('selectedWorld') as 'world1' | 'world2' | null;

  useEffect(() => {
    // If no world selected, redirect to intro
    if (!selectedWorld) {
      navigate('/intro');
      return;
    }
  }, [selectedWorld, navigate]);

  const handleComplete = (profile: { name: string; identity: string; portrait: string }) => {
    // Store profile in sessionStorage
    sessionStorage.setItem('userProfile', JSON.stringify(profile));
    // Mark intro as completed
    sessionStorage.setItem('hasCompletedIntro', 'true');

    // Navigate to the selected world
    const worldPath = selectedWorld === 'world1' ? '/world/knoxville' : '/world/nyc';
    navigate(worldPath);
  };

  if (!selectedWorld) return null;

  return <ProfileForm onComplete={handleComplete} selectedWorld={selectedWorld} />;
}
