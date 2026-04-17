import React from 'react';
import ReactDOM from 'react-dom/client';
import 'edt-lib/styles.css';
import { Button, Card, ThemeProvider, Title, TitleSize } from 'edt-lib';

function App() {
  return (
    <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
        <Card title="Vite example" subtitle="Package-root imports and compiled CSS.">
          <Title size={TitleSize.H3}>edt-lib in Vite</Title>
          <div style={{ marginTop: '1rem' }}>
            <Button>Continue</Button>
          </div>
        </Card>
      </main>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
