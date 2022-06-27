type RoadmapMainPointProps = {
	title: string;
	dateStarted: Date;
	dateFinished: Date;
	isFinished: boolean;
};

export const RoadmapMainPoint = ({
	title,
	dateStarted,
	dateFinished,
	isFinished,
}: RoadmapMainPointProps) => {
	return (
		<div>
			<div>{title}</div>
			<div>{dateStarted.toLocaleDateString()}</div>
			<div>{dateFinished.toLocaleDateString()}</div>
			<div>{isFinished ? 'Zakończono' : 'Nie zakończono'}</div>
		</div>
	);
};
