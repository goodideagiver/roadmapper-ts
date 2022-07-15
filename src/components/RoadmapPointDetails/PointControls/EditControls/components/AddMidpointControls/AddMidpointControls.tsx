import { useState } from 'react';
import {
	roadmapDataPoint,
	roadmapMidpoint,
} from '../../../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../../../store/useRoadmap';
import { Button } from '../../../../../../UI/Button/Button';
import { AddPointModal } from '../../../../../AddPointModal/AddPointModal';
import { EditControlWrapper } from '../../EditControlWrapper';

type Props = {
	roadmapPoint: roadmapDataPoint;
};
export const AddMidpointControls = ({ roadmapPoint }: Props) => {
	const { id, midpoints, title } = roadmapPoint;

	const [midpointModalVisible, setMidpointModalVisible] = useState(false);

	const { addMidpointById } = useRoadmap();

	const handleToggleMidpointModal = () => {
		setMidpointModalVisible(!midpointModalVisible);
	};

	const addMidpoint = (midpoint: roadmapMidpoint) => {
		addMidpointById(id, midpoint);
	};

	return (
		<EditControlWrapper>
			{midpoints && !!midpoints.length && (
				<div>Midpoints: {midpoints.length || 0}</div>
			)}
			<AddPointModal
				modalTitle='Add midpoint'
				visible={midpointModalVisible}
				onClose={handleToggleMidpointModal}
				onConfirmPoint={addMidpoint}
				techForSuggestions={title}
				variant='addSubPoint'
			/>
			<Button onClick={handleToggleMidpointModal} variant='success'>
				Add midpoint
			</Button>
		</EditControlWrapper>
	);
};
