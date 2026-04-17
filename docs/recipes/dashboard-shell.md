# Recipe: Dashboard Shell

## Goal

Compose a page shell with navigation, summary content, and feedback surfaces.

## Example

```tsx
import 'edt-lib/styles.css';
import {
  Card,
  Footer,
  Layout,
  Message,
  NavBar,
  ThemeProvider,
  Title,
} from 'edt-lib';

export default function DashboardPage() {
  return (
    <ThemeProvider defaultTheme="system">
      <Layout>
        <NavBar title="Operations dashboard" />
        <main style={{ padding: '2rem', display: 'grid', gap: '1.5rem' }}>
          <Message title="Environment status">
            All systems are responding normally.
          </Message>
          <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <Card title="Revenue">$124,000</Card>
            <Card title="Open tickets">18</Card>
            <Card title="Conversion">4.8%</Card>
          </section>
        </main>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}
```

## Notes

- `Layout`, `NavBar`, and `Footer` are intended to be composed together for shell-level pages.
- Storybook demos for shells should use `fullscreen`.
