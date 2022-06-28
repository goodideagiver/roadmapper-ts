type roadmapMidpoint = {
	finished: boolean;
	title: string;
	date: Date;
};

type roadmapDataPoint = {
	finished: boolean;
	title: string;
	date: Date;
	midpoints: roadmapMidpoint[];
};

export type roadmapArray = Array<roadmapDataPoint>;
