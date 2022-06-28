export type roadmapMidpoint = {
	finished: boolean;
	title: string;
	date: Date;
};

export type timeAmount =
	| {
			days: number;
	  }
	| {
			weeks: number;
	  }
	| {
			months: number;
	  }
	| {
			years: number;
	  }
	| 'unset';

export type roadmapDataPoint = {
	finished: boolean;
	title: string;
	timeToComplete: timeAmount;
	midpoints?: roadmapMidpoint[];
};

export type roadmapArray = Array<roadmapDataPoint>;
