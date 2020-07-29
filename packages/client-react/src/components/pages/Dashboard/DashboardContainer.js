import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import OverviewContainer from './pages/Overview/OverviewContainer';
import AccountContainer from './pages/Account/AccountContainer';
import TransferContainer from './pages/Transfer/TransferContainer';
import HelpContainer from './pages/Help/HelpContainer';
import VerifyPIDContainer from './pages/VerifyPID/VerifyPIDContainer';
import Logout from './pages/Logout';
import useCustomerCheck from './utils/useCustomerCheck';

const routes = [
  {
    path: '/dashboard/logout',
    exact: true,
    main: () => <Logout />,
  },
  {
    path: '/dashboard/verify',
    exact: true,
    main: () => <VerifyPIDContainer />,
  },
  {
    path: '/dashboard/overview',
    exact: true,
    main: () => <OverviewContainer />,
  },
  {
    path: '/dashboard/account',
    exact: true,
    main: () => <AccountContainer />,
  },
  {
    path: '/dashboard/transfer',
    exact: true,
    main: () => <TransferContainer />,
  },
  {
    path: '/dashboard/help',
    exact: true,
    main: () => <HelpContainer />,
  },
];

const DashboardContainer = () => {
  useCustomerCheck(customer => !customer, '/login');

  return (
    <Switch>
      {routes.map(r => (
        <Route key={r.path} path={r.path} component={r.main} exact={r.exact} />
      ))}
      <Redirect to="/dashboard/overview" />
    </Switch>
  );
};

export default DashboardContainer;
