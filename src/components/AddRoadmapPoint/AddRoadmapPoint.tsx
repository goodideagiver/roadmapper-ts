import { useState } from 'react';
import { AddPointModal } from '../AddPointModal/AddPointModal';

import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from '../../UI/Button/Button';

import * as classes from './AddRoadmapPoint.module.css';
import { useRoadmap } from '../../store/useRoadmap';

export const AddRoadmapPoint = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const { addRoadmapPoint } = useRoadmap();

	const handleToggleModal = () => setModalVisible(!modalVisible);

	return (
		<>
			<Button className={classes.button} onClick={handleToggleModal}>
				<AiOutlinePlus className={classes.icon} />{' '}
				<span>Add main roadmap point</span>
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
