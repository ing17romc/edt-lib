import type { Meta, StoryObj } from '@storybook/react';
import Grid from './index';

/**
 * Grid Component
 * 
 * This component displays a visual representation of the grid system used in the EDT library.
 * It shows both primary and secondary grid structures to help visualize the layout system.
 */
const meta: Meta<typeof Grid> = {
  title: 'Static/Grid',
  component: Grid,
  tags: ['autodocs', 'static'],
  parameters: {
    componentSubtitle: 'Grid System Visualization',
    docs: {
      description: {
        component: 'A visual representation of the grid system used for layout in the EDT library.'
      },
    },
  },
  // No argTypes needed as the component doesn't accept any props
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default grid visualization showing both primary and secondary grid systems.'
      }
    }
  }
};

// Story to show how content would look in the grid
export const WithContent: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Grid System Example</h2>
      <p>This is an example of how content would be laid out using the grid system.</p>
      <Grid />
      <div style={{ marginTop: '2rem' }}>
        <p>The grid above shows the 12-column primary grid and the 20-column secondary grid.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how the grid would be used in a real layout with additional content.'
      }
    }
  }
};
