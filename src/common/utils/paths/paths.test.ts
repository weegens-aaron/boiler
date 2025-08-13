import { describe, it, expect } from 'vitest';

import { PATHS } from '.';
import type { PathAlias } from '.';

describe('paths', () => {
  it('exports PATHS constant with correct aliases', () => {
    expect(PATHS).toEqual({
      assets: '@assets',
      components: '@components',
      features: '@features',
      types: '@types',
      utils: '@utils',
      views: '@views',
      configs: '@configs',
    });
  });

  it('has correct path alias keys', () => {
    const keys = Object.keys(PATHS);
    expect(keys).toContain('assets');
    expect(keys).toContain('components');
    expect(keys).toContain('features');
    expect(keys).toContain('types');
    expect(keys).toContain('utils');
    expect(keys).toContain('views');
    expect(keys).toContain('configs');
  });

  it('PathAlias type matches PATHS keys', () => {
    const testAlias: PathAlias = 'assets';
    expect(PATHS[testAlias]).toBe('@assets');
  });
});
