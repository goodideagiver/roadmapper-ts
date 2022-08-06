import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	test('is visible in DOM', () => {
		const { getByTestId } = render(<App />);
		const app = getByTestId('app');
		expect(app).toBeInTheDocument();
	});
});
