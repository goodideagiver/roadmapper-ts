import { useState } from 'react';
import { isPlural } from '../../../../helpers/isPlural.helper';
import { useRoadmap } from '../../../../store/useRoadmap';
import { Button } from '../../../../UI/Button/Button';
import { ConfirmModal } from '../../../../UI/ConfirmModal/ConfirmModal';
import { roadmapDataPoint } from '../../../Roadmap/Roadmap.types';
import { AddMidpointControls } from './components/AddMidpointControls/AddMidpointControls';
import { OrderEdit } from './components/OrderEdit/OrderEdit';
import { TitleAndDaysEdit } from './components/TitleAndDaysEdit/TitleAndDaysEdit';
import classes from './EditControls.module.css';
import { EditControlWrapper } from './EditControlWrapper';

type Props = {
	roadmapPoint: roadmapDataPoint;
	onDelete: () => void;
};

export const EditControls = ({ onDelete, roadmapPoint }: Props) => {
	const { id, finished, title, midpoints } = roadmapPoint;
	const completion = !finished ? 'Not finished' : 'Finished';

	const { mainRoadmapPoints, updateRoadmapPoint } = useRoadmap();

	const [deleteModalVisible, setDeleteModalVisible] = useState(false);

	const midpointsCount = midpoints?.length;

	const toggleFinishedHandler = () => {
		updateRoadmapPoint({ ...roadmapPoint, finished: !finished });
	};

	const confirmDeleteRoadmapPointHandler = () => {
		setDeleteModalVisible(false);
		onDelete();
	};

	return (
		<div className={classes.root}>
			<EditControlWrapper>
				<TitleAndDaysEdit roadmapPoint={roadmapPoint} />
			</EditControlWrapper>
			<EditControlWrapper className={`${finished ? classes.finished : ''}`}>
				<p className={classes.info}>{completion}</p>
				<Button onClick={() => toggleFinishedHandler()}>
					Mark as {!finished ? 'finished' : 'not finished'}
				</Button>
			</EditControlWrapper>
			{mainRoadmapPoints.length > 1 && (
				<EditControlWrapper>
					<OrderEdit id={id} />
				</EditControlWrapper>
			)}
			<EditControlWrapper>
				<AddMidpointControls roadmapPoint={roadmapPoint} />
			</EditControlWrapper>
			<Button onClick={() => setDeleteModalVisible(true)} variant='danger'>
				Delete roadmap point
			</Button>
			<ConfirmModal
				onConfirm={confirmDeleteRoadmapPointHandler}
				message={`Do you want to delete roadmap point named ${title}? ${
					midpointsCount
						? `You will also loose ${midpointsCount} midpoint${isPlural(
								midpointsCount
						  )}.`
						: ''
				}`}
				title='Delete roadmap point'
				onCancel={() => setDeleteModalVisible(false)}
				visible={deleteModalVisible}
			/>
		</div>
	);
};
