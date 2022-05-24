const root = true;
const env = {
  es6: true,
  node: true,
};
const parser = '@typescript-eslint/parser';
const parserOptions = {
  project: ['tsconfig.json', 'tsconfig.dev.json'],
  sourceType: 'module',
};
const ignorePatterns = [
  '/lib/**/*', // Ignore built files.
];
const plugins = ['@typescript-eslint', 'import'];
const rules = {
  quotes: ['warn', 'single'],
  'import/no-unresolved': 0,
  semi: 0,
  'object-curly-spacing': 0
};

module.exports = {root, env, parser, parserOptions, ignorePatterns, plugins, rules}