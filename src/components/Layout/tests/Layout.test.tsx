import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { MockLogo, MockNav, MockFooterContent } from './mocks';

describe('Layout', () => {
  it('should render the layout with the main content', () => {
    render(
      <Layout>
        <NavBar logo={<MockLogo />} title="My Application">
          <MockNav />
        </NavBar>
        <main>
          <h1>Main Content</h1>
        </main>
        <Footer>
          <MockFooterContent />
        </Footer>
      </Layout>
    );

    expect(screen.getByText('Main Content')).toBeInTheDocument();
    expect(screen.getByText('My Application')).toBeInTheDocument();
    expect(screen.getByText('Useful links')).toBeInTheDocument();
  });
});