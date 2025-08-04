module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignorePatterns: ['node_modules/', 'dist/', '.astro/'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      rules: {
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        // Deshabilitar reglas de React para archivos Astro
        'react/no-unknown-property': 'off',
        'react/jsx-key': 'off',
        'react/jsx-no-target-blank': 'off',
        'react/no-unescaped-entities': 'off',
        'react/self-closing-comp': 'off',
        'react/jsx-no-comment-textnodes': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-no-duplicate-props': 'off',
        'react/jsx-no-undef': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      plugins: ['react', 'react-hooks'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
}; 