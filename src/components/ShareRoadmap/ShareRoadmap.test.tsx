import { render, screen } from '@testing-library/react';
import { ShareRoadmap } from './ShareRoadmap';
import '@testing-library/jest-dom';

jest.mock('uuid', () => Math.random().toString());

describe('ShareRoadmap component', () => {
	test('Share button is visible', () => {
		render(
			<ShareRoadmap
				mainRoadmapPoints={[
					{
						id: '1',
						title: 'title',
						finished: false,
						daysToComplete: 1,
					},
				]}
			/>
		);

		expect(screen.getByText('Share')).toBeInTheDocument();
	});
});
