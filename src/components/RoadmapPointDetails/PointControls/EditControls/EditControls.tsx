import { roadmapMidpoint } from '../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../store/useRoadmap';
import { roadmapDataPoint } from '../../../Roadmap/Roadmap.types';
import { AddMidpointControls } from './components/AddMidpointControls/AddMidpointControls';
import { CompletionToggle } from './components/CompletionToggle/CompletionToggle';
import { DeleteRoadmapPoint } from './components/DeleteRoadmapPoint/DeleteRoadmapPoint';
import { MultiMidpointControls } from './components/MultiMidpointControls/MultiMidpointControls';
import { OrderEdit } from './components/OrderEdit/OrderEdit';
import { TitleAndDaysEdit } from './components/TitleAndDaysEdit/TitleAndDaysEdit';
import * as classes from './EditControls.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
	onDelete: () => void;
};

export const EditControls = ({ onDelete, roadmapPoint }: Props) => {
	const { id } = roadmapPoint;

	const { mainRoadmapPoints } = useRoadmap();

	const hasMidpoints =
		roadmapPoint.midpoints && roadmapPoint.midpoints.length > 0;

	return (
		<div className={classes.root}>
			<TitleAndDaysEdit roadmapPoint={roadmapPoint} />
			<CompletionToggle roadmapPoint={roadmapPoint} />
			{mainRoadmapPoints.length > 1 && <OrderEdit id={id} />}
			<AddMidpointControls roadmapPoint={roadmapPoint} />
			{hasMidpoints && (
				<MultiMidpointControls
					mainPointId={id}
					mainPointFinished={roadmapPoint.finished}
					midpoints={roadmapPoint.midpoints as roadmapMidpoint[]}
				/>
			)}
			<DeleteRoadmapPoint roadmapPoint={roadmapPoint} onDelete={onDelete} />
		</div>
	);
};
