import { FiShare } from 'react-icons/fi';
import { parseRoadmapToURLString } from '../../helpers/parseRoadmapToURLString.helper';
import { roadmapArray } from '../../store/roadmap-slice';
import { Button } from '../../UI/Button/Button';
import * as classes from './ShareRoadmap.module.css';

import 'animate.css';

import { Store } from 'react-notifications-component';

type Props = {
	mainRoadmapPoints: roadmapArray;
};

export const ShareRoadmap = ({ mainRoadmapPoints }: Props) => {
	const shareHandler = () => {
		const shareLink = parseRoadmapToURLString(mainRoadmapPoints);

		try {
			navigator.clipboard.writeText(shareLink);
			Store.addNotification({
				title: 'Success',
				message: 'Link copied to clipboard',
				type: 'success',
				insert: 'top',
				container: 'top-left',
				animationIn: ['animate__animated', 'animate__bounceIn'],
				animationOut: ['animate__animated', 'animate__fadeOut'],
				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
		} catch (error) {
			Store.addNotification({
				title: 'There was an error',
				message:
					'It seems like your browser does not support clipboard functionality',
				type: 'danger',
				insert: 'top',
				container: 'top-left',
				animationIn: ['animate__animated', 'animate__fadeIn'],
				animationOut: ['animate__animated', 'animate__fadeOut'],
				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
		}
	};

	return (
		<Button className={classes.button} onClick={shareHandler}>
			<FiShare className={classes.icon} />
			<span>Share roadmap</span>
		</Button>
	);
};
