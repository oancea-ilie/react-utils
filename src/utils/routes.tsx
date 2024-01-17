import Home from '@pages/Home';
import Login from '@pages/Login';
import Templates from '@pages/Templates';

type Route = {
  Component: () => JSX.Element;
  path: string;
  protectedRoute: boolean;
  hidden?: boolean;
};

export const routes: Route[] = [
  {
    Component: Home,
    path: '/',
    protectedRoute: true,
    hidden: false,
  },
  {
    Component: Templates,
    path: '/templates',
    protectedRoute: false,
    hidden: false,
  },
  {
    Component: Login,
    path: '/login',
    protectedRoute: false,
    hidden: false,
  },
];
