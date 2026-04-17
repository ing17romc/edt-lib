import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import Layout from '../Layout';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { MockLogo, MockNav, MockFooterContent } from './mocks';

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class name for the root container.',
      table: { type: { summary: 'string' } },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A full-page shell that arranges a NavBar, scrollable main content, and a Footer in a vertical flex column. Provides consistent page structure across the application.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: (args) => (
    <Layout {...args}>
      <NavBar logo={<MockLogo />} title="My App">
        <MockNav />
      </NavBar>
      <main style={{
        padding: '2rem',
        flex: 1,
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2>Main Content</h2>
        <p>This is the main content area. Each page would render its specific content here.</p>
      </main>
      <Footer>
        <MockFooterContent />
      </Footer>
    </Layout>
  ),
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Main Content')).toBeInTheDocument();
    await expect(canvas.getByText('My App')).toBeInTheDocument();
    await expect(canvas.getByText('Useful links')).toBeInTheDocument();
  },
};

export const WithoutNavBar: Story = {
    render: (args) => (
        <Layout {...args}>
            <main style={{ padding: '2rem', flex: 1 }}>
                <h2>Content without a navigation bar</h2>
                <p>This page has no NavBar — useful for login pages or standalone views.</p>
            </main>
            <Footer />
        </Layout>
    ),
    args: {},
};

export const WithCustomClass: Story = {
    render: (args) => (
        <Layout {...args}>
            <NavBar logo={<MockLogo />} title="My App">
                <MockNav />
            </NavBar>
            <main style={{
                padding: '2rem',
                flex: 1,
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto'
            }}>
                <h2>Content with a custom class</h2>
                <p>This example shows a Layout with a custom CSS class applied to the root container.</p>
            </main>
            <Footer>
                <MockFooterContent />
            </Footer>
        </Layout>
    ),
    args: {
        className: 'my-custom-class',
    },
};
