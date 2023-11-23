import { lazy } from 'react';

const MapCrimeCountry = lazy(() => import('../pages/MapCrimeCountry.tsx'));
// const Tables = lazy(() => import('../pages/ListDetained.tsx'));
import ListDetainedWithLocalizationProvider from '../pages/ListDetained.tsx';

const coreRoutes = [
  {
    path: '/map',
    title: 'Map',
    component: MapCrimeCountry,
  },
  {
    path: '/list-detained',
    title: 'List Detained',
    component: ListDetainedWithLocalizationProvider,
  },
];

const routes = [...coreRoutes];
export default routes;
