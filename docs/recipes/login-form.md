# Recipe: Login Form

## Goal

Build a basic login screen with package-root imports and the public stylesheet contract.

## Example

```tsx
import 'edt-lib/styles.css';
import {
  Button,
  Card,
  TextBox,
  ThemeProvider,
  Title,
} from 'edt-lib';

export default function LoginPage() {
  return (
    <ThemeProvider defaultTheme="system">
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
        <Card title="Sign in" subtitle="Use your workspace credentials.">
          <form style={{ display: 'grid', gap: '1rem' }}>
            <TextBox label="Email" type="email" fullWidth />
            <TextBox label="Password" type="password" fullWidth />
            <Button type="submit" fullWidth>
              Continue
            </Button>
          </form>
        </Card>
      </main>
    </ThemeProvider>
  );
}
```

## Notes

- Use `styles.css` for the simplest consumer setup.
- `ThemeProvider` belongs at the page or app shell, not inside individual fields.
- Prefer `Card` plus `Title` over custom wrappers for a minimal auth surface.
