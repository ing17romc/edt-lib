import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card, CardVariant } from '..';
import { mockCardProps, mockCardWithoutImage } from './mocks';

describe('Card Component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders correctly with all props', () => {
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

  it('renders without image when imageUrl is not provided', () => {
    render(<Card {...mockCardWithoutImage} />);
    
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    if (mockCardWithoutImage.title) {
      expect(screen.getByText(mockCardWithoutImage.title)).toBeInTheDocument();
    }
  });

  it('applies the correct style variant', () => {
    const { container } = render(
      <Card {...mockCardWithoutImage} variant={CardVariant.OUTLINED}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    expect(container.firstChild).toHaveClass('card--outlined');
  });

  it('handles the onClick event when provided', () => {
    const onClickMock = vi.fn();
    render(
      <Card {...mockCardWithoutImage} onClick={onClickMock}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    const card = screen.getByRole('button');
    fireEvent.click(card);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('is keyboard accessible when clickable', () => {
    const onKeyDownMock = vi.fn();
    render(
      <Card {...mockCardWithoutImage} onClick={onKeyDownMock}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter' });
    
    expect(onKeyDownMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom CSS classes', () => {
    const customClass = 'my-custom-class';
    const { container } = render(
      <Card {...mockCardWithoutImage} className={customClass}>
        {mockCardWithoutImage.children}
      </Card>
    );
    
    expect(container.firstChild).toHaveClass(customClass);
  });
});
