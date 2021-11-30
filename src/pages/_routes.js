import Home from './home/home';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
    auth: false,
  },
];
