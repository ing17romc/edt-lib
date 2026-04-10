# 📚 edt-lib Documentation

Welcome to the technical documentation for **edt-lib**, a UI component library for React with TypeScript.

## 📋 Table of Contents
- [Introduction](#-introduction)
- [Installation Guide](#-installation-guide)
- [Initial Setup](#-initial-setup)
- [Components](#-components)
- [Themes and Styles](#-themes-and-styles)
- [Contributing Guide](#-contributing-guide)
- [FAQ](#-faq)
- [Support](#-support)

---

## 🚀 Introduction

`edt-lib` is a UI component library built with React 18+ and TypeScript. It is designed to offer accessible, customizable, and production-ready components that follow frontend development best practices.

### Key Features
- **Static Typing**: Fully written in TypeScript
- **Accessibility**: WCAG 2.1 compliant
- **Themes**: Custom theme support
- **Responsive**: Components that adapt to any device
- **Interactive Documentation**: With live examples using Storybook

## 📥 Installation Guide

### Prerequisites
- Node.js 16 or higher
- React 18 or higher
- TypeScript 4.9 or higher (recommended)

### Install with npm

```bash
npm install edt-lib
```

### Install with Yarn

```bash
yarn add edt-lib
```

## ⚙️ Initial Setup

### TypeScript Configuration

Make sure you have React types installed:

```bash
npm install --save-dev @types/react @types/react-dom
```

### Icon Configuration

The library uses Material Icons. Add the following to your application's `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

### Theme Configuration

Wrap your application with `ThemeProvider` to enable custom themes:

```jsx
import { ThemeProvider } from 'edt-lib';

function App() {
  return (
    <ThemeProvider>
      {/* Your application here */}
    </ThemeProvider>
  );
}
```

## 🧩 Componentes

### Basic Usage

```jsx
import { Button, Card } from 'edt-lib';

function MyComponent() {
  return (
    <Card>
      <h2>My Card</h2>
      <p>Card content</p>
      <Button variant="primary">Accept</Button>
    </Card>
  );
}
```

### Available Components

#### Navigation
- `NavBar` - Top navigation bar
- `Footer` - Page footer
- `Breadcrumb` - Navigation breadcrumbs

#### Forms
- `Button` - Buttons with multiple variants
- `CheckButton` - Checkboxes
- `RadioButton` - Radio buttons
- `Selector` - Dropdown menus
- `TextArea` - Text areas
- `TextBox` - Text fields

#### Surfaces
- `Card` - Content container
- `Modal` - Modal windows
- `Message` - Alert messages

#### Data
- `Table` - Data tables
- `TableWithPagination` - Tables with pagination
- `TableWithButton` - Tables with actions

#### Feedback
- `Spinner` - Loading indicators
- `Progress` - Progress bars

## 🎨 Themes and Styles

### Style Variables

The library uses custom CSS variables for colors, typography, and spacing. You can override them to customize the theme.

### Customization

```scss
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: 'Arial', sans-serif;
}
```

## 👥 Contributing Guide

We appreciate contributions! Please read our [contributing guide](CONTRIBUTING.md) to get started.

### Code Standards

- Use TypeScript with strict typing
- Follow React naming conventions
- Write unit tests for all new code
- Document props and components with JSDoc

### Pull Request Process

1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## ❓ FAQ

### How do I update to the latest version?

```bash
npm update edt-lib
# o
yarn upgrade edt-lib
```

### How do I report a bug?

Please open an [issue](https://github.com/ing17romc/edt-lib/issues) on GitHub with the following details:
- Library version
- Steps to reproduce the bug
- Expected vs. actual behavior
- Screenshots (if applicable)

## 📞 Support

For support, please:
- Check the [API documentation](https://ing17romc.github.io/edt-lib/)
- Search the [existing issues](https://github.com/ing17romc/edt-lib/issues)
- Open a new issue if your problem has not been reported

---

<div align="center">
  <p>Documentation generated on July 5, 2025</p>
  <p>Current version: 2.9.0</p>
</div>
      <h1>My Application</h1>
      <Button>Button with icon</Button>
    </div>
  );
}

export default App;
```

## Project Structure

- `/src`: Main library source code.
- `/docs`: Project documentation.
- `/dist`: Generated files for distribution.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a branch for your feature or fix: `git checkout -b my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a Pull Request.

## Publish to npm

- To publish a new version to npm:
  ```bash
  npm run publish-lib
  ```
- To increment the patch, build and publish automatically:
  ```bash
  npm run release-lib
  ```

## Deploy Storybook to GitHub Pages

- To build and deploy Storybook:
  ```bash
  npm run deploy-sb
  ```

## Contact

For questions or suggestions, open an issue on GitHub or contact the main maintainer.

