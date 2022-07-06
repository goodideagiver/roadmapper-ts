import { daysToYrsMthWeekDayString } from '../../helpers/timeDiff.helper';
import { useRoadmap } from '../../store/roadmap-slice';

export const RoadmapSummary = () => {
	const { roadmap } = useRoadmap();
	if (roadmap.roadmap.length > 1) {
		const daysSum = roadmap.roadmap.reduce((acc, curr) => {
			return acc.daysToComplete + curr.daysToComplete;
		});

		console.log(daysSum);
    return <p>Roadmap duration: {daysToYrsMthWeekDayString(daysSum)}</p>
	}

	return <div></div>;
};
