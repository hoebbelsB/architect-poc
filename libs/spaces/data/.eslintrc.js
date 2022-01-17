const { dddPrivateRules } = require('../../../tools/eslint/ddd-private.rules');

module.exports = {
  extends: ['../../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  overrides: [
    { ...dddPrivateRules('spaces') },
    {
      files: ['*.ts'],
      extends: [
        'plugin:@nrwl/nx/angular',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'architectPoc',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'architect-poc',
            style: 'kebab-case',
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@nrwl/nx/angular-template'],
      rules: {},
    },
  ],
};