export type roadmapMidpoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
};

export type roadmapDataPoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
	midpoints?: roadmapMidpoint[];
	onChoose: () => void;
	id: string;
};

export type roadmapArray = Array<roadmapDataPoint>;
