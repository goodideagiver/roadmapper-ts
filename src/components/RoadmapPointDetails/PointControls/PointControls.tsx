import { Button } from '../../../UI/Button/Button';
import { roadmapDataPoint } from '../../Roadmap/Roadmap.types';
import { EditControls } from './EditControls/EditControls';
import * as classes from './PointControls.module.css';

type Props = {
	point: roadmapDataPoint;
	onDelete: () => void;
	onClose: () => void;
};

export const PointControls = ({ point, onDelete, onClose }: Props) => {
	return (
		<div>
			<EditControls onDelete={onDelete} roadmapPoint={point} />
			<Button className={classes.button} onClick={onClose}>
				Close
			</Button>
		</div>
	);
};
