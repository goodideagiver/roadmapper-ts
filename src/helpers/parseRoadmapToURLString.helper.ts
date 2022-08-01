import { v4 as uuid } from 'uuid';
import {
	roadmapArray,
	roadmapDataPoint,
	roadmapMidpoint,
} from '../store/roadmap-slice';

type SimpleMidpoint = { title: string; daysToComplete: number };

export const parseRoadmapToURLString = (roadmap: roadmapArray) => {
	const simplerRoadmapArray = roadmap.map((item) => {
		let midpoints: SimpleMidpoint[] = [];

		if (item.midpoints) {
			midpoints = item.midpoints.map((midpoint) => {
				return {
					title: midpoint.title,
					daysToComplete: midpoint.daysToComplete,
				};
			});
		}

		return {
			title: item.title,
			daysToComplete: item.daysToComplete,
			midpoints,
		};
	});

	return (
		window.origin +
		'/share/' +
		encodeURIComponent(JSON.stringify(simplerRoadmapArray))
	);
};

export const parseUrlToRoadmapObject = (url: string) => {
	const urlObject = JSON.parse(decodeURIComponent(url));

	const roadmap: roadmapDataPoint[] = urlObject.map(
		(item: roadmapDataPoint) => {
			let midpoints: roadmapMidpoint[] = [];

			if (item.midpoints) {
				midpoints = item.midpoints.map((midpoint: roadmapMidpoint) => {
					return {
						title: midpoint.title,
						daysToComplete: midpoint.daysToComplete,
						id: uuid(),
						finished: false,
					};
				});
			}

			return {
				title: item.title,
				daysToComplete: item.daysToComplete,
				midpoints,
				id: uuid(),
				finished: false,
			};
		}
	);

	roadmap.forEach((roadmapItem) => {
		const { daysToComplete, finished, id, midpoints } = roadmapItem;

		if (
			daysToComplete === undefined ||
			midpoints === undefined ||
			finished === undefined ||
			id === undefined
		) {
			throw new Error('Invalid roadmap item');
		}

		if (midpoints.length === 0) return;

		midpoints.forEach((midpoint) => {
			const { daysToComplete, finished, id } = midpoint;

			if (
				daysToComplete === undefined ||
				finished === undefined ||
				id === undefined
			) {
				console.log(midpoint);
				throw new Error('Invalid midpoint');
			}
		});
	});

	return roadmap;
};
