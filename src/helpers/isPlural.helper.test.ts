import { isPlural } from './isPlural.helper';

describe('Function: isPlural', () => {
	test('should return s if number is greater than 1', () => {
		expect(isPlural(2)).toBe('s');
	});

	test('should return empty string if number is 1', () => {
		expect(isPlural(1)).toBe('');
	});

	test('should return empty string if number is -10', () => {
		expect(isPlural(-10)).toBe('');
	});
});
