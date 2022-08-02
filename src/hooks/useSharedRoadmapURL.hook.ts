import { useEffect, useState } from 'react';
import { parseUrlToRoadmapObject } from '../helpers/parseRoadmapToURLString.helper';
import { useRoadmap } from '../store/useRoadmap';

export const useSharedRoadmapURL = () => {
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [error, setError] = useState('');

	const { mainRoadmapPoints, setRoadmap } = useRoadmap();

	useEffect(() => {
		const pathname = window.location.hash;

		if (
			pathname.includes('#/share/') &&
			isFirstLoad &&
			mainRoadmapPoints.length === 0
		) {
			if (isFirstLoad) {
				setIsFirstLoad(false);
			}
			try {
				window.history.pushState(null, '', '/');
				const roadmapFromUrl = parseUrlToRoadmapObject(
					pathname.replace('#/share/', '')
				);
				setRoadmap(roadmapFromUrl);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				}
			}
		}

		if (isFirstLoad) {
			setIsFirstLoad(false);
		}
	}, []);

	const clearError = () => setError('');

	return { error, clearError };
};
