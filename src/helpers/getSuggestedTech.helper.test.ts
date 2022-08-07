import { getSuggestedTech } from './getSuggestedTech.helper';

describe('getSuggestedTech helper function', () => {
	test('Should return falsy if technology is not on the list', () => {
		expect(getSuggestedTech('HTML2qgb242h')).toBeFalsy();
	});

	test('Should return array if technology is on the list', () => {
		const returnedArray = getSuggestedTech('HTML');

		expect(returnedArray && returnedArray.length > 0).toBeTruthy();
		expect(returnedArray).toBeInstanceOf(Array);
	});
});
