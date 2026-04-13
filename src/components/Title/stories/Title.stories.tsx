import React from 'react';
import { StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import { Title, TitleSize, TitleVariant } from '..';
import metaConfig, { withAllPropsArgs } from './mocks';

const meta = {
  ...metaConfig,
  title: 'Components/Title',
};

export default meta;

type Story = StoryObj<typeof Title>;

// Default story
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText('Heading example');
    await expect(el).toBeInTheDocument();
    await expect(el.tagName.toLowerCase()).toBe('h1');
    await expect(el).toHaveClass('title--h1');
    await expect(el).toHaveClass('title--dark');
  },
};

// Story with all properties
export const WithAllProps: Story = {
  args: withAllPropsArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText('Title with all properties');
    await expect(el.tagName.toLowerCase()).toBe('h2');
    await expect(el).toHaveClass('title--h2');
    await expect(el).toHaveClass('title--primary');
    await expect(el).toHaveClass('title--bold');
    await expect(el).toHaveClass('title--italic');
    await expect(el).toHaveClass('title--underline');
    await expect(el).toHaveClass('title--center');
  },
};

// Story with different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Object.values(TitleSize).map((size) => (
        <Title key={size} size={size}>
          Title {size.toUpperCase()}
        </Title>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const size of Object.values(TitleSize)) {
      const el = canvas.getByText(`Title ${size.toUpperCase()}`);
      await expect(el).toHaveClass(`title--${size}`);
      await expect(el.tagName.toLowerCase()).toBe(size);
    }
  },
};

// Story with different color variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Object.values(TitleVariant).map((variant) => (
        <Title key={variant} variant={variant}>
          Variant {variant}
        </Title>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const variant of Object.values(TitleVariant)) {
      const el = canvas.getByText(`Variant ${variant}`);
      await expect(el).toHaveClass(`title--${variant}`);
    }
  },
};

// Story with different text styles
export const TextStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title>Normal style</Title>
      <Title bold>Bold</Title>
      <Title italic>Italic</Title>
      <Title underline>Underline</Title>
      <Title strikethrough>Strikethrough</Title>
      <Title bold italic>Bold and italic</Title>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Bold')).toHaveClass('title--bold');
    await expect(canvas.getByText('Italic')).toHaveClass('title--italic');
    await expect(canvas.getByText('Underline')).toHaveClass('title--underline');
    await expect(canvas.getByText('Strikethrough')).toHaveClass('title--strikethrough');
    const boldItalic = canvas.getByText('Bold and italic');
    await expect(boldItalic).toHaveClass('title--bold');
    await expect(boldItalic).toHaveClass('title--italic');
  },
};

// Story with different alignments
export const Alignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title align="left">Left alignment</Title>
      <Title align="center">Center alignment</Title>
      <Title align="right">Right alignment</Title>
      <Title 
        align="justify" 
        style={{ maxWidth: '300px' }}
      >
        Justified text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Title>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Left alignment')).toHaveClass('title--left');
    await expect(canvas.getByText('Center alignment')).toHaveClass('title--center');
    await expect(canvas.getByText('Right alignment')).toHaveClass('title--right');
    await expect(canvas.getByText(/Justified text/)).toHaveClass('title--justify');
  },
};

// Story with block behavior
export const Block: Story = {
  render: () => (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <Title 
        block 
        style={{ 
          display: 'block',
          backgroundColor: '#f0f0f0',
          padding: '8px',
          marginBottom: '8px'
        }}
      >
        Block title (full width)
      </Title>
      <p>Content below the title</p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Block title (full width)')).toHaveClass('title--block');
  },
};

// Story with no-wrap
export const NoWrap: Story = {
  render: () => (
    <div style={{ width: '200px', border: '1px solid #ccc', padding: '1rem' }}>
      <Title noWrap>
        This text will not break into multiple lines even if it is very long and does not fit in the container
      </Title>
      <Title>
        This text will break into multiple lines if it does not fit in the container
      </Title>
      <p>The title above should be displayed on a single line with ellipsis</p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headings = canvas.getAllByRole('heading');
    await expect(headings[0]).toHaveClass('title--noWrap');
    await expect(headings[1]).not.toHaveClass('title--noWrap');
  },
};

// Story with click handler
export const Clickable: Story = {
  args: {
    children: 'Click on this title',
    onClick: () => alert('Title clicked!'),
  },
};
