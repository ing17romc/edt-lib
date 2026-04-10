import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../index';
import { MockLogo, MockNav } from './mocks';

describe('NavBar', () => {
  it('should render the navigation bar with the logo, title, and links', () => {
    render(
      <NavBar logo={<MockLogo />} title="My App">
        <MockNav />
      </NavBar>
    );

    expect(screen.getByText('My App')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});