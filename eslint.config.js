import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  stylistic: true,

  ignores: [
    'package.json',
    'tsconfig.*',
    'vite.config.ts',
    'tailwind.config.js',
  ],
})
