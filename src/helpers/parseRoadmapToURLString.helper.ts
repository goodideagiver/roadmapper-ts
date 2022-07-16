import { useId } from 'react';
import {
	roadmapArray,
	roadmapDataPoint,
	roadmapMidpoint,
} from '../store/roadmap-slice';

export const parseRoadmapToURLString = (roadmap: roadmapArray) => {
	const simplerRoadmapArray = roadmap.map((item) => {
		let midpoints = [];

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

	console.log(encodeURIComponent(JSON.stringify(simplerRoadmapArray)));

	console.log(
		JSON.parse(
			decodeURIComponent(
				encodeURIComponent(JSON.stringify(simplerRoadmapArray))
			)
		)
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
						id: useId(),
						finished: false,
					};
				});
			}

			return {
				title: item.title,
				daysToComplete: item.daysToComplete,
				midpoints,
				id: useId(),
				finished: false,
			};
		}
	);

	return roadmap;
};
