export type roadmapMidpoint = {
	finished: boolean;
	title: string;
	days: number;
};

export type roadmapDataPoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
	midpoints?: roadmapMidpoint[];
};

export type roadmapArray = Array<roadmapDataPoint>;
