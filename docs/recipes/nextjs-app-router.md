# Recipe: Next.js App Router

## Goal

Use `edt-lib` in a Next.js App Router application without relying on internal imports.

## Root layout

```tsx
import 'edt-lib/styles.css';
import { ThemeProvider } from 'edt-lib';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Page usage

```tsx
import { Button, Card, Title, TitleSize } from 'edt-lib';

export default function Page() {
  return (
    <Card title="Welcome">
      <Title size={TitleSize.H2}>App Router ready</Title>
      <Button>Continue</Button>
    </Card>
  );
}
```

## Notes

- Prefer `styles.css` in Next.js unless you specifically want raw Sass entry integration.
- Keep `ThemeProvider` high in the tree to avoid repeated provider nesting.
- Do not import from `src/` or `dist/` in app code.
