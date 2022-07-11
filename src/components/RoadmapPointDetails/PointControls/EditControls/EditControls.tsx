import { useState } from 'react';
import { isPlural } from '../../../../helpers/isPlural.helper';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { roadmapMidpoint, useRoadmap } from '../../../../store/roadmap-slice';
import { Button } from '../../../../UI/Button/Button';
import { ConfirmModal } from '../../../../UI/ConfirmModal/ConfirmModal';
import { AddPointModal } from '../../../AddPointModal/AddPointModal';
import { roadmapDataPoint } from '../../../Roadmap/Roadmap.types';
import classes from './EditControls.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
};

//mark as finished

export const EditControls = ({ roadmapPoint }: Props) => {
	const { id, finished, title, midpoints, daysToComplete } = roadmapPoint;
	const completion = !finished ? 'Not finished' : 'Finished';

	const { mainRoadmapPoints, addMidpointById } = useRoadmap();

	const orderInArray = mainRoadmapPoints.findIndex((el) => el.id === id);

	const [midpointModalVisible, setMidpointModalVisible] = useState(false);

	const handleToggleMidpointModal = () => {
		setMidpointModalVisible(!midpointModalVisible);
	};

	const addMidpoint = (midpoint: roadmapMidpoint) => {
		addMidpointById(id, midpoint);
	};

	const [deleteModalVisible, setDeleteModalVisible] = useState(false);

	const midpointsCount = midpoints?.length;

	return (
		<div className={classes.root}>
			<div className={classes.order}>
				<div className={classes.info}>
					<p>Title: {title}</p>
					<p>Time: {daysToYrsMthWeekDayString(daysToComplete)}</p>
				</div>
				<Button size='sm'>Edit name and time</Button>
			</div>
			<div className={classes.order}>
				<p className={classes.info}>{completion}</p>
				<Button>Mark as finished</Button>
			</div>
			<div className={classes.order}>
				<Button>Move up</Button>
				<p>Order: {orderInArray + 1}</p>
				<Button>Move Down</Button>
			</div>
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
