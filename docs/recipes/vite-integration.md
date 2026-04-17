# Recipe: Vite Integration

## Goal

Use `edt-lib` in a standard Vite React application.

## Entry file

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'edt-lib/styles.css';
import { Button, ThemeProvider } from 'edt-lib';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Button>Hello from Vite</Button>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

## Notes

- Vite is the easiest integration path because the library is built with the same toolchain.
- If the app already uses Sass and wants the raw entry, `edt-lib/index.scss` is supported.
