import { TextButtonProps } from '../types';

export const MOCK_ID = 'test-button';
export const MOCK_TEXT = 'Click me';

export const createMockProps = (overrides: Partial<TextButtonProps> = {}): TextButtonProps => ({
  id: MOCK_ID,
  text: MOCK_TEXT,
  disabled: false,
  onClick: jest.fn(),
  type: 'PRIMARY',
  ...overrides,
});

export const BUTTON_TYPES = [
  'PRIMARY',
  'SECONDARY', 
  'DANGER',
  'SUCCESS',
  'WARNING',
  'INFO'
] as const;
