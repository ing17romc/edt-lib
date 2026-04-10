import React from 'react';
import { StoryObj } from '@storybook/react-vite';
import { Title, TitleSize, TitleVariant } from '..';
import metaConfig, { withAllPropsArgs } from './mocks';

const meta = {
  ...metaConfig,
  title: 'Components/Title',
};

export default meta;

type Story = StoryObj<typeof Title>;

// Default story
export const Default: Story = {};

// Story with all properties
export const WithAllProps: Story = {
  args: withAllPropsArgs,
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
};

// Story with click handler
export const Clickable: Story = {
  args: {
    children: 'Click on this title',
    onClick: () => alert('Title clicked!'),
  },
};
