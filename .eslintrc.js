module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-unused-vars': 'error',
        'no-undef': 'error',
        'no-extra-semi': 'error',
        'no-console': 'warn',
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    },
    ignorePatterns: ['dist/', '.eslintrc.js'],
};
