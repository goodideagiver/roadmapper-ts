import { daysToYrsMthWeekDayString } from '../../helpers/timeDiff.helper';
import { useRoadmap } from '../../store/useRoadmap';

export const RoadmapSummary = () => {
	const { mainRoadmapPoints } = useRoadmap();

	const days = mainRoadmapPoints.filter((point) => point.daysToComplete);

	const totalDays = days.reduce((acc, curr) => acc + curr.daysToComplete, 0);

	return <div>{daysToYrsMthWeekDayString(totalDays)}</div>;
};
