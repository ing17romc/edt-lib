import { TitleProps } from '../types';

export const mockTitleProps: TitleProps = {
  level: 1,
  children: 'Test Title',
  className: 'test-class',
  style: { color: 'red' },
  id: 'title-component'
};

export const mockTitleWithCustomLevel: TitleProps = {
  level: 2,
  children: 'Subtitle',
  className: 'subtitle-class'
};

export const mockTitleWithAdditionalProps: TitleProps = {
  level: 3,
  children: 'Title with ID',
  id: 'custom-id',
  'aria-label': 'Custom label'
};
