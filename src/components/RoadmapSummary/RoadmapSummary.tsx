import { daysToYrsMthWeekDayString } from '../../helpers/timeDiff.helper';
import { useRoadmap } from '../../store/roadmap-slice';

export const RoadmapSummary = () => {
	const { mainRoadmapPoints } = useRoadmap();

	const days = mainRoadmapPoints.filter((point) => point.daysToComplete);
	console.log(days);

	const totalDays = days.reduce((acc, curr) => acc + curr.daysToComplete, 0);

	return <div>{totalDays}</div>;
};
