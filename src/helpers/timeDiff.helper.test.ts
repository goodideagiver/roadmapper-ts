import { daysToYrsMthWeekDayString } from './timeDiff.helper';

describe('daysToYrsMthWeekDayString function', () => {
	test('should return 1 day', () => {
		expect(daysToYrsMthWeekDayString(1)).toBe('1 day');
	});

	test('should return 2 days', () => {
		expect(daysToYrsMthWeekDayString(2)).toBe('2 days');
	});

	test('should return 1 week', () => {
		expect(daysToYrsMthWeekDayString(7)).toBe('1 week');
	});

	test('should return empty string', () => {
		expect(daysToYrsMthWeekDayString(0)).toBe('');
		expect(daysToYrsMthWeekDayString(-10)).toBe('');
	});
});
