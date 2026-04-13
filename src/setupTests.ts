// Global configuration for tests with Vitest and Testing Library
import '@testing-library/jest-dom';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as previewConfig from '../.storybook/preview';

// Register Storybook project annotations so composeStories works in jsdom
setProjectAnnotations(previewConfig.default);

// Style mocks configuration
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

// matchMedia configuration for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
