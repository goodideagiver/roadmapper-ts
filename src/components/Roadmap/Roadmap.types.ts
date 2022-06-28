export type roadmapMidpoint = {
	finished: boolean;
	title: string;
	date: Date;
};

export type roadmapDataPoint = {
	finished: boolean;
	title: string;
	date: Date;
	dateFinished?: Date;
	midpoints?: roadmapMidpoint[];
};

export type roadmapArray = Array<roadmapDataPoint>;
