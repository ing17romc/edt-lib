import { Meta } from '@storybook/react-vite';
import { Title, TitleSize, TitleVariant } from '..';

export default {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A semantic heading component (h1–h6) with configurable size, color variant, text styling (bold, italic, underline, strikethrough), text alignment, and display mode.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.values(TitleSize),
      description: 'Heading level — maps to the corresponding HTML element (h1–h6).',
      table: {
        type: { summary: Object.values(TitleSize).join(' | ') },
        defaultValue: { summary: TitleSize.H1 },
      },
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(TitleVariant),
      description: 'Color variant applied to the heading text.',
      table: {
        type: { summary: Object.values(TitleVariant).join(' | ') },
        defaultValue: { summary: TitleVariant.DARK },
      },
    },
    children: {
      control: 'text',
      description: 'Text or node content rendered inside the heading.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    bold: {
      control: 'boolean',
      description: 'When true, the heading is rendered in bold weight.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    italic: {
      control: 'boolean',
      description: 'When true, the heading is rendered in italic style.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    underline: {
      control: 'boolean',
      description: 'When true, the heading text is underlined.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    strikethrough: {
      control: 'boolean',
      description: 'When true, the heading text is struck through.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Horizontal text alignment.',
      table: {
        type: { summary: 'left | center | right | justify' },
        defaultValue: { summary: 'left' },
      },
    },
    block: {
      control: 'boolean',
      description: 'When true, the heading occupies the full available width.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    noWrap: {
      control: 'boolean',
      description: 'When true, text does not wrap and overflows with an ellipsis.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the heading is clicked.',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    children: 'Heading example',
    size: TitleSize.H1,
    variant: TitleVariant.DARK,
  },
} as Meta<typeof Title>;

export const withAllPropsArgs = {
  children: 'Título con todas las propiedades',
  size: TitleSize.H2,
  variant: TitleVariant.PRIMARY,
  bold: true,
  italic: true,
  underline: true,
  strikethrough: false,
  align: 'center' as const,
  block: true,
  noWrap: false,
  onClick: () => {
    console.log('Title clicked');
  },
};
