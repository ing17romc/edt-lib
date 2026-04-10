import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Typography from './index';
import { mockTypographyProps } from './__tests__/mocks';

/**
 * # Typography Component
 * 
 * The Typography component is a visual guide that displays all typographic styles 
 * available in the application, including headings, paragraphs, and line-height examples.
 * 
 * This component is especially useful for:
 * - Visualizing the design's typographic hierarchy
 * - Ensuring visual consistency across the application
 * - Documenting typographic styles for the development team
 */
const meta: Meta<typeof Typography> = {
  title: 'Static/Typography',
  component: Typography,
  tags: ['autodocs', 'static'],
  parameters: {
    componentSubtitle: 'Typographic styles guide',
    docs: {
      description: {
        component: (
          'Shows examples of the typographic styles available in the application, ' +
          'including headings (h1-h6), paragraphs with different sizes, and line-height examples.'
        ),
      },
    },
  },
  argTypes: {
    showCodeExamples: {
      control: 'boolean',
      description: 'Shows code examples for each typographic element',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the main container',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    ...mockTypographyProps,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Typography>;

/**
 * ## Default view
 * 
 * Shows all typographic styles with code examples for each element.
 * Includes headings (h1-h6), paragraphs with different sizes, and line-height examples.
 */
export const Default: Story = {
  args: {
    showCodeExamples: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows all typographic styles with code examples for each element.'
      }
    }
  }
};

/**
 * ## Without code examples
 * 
 * Shows the typographic styles without code examples, useful for a cleaner view.
 */
export const WithoutCodeExamples: Story = {
  args: {
    showCodeExamples: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the typographic styles without code examples, ideal for design reviews.'
      }
    }
  }
};

/**
 * ## With custom class
 * 
 * Demonstrates how the component can be customized by applying a custom CSS class.
 */
export const WithCustomClass: Story = {
  args: {
    className: 'custom-typography',
    showCodeExamples: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to apply a custom CSS class to the main container of the component.'
      }
    }
  },
  decorators: [
    (Story) => (
      <>
        <style>
          {`
            .custom-typography {
              border: 2px dashed #e0e0e0;
              border-radius: 8px;
              padding: 1.5rem;
              background-color: #f9f9f9;
            }
            .custom-typography h1,
            .custom-typography h2 {
              color: #2c3e50;
            }
          `}
        </style>
        <Story />
      </>
    ),
  ],
};

/**
 * ## In context
 * 
 * Shows the Typography component in a context similar to a real application,
 * with a header, content, and footer.
 */
export const InContext: Story = {
  args: {
    showCodeExamples: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of the Typography component in a context similar to a real application.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="app-layout">
        <header style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '2rem'
        }}>
          <h1 style={{ margin: 0 }}>Example Application</h1>
          <p style={{ margin: '0.5rem 0 0', color: '#666' }}>Navigation bar</p>
        </header>
        
        <main style={{ padding: '0 1rem' }}>
          <Story />
        </main>
        
        <footer style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #e0e0e0',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#666'
        }}>
          © 2023 My Application. All rights reserved.
        </footer>
      </div>
    ),
  ],
};
