import { useRoadmap } from '../../../../store/useRoadmap';
import { roadmapDataPoint } from '../../../Roadmap/Roadmap.types';
import { AddMidpointControls } from './components/AddMidpointControls/AddMidpointControls';
import { CompletionToggle } from './components/CompletionToggle/CompletionToggle';
import { DeleteRoadmapPoint } from './components/DeleteRoadmapPoint/DeleteRoadmapPoint';
import { OrderEdit } from './components/OrderEdit/OrderEdit';
import { TitleAndDaysEdit } from './components/TitleAndDaysEdit/TitleAndDaysEdit';
import classes from './EditControls.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
	onDelete: () => void;
};

export const EditControls = ({ onDelete, roadmapPoint }: Props) => {
	const { id } = roadmapPoint;

	const { mainRoadmapPoints } = useRoadmap();

	return (
		<div className={classes.root}>
			<TitleAndDaysEdit roadmapPoint={roadmapPoint} />
			<CompletionToggle roadmapPoint={roadmapPoint} />
			{mainRoadmapPoints.length > 1 && <OrderEdit id={id} />}
			<AddMidpointControls roadmapPoint={roadmapPoint} />
			<DeleteRoadmapPoint roadmapPoint={roadmapPoint} onDelete={onDelete} />
		</div>
	);
};
