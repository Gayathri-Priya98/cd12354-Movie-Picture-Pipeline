 HEAD
    ignorePatterns: ['build/', 'dist/', 'node_modules/'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'prettier'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: false,
          printWidth: 120,
          parser: 'babel-ts',
          endOfLine: 'auto',
        },
      ],
      // Customize your rules here
      'react/prop-types': process.env.FAIL_LINT ? 2 : 0,
      'react/jsx-uses-vars': 'warn',
    },
  };
  

  ignorePatterns: ['build/', 'dist/', 'node_modules/'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 120,
        parser: 'babel-ts',
      },
    ],
    // Customize your rules here
    'react/prop-types': process.env.FAIL_LINT ? 2 : 0,
    'react/jsx-uses-vars': 'warn',
  },
};
 c38cdd2c54042d5ecfd6c56575d2af49728bea8c
