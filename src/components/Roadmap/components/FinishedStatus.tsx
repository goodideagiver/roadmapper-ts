import * as classes from './RoadmapMainPoint.module.css';
import { TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';

type FinishedStatusProps = {
	finished: boolean;
};

export const FinishedStatus = ({ finished }: FinishedStatusProps) => {
	const unfinishedContent = (
		<>
			<TiHeartOutline />
			<p>Not finished</p>
		</>
	);
	const finishedContent = (
		<>
			<TiHeartFullOutline />
			<p>Finished</p>
		</>
	);

	return (
		<div className={classes.textAndIcon}>
			{finished ? finishedContent : unfinishedContent}
		</div>
	);
};
