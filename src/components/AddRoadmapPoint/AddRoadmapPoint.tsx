import { useState } from 'react';
import { AddPointModal } from '../AddPointModal/AddPointModal';

import { Button } from '../../UI/Button/Button';

import * as classes from './AddRoadmapPoint.module.css';
import { useRoadmap } from '../../store/useRoadmap';
import { FiPlus } from 'react-icons/fi';

export const AddRoadmapPoint = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const { addRoadmapPoint } = useRoadmap();

	const handleToggleModal = () => setModalVisible(!modalVisible);

	return (
		<>
			<Button className={classes.button} onClick={handleToggleModal}>
				<FiPlus className={classes.icon} /> <span>Add roadmap point</span>
			</Button>
			<AddPointModal
				variant='addMainPoint'
				onConfirmPoint={addRoadmapPoint}
				modalTitle='Add roadmap point'
				suggestions={[
					'HTML',
					'CSS',
					'JavaScript',
					'TypeScript',
					'React',
					'Next.js',
					'Svelte',
				]}
				onClose={handleToggleModal}
				initialDays={0}
				initialTitle=''
				visible={modalVisible}
			/>
		</>
	);
};
