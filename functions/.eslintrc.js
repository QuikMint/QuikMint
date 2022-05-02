export const root = true;
export const env = {
  es6: true,
  node: true,
};
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  project: ['tsconfig.json', 'tsconfig.dev.json'],
  sourceType: 'module',
};
export const ignorePatterns = [
  '/lib/**/*', // Ignore built files.
];
export const plugins = ['@typescript-eslint', 'import'];
export const rules = {
  quotes: ['warn', 'single'],
  'import/no-unresolved': 0,
  semi: 0,
  'object-curly-spacing': 0
};
