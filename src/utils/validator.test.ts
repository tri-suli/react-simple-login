import { isEmail, isEmpty } from './validator';

describe('isEmail', () => {
  it('should return true for a valid email', () => {
    expect(isEmail('example@example.com')).toBe(true);
    expect(isEmail('foo.bar@baz.qux')).toBe(true);
    expect(isEmail('john.doe@company.co.uk')).toBe(true);
    expect(isEmail('123@numbers.com')).toBe(true);
  });

  it('should return false for an invalid email', () => {
    expect(isEmail('wrongexample.com')).toBe(false);
    expect(isEmail('missing@sign')).toBe(false);
    expect(isEmail('no.domain@')).toBe(false);
    expect(isEmail('@nodomain')).toBe(false);
    expect(isEmail('spaces are@not.allowed')).toBe(false);
    expect(isEmail('nor#are#other#chars')).toBe(false);
  });
});

describe('isEmpty', () => {
  it('should return true for an empty string or array', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
  });

  it('should return false for a non-empty string or array', () => {
    expect(isEmpty('non-empty string')).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });
});