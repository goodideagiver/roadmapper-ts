import { roadmapDataPoint } from '../../Roadmap/Roadmap.types';
import { EditControls } from './EditControls/EditControls';
import classes from './PointControls.module.css';

//change and display order
//add midpoint to roadmap point
//delete midpoint from roadmap
//add point from roadmap
//mark as finished
type Props = {
	point: roadmapDataPoint;
};

export const PointControls = ({ point }: Props) => {
	return (
		<>
			<EditControls roadmapPoint={point} />
		</>
	);
};
