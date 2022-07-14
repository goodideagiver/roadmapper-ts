import { useState } from 'react';
import { daysToYrsMthWeekDayString } from '../../../../../../helpers/timeDiff.helper';
import { roadmapDataPoint } from '../../../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../../../store/useRoadmap';
import { Button } from '../../../../../../UI/Button/Button';
import { AddPointModal } from '../../../../../AddPointModal/AddPointModal';
import * as classes from './TitleAndDaysEdit.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
};
export const TitleAndDaysEdit = ({ roadmapPoint }: Props) => {
	const [editNameAndTitleModalVisible, setEditNameAndTitleModalVisible] =
		useState(false);

	const { updateRoadmapPoint } = useRoadmap();

	const { title, daysToComplete } = roadmapPoint;

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
		<>
			<div className={classes.info}>
				<p>Title: {title}</p>
				<p>Time: {daysToYrsMthWeekDayString(daysToComplete)}</p>
			</div>
			<Button onClick={() => setEditNameAndTitleModalVisible(true)}>
				Edit name and time
			</Button>
			<AddPointModal
				modalTitle='Edit point details'
				onClose={() => setEditNameAndTitleModalVisible(false)}
				visible={editNameAndTitleModalVisible}
				onConfirmPoint={handleModifyPointTitleAndDays}
				initialDays={daysToComplete}
				initialTitle={title}
				variant='edit'
			/>
		</>
	);
};
