import { within, expect } from 'storybook/test';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { Selector, SelectorVariant } from '..';
import { ComponentSize } from '../../types';
import {
  defaultArgs,
  withoutLabelArgs,
  withHelperTextArgs,
  errorStateArgs,
  disabledArgs,
  loadingArgs,
  fullWidthArgs,
  withManyOptionsArgs,
  OptionGroupsComponent,
  SizesComponent,
  mockOptions,
} from './mocks';

const meta: Meta<typeof Selector> = {
  title: 'Components/Selector',
  component: Selector,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Array of selectable option objects. Each item requires a `value` and `label`, with an optional `disabled` flag.',
      table: { type: { summary: 'SelectorOption[]' } },
    },
    value: {
      control: 'text',
      description: 'Currently selected value (controlled mode).',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      control: 'text',
      description: 'Initial selected value (uncontrolled mode).',
      table: { type: { summary: 'string' } },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired with the selected value when the user picks an option.',
      table: { type: { summary: '(value: string) => void' } },
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the selector.',
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no option is selected.',
      table: { type: { summary: 'string' } },
    },
    helperText: {
      control: 'text',
      description: 'Hint text displayed below the selector.',
      table: { type: { summary: 'string' } },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when error is true.',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: 'select',
      options: Object.values(SelectorVariant),
      description: 'Visual style variant of the selector.',
      table: {
        type: { summary: Object.values(SelectorVariant).join(' | ') },
        defaultValue: { summary: SelectorVariant.PRIMARY },
      },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the selector field.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the selector is non-interactive.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'When true, shows a loading indicator inside the selector.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'When true, the selector stretches to fill its container width.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    error: {
      control: 'boolean',
      description: 'When true, applies an error style to the selector.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Marks the selector as required and adds a visual indicator.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A fully-featured dropdown selector with support for labels, placeholder, helper text, error state, loading state, grouped options, and multiple visual variants.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Selector>;

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeInTheDocument();
    await expect(canvas.getByText('Select an option')).toBeInTheDocument();
  },
};

export const WithoutLabel: Story = {
  args: withoutLabelArgs,
};

export const WithHelperText: Story = {
  args: withHelperTextArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Select an option from the list')).toBeInTheDocument();
  },
};

export const ErrorState: Story = {
  args: errorStateArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toHaveClass('selector--error');
    await expect(canvas.getByText('You must select an option')).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: disabledArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeDisabled();
  },
};

export const Loading: Story = {
  args: loadingArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeDisabled();
    await expect(canvasElement.querySelector('.selectorLoadingSpinner')).toBeInTheDocument();
  },
};

export const FullWidth: Story = {
  args: fullWidthArgs,
};

export const WithManyOptions: Story = {
  args: withManyOptionsArgs,
};

export const WithOptionGroups: Story = {
  render: () => <OptionGroupsComponent />,
};

export const Sizes: Story = {
  render: () => <SizesComponent />,
};

/**
 * Selector with different variants.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Selector 
        options={mockOptions} 
        label="Primary variant (default)" 
        variant={SelectorVariant.PRIMARY} 
      />
      <Selector 
        options={mockOptions} 
        label="Secondary variant" 
        variant={SelectorVariant.SECONDARY} 
      />
      <Selector 
        options={mockOptions} 
        label="Danger variant" 
        variant={SelectorVariant.DANGER} 
      />
      <Selector 
        options={mockOptions} 
        label="Success variant" 
        variant={SelectorVariant.SUCCESS} 
      />
      <Selector 
        options={mockOptions} 
        label="Warning variant" 
        variant={SelectorVariant.WARNING} 
      />
    </div>
  ),
};

/**
 * Selector with a default selected option.
 */
export const WithDefaultValue: Story = {
  args: {
    defaultValue: '2',
    label: 'With default value',
  },
};

/**
 * Required selector with mandatory field indicator.
 */
export const RequiredField: Story = {
  args: {
    label: 'Required field',
    required: true,
  },
};
