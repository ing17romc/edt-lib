# Recipe: Forms

## Goal

Compose a multi-field form with library inputs and clear action hierarchy.

## Example

```tsx
import 'edt-lib/styles.css';
import {
  Button,
  Selector,
  TextArea,
  TextBox,
} from 'edt-lib';

const options = [
  { value: 'bug', label: 'Bug report' },
  { value: 'feature', label: 'Feature request' },
];

export function RequestForm() {
  return (
    <form style={{ display: 'grid', gap: '1rem', maxWidth: 640 }}>
      <TextBox label="Subject" fullWidth />
      <Selector label="Category" options={options} fullWidth />
      <TextArea label="Details" rows={5} fullWidth />
      <Button type="submit">Submit request</Button>
    </form>
  );
}
```

## Notes

- Use `TextBox`, `Selector`, and `TextArea` as the primary form-input trio.
- Keep submit actions on `Button` rather than inventing a new CTA wrapper.
- Prefer package enums and prop unions instead of ad hoc string literals when the API already exposes them.
