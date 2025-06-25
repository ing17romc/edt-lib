export interface Option {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export const OPTIONS: Option[] = [
  { id: '1', label: 'Option 1', icon: 'home', path: '/option1' },
  { id: '2', label: 'Option 2', icon: 'settings', path: '/option2' },
  { id: '3', label: 'Option 3', icon: 'info', path: '/option3' },
];

export const LEFT_OPTIONS: Option[] = [
  { id: 'left1', label: 'Left 1', icon: 'arrow_back', path: '/left1' },
  { id: 'left2', label: 'Left 2', icon: 'arrow_back', path: '/left2' },
];

export const RIGHT_OPTIONS: Option[] = [
  { id: 'right1', label: 'Right 1', icon: 'arrow_forward', path: '/right1' },
  { id: 'right2', label: 'Right 2', icon: 'arrow_forward', path: '/right2' },
];
