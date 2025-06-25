export interface Option {
  path: string;
  name: string;
  icon?: string;
}

export const OPTIONS: Option[] = [
  { path: '/home', name: 'Home', icon: 'home' },
  { path: '/about', name: 'About', icon: 'info' },
  { path: '/contact', name: 'Contact', icon: 'mail' },
];

export const LEFT_OPTIONS: Option[] = [
  { path: '/left1', name: 'Left 1' },
  { path: '/left2', name: 'Left 2' },
];

export const RIGHT_OPTIONS: Option[] = [
  { path: '/right1', name: 'Right 1' },
  { path: '/right2', name: 'Right 2' },
];
