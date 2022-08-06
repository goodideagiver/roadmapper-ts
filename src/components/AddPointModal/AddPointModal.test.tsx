import { render } from '@testing-library/react';
import { AddPointModal } from './AddPointModal';

describe('AddPointModal component', () => {
	test('Renders add point modal', () => {
		render(
			<AddPointModal
				modalTitle='Test'
				onClose={() => 0}
				onConfirmPoint={() => 0}
				visible={true}
			/>
		);
	});
});
