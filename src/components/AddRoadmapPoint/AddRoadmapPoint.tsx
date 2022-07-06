import { useState } from 'react';
import { AddPointModal } from '../AddPointModal/AddPointModal';

import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from '../../UI/Button/Button';

import * as classes from './AddRoadmapPoint.module.css';

export const AddRoadmapPoint = () => {
	const [modalVisible, setModalVisible] = useState(true);

	const handleToggleModal = () => setModalVisible(!modalVisible);

	return (
		<>
			<Button className={classes.button} onClick={handleToggleModal}>
				<AiOutlinePlus className={classes.icon} />{' '}
				<span>Add main roadmap point</span>
			</Button>
			<AddPointModal onClose={handleToggleModal} visible={modalVisible} />
		</>
	);
};
