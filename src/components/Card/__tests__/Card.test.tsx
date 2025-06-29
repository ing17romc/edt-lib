import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardVariant } from '..';
import { mockCardProps, mockCardWithoutImage } from './mocks';

// Mock del módulo SCSS
jest.mock('../styles/Card.module.scss', () => ({
  card: 'card',
  'card--elevated': 'card--elevated',
  'card--outlined': 'card--outlined',
  'card--filled': 'card--filled',
  'card--clickable': 'card--clickable',
  card__image: 'card__image',
  card__content: 'card__content',
  card__title: 'card__title',
  card__subtitle: 'card__subtitle',
  card__body: 'card__body',
}));

// Mock de console.error para evitar warnings de act()
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: React does not recognize the `testID` prop on a DOM element/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

describe('Card Component', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renderiza correctamente con todas las props', () => {
    render(<Card {...mockCardProps} />);
    
    if (mockCardProps.title) {
      expect(screen.getByText(mockCardProps.title)).toBeInTheDocument();
    }
    if (mockCardProps.subtitle) {
      expect(screen.getByText(mockCardProps.subtitle)).toBeInTheDocument();
    }
    expect(screen.getByText(String(mockCardProps.children))).toBeInTheDocument();
    
    const image = screen.getByAltText(mockCardProps.imageAlt || '');
    expect(image).toHaveAttribute('src', mockCardProps.imageUrl);
  });

  it('renderiza sin imagen cuando no se proporciona imageUrl', () => {
    render(<Card {...mockCardWithoutImage} />);
    
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    if (mockCardWithoutImage.title) {
      expect(screen.getByText(mockCardWithoutImage.title)).toBeInTheDocument();
    }
  });

  it('aplica la variante de estilo correcta', () => {
    const { container } = render(
      <Card {...mockCardWithoutImage} variant={CardVariant.OUTLINED}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    expect(container.firstChild).toHaveClass('card--outlined');
  });

  it('maneja el evento onClick cuando se proporciona', () => {
    const onClickMock = jest.fn();
    render(
      <Card {...mockCardWithoutImage} onClick={onClickMock}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    const card = screen.getByRole('button');
    fireEvent.click(card);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('es accesible con teclado cuando es clickeable', () => {
    const onKeyDownMock = jest.fn();
    render(
      <Card {...mockCardWithoutImage} onClick={onKeyDownMock}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter' });
    
    expect(onKeyDownMock).toHaveBeenCalledTimes(1);
  });

  it('aplica clases CSS personalizadas', () => {
    const customClass = 'mi-clase-personalizada';
    const { container } = render(
      <Card {...mockCardWithoutImage} className={customClass}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    expect(container.firstChild).toHaveClass(customClass);
  });
});
