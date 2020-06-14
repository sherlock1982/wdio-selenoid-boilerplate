module.exports = {
    globals: {
        browser: false,
        $: false,
        $$: false
    },
    ignorePatterns: [
        '*.js'
    ],
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    rules: {
        'no-trailing-spaces': 0,
        'max-len': 0,
        'no-multiple-empty-lines': 0,
        'no-console': 0,
        'linebreak-style': 0,
        indent: ['warn', 4],
    },
    plugins: ['@typescript-eslint'],
};
