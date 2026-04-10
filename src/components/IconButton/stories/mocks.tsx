import { Meta } from '@storybook/react-vite';
import { ComponentSize, ComponentVariant } from '../../types';

// Meta configuration for stories
export const meta: Meta = {
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'text' },
      description: 'Name of the icon to display (Material Symbols identifier).',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the icon button.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning'],
      description: 'Visual color variant of the button.',
      table: {
        type: { summary: 'primary | secondary | tertiary | danger | success | warning' },
        defaultValue: { summary: '"primary"' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'When true, the button is non-interactive and visually muted.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'When true, shows a loading spinner instead of the icon.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'When true, the button expands to fill the full width of its container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconVariant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'dual'],
      description: 'Rendering style of the icon — solid fill, outline, or dual-tone.',
      table: {
        type: { summary: 'solid | outline | dual' },
        defaultValue: { summary: '"outline"' },
      },
    },
    iconColor: {
      control: { type: 'color' },
      description: 'Custom color override for the icon.',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the button is clicked.',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    icon: 'home',
    'aria-label': 'Example button',
    size: ComponentSize.MEDIUM,
    variant: 'primary',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconVariant: 'outline',
  },
};

export const parameters = {
  docs: {
    description: {
      component:
        'A compact button that renders an icon as its primary content. Supports all button variants, sizes, loading state, and a custom icon color override.',
    },
  },
};

// Size options for showcase stories
export const sizeOptions: { size: ComponentSize; label: string }[] = [
  { size: ComponentSize.SMALL, label: 'Small' },
  { size: ComponentSize.MEDIUM, label: 'Medium' },
  { size: ComponentSize.LARGE, label: 'Large' },
];

// Variant options for showcase stories
export const variantOptions: { variant: ComponentVariant; label: string }[] = [
  { variant: ComponentVariant.PRIMARY, label: 'Primary' },
  { variant: ComponentVariant.SECONDARY, label: 'Secondary' },
  { variant: ComponentVariant.TERTIARY, label: 'Tertiary' },
  { variant: ComponentVariant.DANGER, label: 'Danger' },
  { variant: ComponentVariant.SUCCESS, label: 'Success' },
  { variant: ComponentVariant.WARNING, label: 'Warning' },
];

// Example icons for stories
export const exampleIcons = [
  'home',
  'star',
  'settings',
  'search',
  'notifications',
  'menu',
  'close',
  'arrow_back',
  'arrow_forward',
  'check',
];

// Styles for story containers
export const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: '16px',
};

export const itemContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  minWidth: '80px',
};
