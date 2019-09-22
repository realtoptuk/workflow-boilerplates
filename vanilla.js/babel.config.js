const dev = {
  targets: ['last 1 chrome version', 'last 1 firefox version'],
};

const prod = {
  debug: true,
  modules: false,
  corejs: 3,
  useBuiltIns: 'usage',
};

module.exports = {
  presets: [
    [
      '@babel/env',
      process.env.BABEL_ENV === 'production' ? { ...prod } : { ...dev },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-transform-node-env-inline',
  ],
};
