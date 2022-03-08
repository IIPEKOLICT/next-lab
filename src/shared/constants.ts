import { Route } from './types';

export const routes: Route[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Todos',
    href: '/todos',
  },
  {
    title: 'Posts',
    href: '/posts',
  },
  {
    title: 'Shared',
    href: '/shared',
  },
];

export const API_URL = 'https://iipekolict--nest-storage.herokuapp.com';
