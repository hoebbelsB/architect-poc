module.exports = {
  dddSharedStateRules,
  dddFeatureRules,
  dddUiRules,
};

function dddSharedStateRules(domain) {
  return {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {
      '@nrwl/nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [
            `@architect-poc/${domain}/data`,
            `@architect-poc/${domain}/domain`,
          ],
          depConstraints: [
            {
              sourceTag: 'domain:public',
              onlyDependOnLibsWithTags: ['domain:public'],
            },
            {
              sourceTag: 'type:shared-state',
              onlyDependOnLibsWithTags: [
                'type:domain',
                'type:data',
                'type:util',
              ],
            },
          ],
        },
      ],
    },
  };
}

function dddFeatureRules(domain) {
  return {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {
      '@nrwl/nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [
            `@architect-poc/${domain}/use-cases`,
            `@architect-poc/${domain}/domain`,
          ],
          depConstraints: [
            {
              sourceTag: 'domain:public',
              onlyDependOnLibsWithTags: ['domain:public'],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:use-cases',
                'type:domain',
                'type:data',
                'type:ui',
                'type:util',
              ],
            },
          ],
        },
      ],
    },
  };
}

function dddUiRules(domain) {
  return {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {
      '@nrwl/nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [`@architect-poc/${domain}/domain`],
          depConstraints: [
            {
              sourceTag: 'domain:public',
              onlyDependOnLibsWithTags: ['domain:public'],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:domain', 'type:ui', 'type:util'],
            },
          ],
        },
      ],
    },
  };
}
