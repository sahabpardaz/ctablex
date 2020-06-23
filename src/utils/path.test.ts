import { path } from './path';

describe('path', () => {
  it('should return correct value', () => {
    const obj = { a: { b: { c: 4 } } };
    expect(path(['a', 'b'], obj)).toEqual({ c: 4 });
  });
  it('should return undefined for incorrect path', () => {
    const obj = { a: { b: { c: 4 } } };
    expect(path(['a', 'd', 'x'], obj)).toBeUndefined();
  });
});
