// module.exports = {
//   extends: 'google',
//   quotes: [2, 'single'],
//   globals: {
//     SwaggerEditor: false
//   },
//   env: {
//     browser: true
//   },
//   rules:{
//     "linebreak-style": 0
//   }
// };

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
/*eslint linebreak-style: ["error", "windows"]*/