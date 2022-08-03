import { useEffect, useState } from 'react';
import { roadmapArray } from '../store/roadmap-slice';
import { useRoadmap } from '../store/useRoadmap';

const ROADMAP_KEY = 'roadmap';

const loadRoadmapFromLocalStorage = () => {
	const roadmap = localStorage.getItem(ROADMAP_KEY);
	if (roadmap) {
		const parsedRoadmap = JSON.parse(roadmap);
		if (!validateRoadmapObject(parsedRoadmap)) {
			throw new Error('Invalid roadmap object');
		}

		return JSON.parse(roadmap);
	}
	return null;
};

const validateRoadmapObject = (roadmap: roadmapArray) => {
	let roadmapValid = false;

	if (!roadmap) {
		return roadmapValid;
	}

	if (!Array.isArray(roadmap)) {
		return roadmapValid;
	}

	if (roadmap.length === 0) {
		return roadmapValid;
	}

	roadmap.forEach((roadmapItem) => {
		const { daysToComplete, finished, id, midpoints, title } = roadmapItem;

		if (
			daysToComplete === undefined ||
			finished === undefined ||
			id === undefined ||
			title === undefined
		) {
			throw new Error('Invalid roadmap item');
		}

		if (!midpoints || midpoints.length === 0) return;

		midpoints.forEach((midpoint) => {
			const { daysToComplete, finished, id, title } = midpoint;

			if (
				daysToComplete === undefined ||
				finished === undefined ||
				id === undefined ||
				title === undefined
			) {
				throw new Error('Invalid midpoint');
			}
		});
	});

	roadmapValid = true;

	return roadmapValid;
};

export const useRoadmapLocalStorage = () => {
	const [firstLoad, setFirstLoad] = useState(true);

	const { setRoadmap, mainRoadmapPoints } = useRoadmap();

	useEffect(() => {
		if (!firstLoad) return;

		if (!localStorage.getItem(ROADMAP_KEY)) return;

		try {
			setFirstLoad(false);
			const roadmap = loadRoadmapFromLocalStorage();
			if (roadmap) {
				setRoadmap(roadmap);
			}
		} catch (error) {
			console.error(error);
			localStorage.removeItem(ROADMAP_KEY);
		}
	}, []);

	useEffect(() => {
		if (!mainRoadmapPoints) return;

		localStorage.setItem(ROADMAP_KEY, JSON.stringify(mainRoadmapPoints));
	}, [mainRoadmapPoints]);
};
