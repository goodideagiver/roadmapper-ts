import { FiShare } from 'react-icons/fi';
import { parseRoadmapToURLString } from '../../helpers/parseRoadmapToURLString.helper';
import { roadmapArray } from '../../store/roadmap-slice';
import { Button } from '../../UI/Button/Button';
import * as classes from './ShareRoadmap.module.css';

type Props = {
	mainRoadmapPoints: roadmapArray;
};

export const ShareRoadmap = ({ mainRoadmapPoints }: Props) => {
	const shareHandler = () => {
		parseRoadmapToURLString(mainRoadmapPoints);
	};

	return (
		<Button className={classes.button} onClick={shareHandler}>
			<FiShare className={classes.icon} />
			<span>Share roadmap</span>
		</Button>
	);
};
