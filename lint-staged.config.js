module.exports = {
  'src/**/*': () => ['yarn prettier --write . --config .prettierrc'],
  'src/**/*.{js,jsx}': () => ['yarn eslint . -c .eslintrc --ext .jsx,.js'],
  'src/**/*.{ts,tsx}': () => [
    'yarn tsc --noEmit -p tsconfig.json',
    'rm -f tsconfig.tsbuildinfo',
    'yarn eslint . -c .eslintrc.js --ext .tsx,.ts',
  ],
};
