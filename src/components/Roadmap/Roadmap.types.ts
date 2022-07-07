export type roadmapMidpoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
	id: string;
};

export type roadmapDataPoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
	midpoints?: roadmapMidpoint[];
	onChoose?: () => void;
	id: string;
};

export type roadmapArray = Array<roadmapDataPoint>;
