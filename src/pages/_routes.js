import Drive from './drive';
import Home from './home/home';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
    auth: false,
    headerTheme: 'white',
  },
  {
    component: Drive,
    path: '/drive',
    exact: true,
    auth: false,
    headerTheme: 'blue',
  },
];
