<div align="center">
  <h1>edt-lib</h1>
  <p><strong>UI Component Library for React 18+ with TypeScript</strong></p>
  
  [![npm version](https://img.shields.io/npm/v/edt-lib.svg?style=flat-square)](https://www.npmjs.com/package/edt-lib)
  [![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/ing17romc/edt-lib/blob/main/LICENSE)
  [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://ing17romc.github.io/edt-lib/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

  <p>A modern, accessible, and highly customizable UI component library for React applications.</p>
</div>

## ✨ Features

- 🚀 Built with React 18+ and TypeScript
- 🎨 Consistent design with custom theme support
- ♿️ Fully accessible (WCAG 2.1)
- 📱 Responsive design
- 🧪 Full test coverage
- 📚 Interactive documentation with Storybook
- 🔧 Easy to customize and extend

## 📦 Installation

Install the package using npm or yarn:

```bash
# Using npm
npm install edt-lib

# Or using yarn
yarn add edt-lib
```

## 🔌 Prerequisites

### Material Icons

The library uses [Material Icons](https://fonts.google.com/icons) for icons. Make sure to include the following link in your application's `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

### TypeScript Configuration

If you are using TypeScript, make sure you have React types installed:

```bash
npm install --save-dev @types/react @types/react-dom
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { Button, ThemeProvider } from 'edt-lib';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Welcome to edt-lib</h1>
        <Button variant="primary" onClick={() => alert('Hello!')}>
          Click here
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## 🧩 Available Components

### Basic Components
- `Button` - Buttons with multiple variants
- `Card` - Content container with predefined styles
- `CheckButton` - Checkboxes
- `Icon` - Icon component
- `IconButton` - Buttons containing icons
- `Modal` - Modal windows
- `RadioButton` - Radio buttons
- `Selector` - Dropdown menus
- `Spinner` - Loading indicators
- `TextArea` - Editable text areas
- `TextBox` - Text fields
- `TextButton` - Text buttons
- `Title` - Titles with predefined styles

### Table Components
- `TableDefault` - Basic table
- `TableActiveRow` - Table with selectable rows
- `TableWithButton` - Table with action buttons
- `TableWithIcon` - Table with icons
- `TableWithPagination` - Table with pagination

### Utilities
- `ThemeProvider` - Custom theme provider
- `Grid` - Responsive grid system
- `Message` - Component for displaying messages to the user
- `Typography` - Consistent typographic styles

## 📚 Full Documentation

To see detailed examples and complete documentation for all components, visit our [Storybook documentation](https://ing17romc.github.io/edt-lib/).

## 🛠 Development

### Requirements
- Node.js 16+
- npm 7+ or yarn 1.22+

### Install dependencies

```bash
# Install dependencies
npm install
# or
yarn
```

### Available commands

```bash
# Start Storybook development server
npm run sb

# Run tests
npm test

# Run linter
npm run lint

# Build for production
npm run build

# Deploy documentation
npm run release-sb

# Publish new version (minor)
npm run publish-npm-minor
```

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

---

<div align="center">
  Made with ❤️ by the edt-lib team
</div>

## Publish to npm

Make sure you have permissions to publish the package to npm and have updated the version in `package.json` if necessary.

1. To increment the patch, build and publish automatically:
   ```bash
   npm run publish-npm
   ```
   This command will automatically update the version (patch), build the package and publish it to the npm public registry.

---

## Deploy Storybook to GitHub Pages

1. To build and deploy Storybook to GitHub Pages, run:
   ```bash
   npm run release-sb
   ```
   This command will build the application, create a `.gh-pages` folder, and deploy the content to the `gh-pages` branch of your repository.

---

## 🚀 Basic Usage

```tsx
import { Title } from 'edt-lib';

function App() {
  return <Title level={1}>Hello, world!</Title>;
}
```

---

## 📚 Visual Documentation

Check out the interactive documentation and live examples at:  
👉 [Storybook: http://ing17romc.github.io/edt-lib/](http://ing17romc.github.io/edt-lib/)

---

## 🧑‍💻 Local Development

Clone the repository and run the following commands:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start Storybook for development:
   ```bash
   npm run sb
   ```
   This will build the components and open Storybook at http://localhost:6006

3. To run tests:
   ```bash
   npm test
   ```

4. To clean and reinstall dependencies (useful in case of problems):
   ```bash
   npm run clean
   ```

5. To build components for production:
   ```bash
   npm run build
   ```

---

## 📦 Available Scripts

- `clean`: Cleans dependencies and reinstalls them
- `build`: Builds components for production
- `test`: Runs unit tests
- `lint`: Runs the linter
- `sb`: Starts Storybook in development mode
- `release-sb`: Deploys Storybook to GitHub Pages
- `publish-npm`: Publishes a new version to npm

---

```sh
npm install
npm run storybook
```

---

## 🧪 Tests

```sh
npm run test
```

---

## 🚢 Publish to NPM

1. Bump the version in `package.json`.
2. Build the package if necessary (`npm run build`).
3. Publish:
   ```sh
   npm publish --access public
   ```

---

## 🌐 Storybook Deploy (visual demo)

```sh
npm run build-storybook
npm run deploy-storybook
```
This will publish the documentation to GitHub Pages:  
[http://ing17romc.github.io/edt-lib/](http://ing17romc.github.io/edt-lib/)

---

## 📦 Repository

- [GitHub](https://github.com/ing17romc/edt-lib/)
- [NPM](https://www.npmjs.com/package/edt-lib)

---

## 📝 Changelog

Consulta cambios y releases en [CHANGELOG.md](./CHANGELOG.md).

---

## License

ISC

# How to use

## Install 

```
npm i edt-lib
```

## Styles 
> Import the styles in the `index` file
```jsx
import 'edt-lib/index.scss';
```

## Scripts 
> Import the componet using `import` in your page
```jsx
import { UI } from 'edt-lib';
```

## Example

> You can have more detail of all the components with their respective configuration options by visiting the [HomePage](http://ing17romc.github.io/edt-lib/)

```jsx
import React from 'react';
import { UI } from 'edt-lib';

const Example = () => {
    const { Title } = UI

    return (
        <div>
            <Title label='This is an example' />
        </div>
    );
};

export default Example;

```