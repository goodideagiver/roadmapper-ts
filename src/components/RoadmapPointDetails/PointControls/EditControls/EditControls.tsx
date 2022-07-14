import { useState } from 'react';
import { isPlural } from '../../../../helpers/isPlural.helper';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { roadmapMidpoint } from '../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../store/useRoadmap';
import { Button } from '../../../../UI/Button/Button';
import { ConfirmModal } from '../../../../UI/ConfirmModal/ConfirmModal';
import { AddPointModal } from '../../../AddPointModal/AddPointModal';
import { roadmapDataPoint } from '../../../Roadmap/Roadmap.types';
import { TitleAndDaysEdit } from './components/TitleAndDaysEdit/TitleAndDaysEdit';
import classes from './EditControls.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
	onDelete: () => void;
};

export const EditControls = ({ onDelete, roadmapPoint }: Props) => {
	const { id, finished, title, midpoints, daysToComplete } = roadmapPoint;
	const completion = !finished ? 'Not finished' : 'Finished';

	const {
		mainRoadmapPoints,
		addMidpointById,
		moveRoadmapPointDown,
		moveRoadmapPointUp,
		updateRoadmapPoint,
	} = useRoadmap();

	const orderInArray = mainRoadmapPoints.findIndex((el) => el.id === id);

	const [midpointModalVisible, setMidpointModalVisible] = useState(false);

	const handleToggleMidpointModal = () => {
		setMidpointModalVisible(!midpointModalVisible);
	};

	const addMidpoint = (midpoint: roadmapMidpoint) => {
		addMidpointById(id, midpoint);
	};

	const [deleteModalVisible, setDeleteModalVisible] = useState(false);
	const [editNameAndTitleModalVisible, setEditNameAndTitleModalVisible] =
		useState(false);

	const midpointsCount = midpoints?.length;

	const toggleFinishedHandler = () => {
		updateRoadmapPoint({ ...roadmapPoint, finished: !finished });
	};

	const confirmDeleteRoadmapPointHandler = () => {
		setDeleteModalVisible(false);
		onDelete();
	};

	const handleModifyPointTitleAndDays = ({
		daysToComplete,
		title,
	}: {
		daysToComplete: number;
		title: string;
	}) => {
		updateRoadmapPoint({ ...roadmapPoint, daysToComplete, title });
		setEditNameAndTitleModalVisible(false);
	};

	return (
		<div className={classes.root}>
			<div className={classes.order}>
				<TitleAndDaysEdit roadmapPoint={roadmapPoint} />
			</div>
			<div className={`${classes.order} ${finished ? classes.finished : ''}`}>
				<p className={classes.info}>{completion}</p>
				<Button onClick={() => toggleFinishedHandler()}>
					Mark as {!finished ? 'finished' : 'not finished'}
				</Button>
			</div>
			{mainRoadmapPoints.length > 1 && (
				<div className={classes.order}>
					<Button
						disabled={orderInArray === 0}
						onClick={() => moveRoadmapPointDown(id)}
					>
						Move Down
					</Button>
					<p>Order: {orderInArray + 1}</p>
					<Button
						disabled={orderInArray === mainRoadmapPoints.length - 1}
						onClick={() => moveRoadmapPointUp(id)}
					>
						Move up
					</Button>
				</div>
			)}
			<div className={classes.order}>
				{midpoints && <div>Midpoints: {midpoints.length || 0}</div>}
				<AddPointModal
					modalTitle='Add midpoint'
					visible={midpointModalVisible}
					onClose={handleToggleMidpointModal}
					onConfirmPoint={addMidpoint}
					techForSuggestions={roadmapPoint.title}
					variant='addSubPoint'
				/>
				<Button onClick={handleToggleMidpointModal} variant='success'>
					Add midpoint
				</Button>
			</div>
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
