import { createBrowserRouter } from 'react-router';
import { IntroPage } from './pages/IntroPage';
import { ProfilePage } from './pages/ProfilePage';
import { GameWorldPage } from './pages/GameWorldPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: IntroPage,
  },
  {
    path: '/intro',
    Component: IntroPage,
  },
  {
    path: '/profile',
    Component: ProfilePage,
  },
  {
    path: '/world/:world',
    Component: GameWorldPage,
  },
  {
    path: '*',
    Component: IntroPage,
  },
]);
