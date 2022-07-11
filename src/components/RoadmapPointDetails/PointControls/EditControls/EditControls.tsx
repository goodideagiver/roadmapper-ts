import { useState } from 'react';
import { isPlural } from '../../../../helpers/isPlural.helper';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { roadmapMidpoint } from '../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../store/useRoadmap';
import { Button } from '../../../../UI/Button/Button';
import { ConfirmModal } from '../../../../UI/ConfirmModal/ConfirmModal';
import { ModalWithInputs } from '../../../../UI/ModalWithInputs/ModalWithInputs';
import { AddPointModal } from '../../../AddPointModal/AddPointModal';
import { roadmapDataPoint } from '../../../Roadmap/Roadmap.types';
import classes from './EditControls.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
};

export const EditControls = ({ roadmapPoint }: Props) => {
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

	const [newTitle, setNewTitle] = useState('');
	const [newDays, setnewDays] = useState(0);

	const handleSetNewDays = (days: string) => {
		const newDays = parseInt(days);

		if (isNaN(newDays)) {
			return;
		}
		setnewDays(newDays);
	};

	const validateNewTitle = (value: string) =>
		!!value && value.trim().length > 0;

	const midpointsCount = midpoints?.length;

	const toggleFinishedHandler = () => {
		updateRoadmapPoint({ ...roadmapPoint, finished: !finished });
	};

	return (
		<div className={classes.root}>
			<div className={classes.order}>
				<div className={classes.info}>
					<p>Title: {title}</p>
					<p>Time: {daysToYrsMthWeekDayString(daysToComplete)}</p>
				</div>
				<Button onClick={() => setEditNameAndTitleModalVisible(true)}>
					Edit name and time
				</Button>
				<ModalWithInputs
					inputs={[
						{
							label: 'New title',
							value: newTitle,
							errorMessage: 'Title is required',
							setState: setNewTitle,
							validator: validateNewTitle,
						},
						{
							label: 'New days to complete',
							value: newDays,
							errorMessage: 'Days is a required field',
							setState: handleSetNewDays,
							validator: (value: string) => +value >= 0,
						},
					]}
					visible={editNameAndTitleModalVisible}
					modalTitle={`Edit ${roadmapPoint.title} time and title`}
					onClose={() => setEditNameAndTitleModalVisible(false)}
					onConfirm={() => setEditNameAndTitleModalVisible(false)}
				/>
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
				{!midpoints || midpoints.length === 0 ? <p>0 midpoints</p> : null}
				{midpoints && <div>Midpoints: {midpoints.length}</div>}
				<AddPointModal
					modalTitle='Add midpoint'
					visible={midpointModalVisible}
					onClose={handleToggleMidpointModal}
					onConfirmPoint={addMidpoint}
					techForSuggestions={roadmapPoint.title}
				/>
				<Button onClick={handleToggleMidpointModal} variant='success'>
					Add midpoint
				</Button>
			</div>
			<Button onClick={() => setDeleteModalVisible(true)} variant='danger'>
				Delete roadmap point
			</Button>
			<ConfirmModal
				onConfirm={() => setDeleteModalVisible(false)}
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
