/**
 * Type-safe path constants for imports
 * Matches tsconfig.json path aliases
 */
export const PATHS = {
  assets: '@assets',
  components: '@components',
  features: '@features',
  types: '@types',
  utils: '@utils',
  views: '@views',
  configs: '@configs',
} as const;

export type PathAlias = keyof typeof PATHS;
