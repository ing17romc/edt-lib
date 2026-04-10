import { CarouselSnappedProps } from '../types'

export const defaultArgs: Partial<CarouselSnappedProps> = {
  showNavigation: true,
  showIndicators: true,
  defaultIndex: 0,
}

export const argTypes = {
  showNavigation: {
    control: 'boolean',
    description: 'When true, previous/next arrow buttons are rendered.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
  },
  showIndicators: {
    control: 'boolean',
    description: 'When true, dot indicators showing the current slide are rendered.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
  },
  defaultIndex: {
    control: { type: 'number', min: 0 },
    description: 'Index of the slide shown on first render.',
    table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A CSS scroll-snap carousel that flicks between slides. Supports navigation arrows, dot indicators, and a configurable starting slide index.',
    },
  },
}
