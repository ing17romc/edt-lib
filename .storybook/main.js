const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  async viteFinal(config) {
    // Asegurar que las rutas de importación se resuelvan correctamente
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // Mapear 'src' a la ruta absoluta del directorio src
        'src': path.resolve(__dirname, '../src')
      }
    };

    // Configuración base para el despliegue
    config.base = '/edt-lib/';
    
    return config;
  }
};
