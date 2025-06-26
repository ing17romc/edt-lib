import { MenuOption } from '../types';

export const mockOptions: MenuOption[] = [
  {
    path: '/home',
    icon: 'home',
    name: 'Inicio'
  },
  {
    path: '/profile',
    icon: 'person',
    name: 'Perfil'
  }
];

export const mockGetCurrentPath = jest.fn();
