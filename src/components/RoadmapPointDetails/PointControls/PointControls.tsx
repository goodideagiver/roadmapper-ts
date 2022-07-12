import { roadmapDataPoint } from '../../Roadmap/Roadmap.types';
import { EditControls } from './EditControls/EditControls';
import * as classes from './PointControls.module.css';

//change and display order
//add midpoint to roadmap point
//delete midpoint from roadmap
//add point from roadmap
//mark as finished
type Props = {
	point: roadmapDataPoint;
	onDelete: () => void;
};

export const PointControls = ({ point, onDelete }: Props) => {
	return (
		<>
			<EditControls onDelete={onDelete} roadmapPoint={point} />
		</>
	);
};
