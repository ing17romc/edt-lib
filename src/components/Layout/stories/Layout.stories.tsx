import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Layout from '../Layout';
import NavBar from '../NavBar';
import Footer from '../Footer';

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

// Mock de un logo simple
const MockLogo = () => (
  <div style={{ 
    width: '32px', 
    height: '32px', 
    backgroundColor: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '4px'
  }}>
    L
  </div>
);

// Mock de navegación
const MockNav = () => (
  <>
    <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</a>
    <a href="#acerca" style={{ textDecoration: 'none', color: 'inherit' }}>Acerca de</a>
    <a href="#contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
  </>
);

// Mock de contenido de pie de página
const MockFooterContent = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    gap: '1rem'
  }}>
    <div>
      <h3>Enlaces útiles</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="#ayuda" style={{ textDecoration: 'none', color: 'inherit' }}>Ayuda</a></li>
        <li><a href="#terminos" style={{ textDecoration: 'none', color: 'inherit' }}>Términos y condiciones</a></li>
        <li><a href="#privacidad" style={{ textDecoration: 'none', color: 'inherit' }}>Política de privacidad</a></li>
      </ul>
    </div>
    <div>
      <h3>Contacto</h3>
      <p>Email: info@ejemplo.com</p>
      <p>Teléfono: +123 456 7890</p>
    </div>
  </div>
);

// Template para las historias
const Template: Story = {
  render: (args: React.ComponentProps<typeof Layout>) => (
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
};

export const Default: Story = {
  ...Template,
  args: {
    children: (
      <>
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
      </>
    )
  },
};

export const SinBarraDeNavegacion: Story = {
  render: (args: React.ComponentProps<typeof Layout>) => (
    <Layout {...args}>
      <main style={{ padding: '2rem', flex: 1 }}>
        <h2>Contenido sin barra de navegación</h2>
        <p>Esta es una página sin barra de navegación.</p>
      </main>
      <Footer />
    </Layout>
  ),
};

export const ConClasePersonalizada: Story = {
  ...Template,
  args: {
    className: 'mi-clase-personalizada',
    children: (
      <>
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
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de Layout con una clase CSS personalizada aplicada al contenedor principal.'
      }
    }
  }
};
