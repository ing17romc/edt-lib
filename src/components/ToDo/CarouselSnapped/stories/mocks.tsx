import { CarouselSnappedProps } from '../types'

export const defaultArgs: Partial<CarouselSnappedProps> = {
  showNavigation: true,
  showIndicators: true,
  defaultIndex: 0,
}

export const argTypes = {
  showNavigation: { control: 'boolean' },
  showIndicators: { control: 'boolean' },
}
