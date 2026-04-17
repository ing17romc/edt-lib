# Layout Shells

## Recommended Shell Structure

For application pages that need a full frame:

```tsx
import 'edt-lib/styles.css';
import { Footer, Layout, NavBar, ThemeProvider } from 'edt-lib';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Layout>
        <NavBar title="Dashboard" />
        <main>{children}</main>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
```

## When to Use `fullscreen` Stories

Any story demonstrating:

- `Layout`
- full dashboards
- navigation shells
- page templates

should use a fullscreen canvas in Storybook.

## Avoid

- centering page-shell components in Storybook
- mixing demo-only wrappers with public layout guidance
- duplicating shell behavior with ad hoc wrappers when `Layout` is already sufficient
