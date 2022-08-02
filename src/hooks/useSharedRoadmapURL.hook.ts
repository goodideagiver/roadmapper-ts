import { useEffect, useState } from 'react';
import { parseUrlToRoadmapObject } from '../helpers/parseRoadmapToURLString.helper';
import { useRoadmap } from '../store/useRoadmap';

export const useSharedRoadmapURL = () => {
	const [error, setError] = useState('');
	const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);

	const { mainRoadmapPoints, setRoadmap } = useRoadmap();

	useEffect(() => {
		const convertHashToObject = () => {
			const pathname = window.location.hash;
			if (pathname.includes('#/share/') && mainRoadmapPoints.length === 0) {
				try {
					removeHash();
					const roadmapFromUrl = parseUrlToRoadmapObject(
						pathname.replace('#/share/', '')
					);
					setRoadmap(roadmapFromUrl);
					setDisplaySuccessMessage(true);
				} catch (err) {
					if (err instanceof Error) {
						setError(err.message);
					}
				}
			}
		};

		convertHashToObject();

		window.addEventListener('hashchange', convertHashToObject);
		return () => {
			window.removeEventListener('hashchange', convertHashToObject);
		};
	}, []);

	const clearError = () => setError('');

	const clearMessage = () => setDisplaySuccessMessage(false);

	return { error, clearError, displaySuccessMessage, clearMessage };
};

function removeHash() {
	history.pushState(
		'',
		document.title,
		window.location.pathname + window.location.search
	);
}
