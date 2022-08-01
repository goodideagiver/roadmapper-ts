import { useRoadmap } from '../../store/useRoadmap';
import { AddRoadmapPoint } from '../AddRoadmapPoint/AddRoadmapPoint';
import { ShareRoadmap } from '../ShareRoadmap/ShareRoadmap';
import { DeleteRoadmapButton } from './DeleteRoadmapButton/DeleteRoadmapButton';
import * as classes from './MainControls.module.css';

export const MainControls = () => {
	const { mainRoadmapPoints } = useRoadmap();

	return (
		<div className={classes.root}>
			<AddRoadmapPoint />
			{mainRoadmapPoints.length > 0 && (
				<>
					<ShareRoadmap mainRoadmapPoints={mainRoadmapPoints} />
					<DeleteRoadmapButton />
				</>
			)}
		</div>
	);
};
