import { join } from 'path';
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

export const ROOT_PATH: string = process.cwd();
export const PUBLIC_PATH: string = join(ROOT_PATH, 'public');
