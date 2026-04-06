import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import CarouselSnapped from '../index'
import { defaultArgs, argTypes } from './mocks'

const sampleSlides = [
  {
    key: 'slide1',
    content: (
      <div style={{ height: 200, background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
        Slide 1
      </div>
    ),
  },
  {
    key: 'slide2',
    content: (
      <div style={{ height: 200, background: '#16a34a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
        Slide 2
      </div>
    ),
  },
  {
    key: 'slide3',
    content: (
      <div style={{ height: 200, background: '#dc2626', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
        Slide 3
      </div>
    ),
  },
]

const meta: Meta<typeof CarouselSnapped> = {
  title: 'Components/CarouselSnapped',
  component: CarouselSnapped,
  tags: ['autodocs'],
  args: {
    ...defaultArgs,
    slides: sampleSlides,
  },
  argTypes,
}

export default meta

type Story = StoryObj<typeof CarouselSnapped>

export const Default: Story = {}

export const NoNavigation: Story = {
  args: { showNavigation: false },
}

export const NoIndicators: Story = {
  args: { showIndicators: false },
}

export const Minimal: Story = {
  args: {
    showNavigation: false,
    showIndicators: false,
  },
}
