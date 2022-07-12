import { roadmapDataPoint } from '../../Roadmap/Roadmap.types';
import { EditControls } from './EditControls/EditControls';
import * as classes from './PointControls.module.css';

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
