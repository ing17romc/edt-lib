export default {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
  sourceType: 'unambiguous',
  extensions: ['.ts', '.tsx'],
}
