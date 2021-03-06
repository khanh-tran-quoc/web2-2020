import React from 'react';
import Landing from './components/pages/Landing';
import DashboardContainer from './components/pages/Dashboard/DashboardContainer';
import LoginContainer from './components/pages/Dashboard/pages/Login/LoginContainer';
import RegisterContainer from './components/pages/Dashboard/pages/Register/RegisterContainer';
import Admin from './components/pages/Admin';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Landing />,
  },
  {
    path: '/dashboard',
    exact: false,
    main: () => <DashboardContainer />,
  },
  {
    path: '/login',
    exact: true,
    main: () => <LoginContainer />,
  },
  {
    path: '/register',
    exact: true,
    main: () => <RegisterContainer />,
  },
  {
    path: '/admin',
    exact: true,
    main: () => <Admin />,
  },
];

export default routes;
