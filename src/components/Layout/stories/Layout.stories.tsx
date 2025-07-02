import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../Layout';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { MockLogo, MockNav, MockFooterContent } from './mocks';

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Clase CSS adicional para el contenedor principal',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: (args) => (
    <Layout {...args}>
      <NavBar logo={<MockLogo />} title="Mi Aplicación">
        <MockNav />
      </NavBar>
      <main style={{
        padding: '2rem',
        flex: 1,
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2>Contenido Principal</h2>
        <p>Este es el contenido principal de la aplicación. Aquí iría el contenido específico de cada página.</p>
      </main>
      <Footer>
        <MockFooterContent />
      </Footer>
    </Layout>
  ),
  args: {},
};

export const SinBarraDeNavegacion: Story = {
    render: (args) => (
        <Layout {...args}>
            <main style={{ padding: '2rem', flex: 1 }}>
                <h2>Contenido sin barra de navegación</h2>
                <p>Esta es una página sin barra de navegación.</p>
            </main>
            <Footer />
        </Layout>
    ),
    args: {},
};

export const ConClasePersonalizada: Story = {
    render: (args) => (
        <Layout {...args}>
            <NavBar logo={<MockLogo />} title="Mi Aplicación">
                <MockNav />
            </NavBar>
            <main style={{
                padding: '2rem',
                flex: 1,
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto'
            }}>
                <h2>Contenido con Clase Personalizada</h2>
                <p>Este es un ejemplo de Layout con una clase personalizada aplicada al contenedor principal.</p>
            </main>
            <Footer>
                <MockFooterContent />
            </Footer>
        </Layout>
    ),
    args: {
        className: 'mi-clase-personalizada',
    },
};
