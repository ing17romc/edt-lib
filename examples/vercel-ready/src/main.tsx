import React from 'react';
import ReactDOM from 'react-dom/client';
import 'edt-lib/index.scss';
import { Button, Message, ThemeProvider, Title, TitleSize } from 'edt-lib';

function App() {
  return (
    <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
        <section style={{ display: 'grid', gap: '1rem', maxWidth: 520 }}>
          <Title size={TitleSize.H2}>Vercel-ready seed</Title>
          <Message title="Style contract">
            This example uses the raw Sass entry exported as <code>edt-lib/index.scss</code>.
          </Message>
          <Button>Deploy-ready action</Button>
        </section>
      </main>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
