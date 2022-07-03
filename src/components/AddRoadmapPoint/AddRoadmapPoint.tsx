import { useState } from 'react';
import { AddPointModal } from '../AddPointModal/AddPointModal';

export const AddRoadmapPoint = () => {
	const [modalVisible, setModalVisible] = useState(true);

	const handleToggleModal = () => setModalVisible(!modalVisible);

	return (
		<>
			<button onClick={handleToggleModal}>Add main roadmap point</button>
			<AddPointModal onClose={handleToggleModal} visible={modalVisible} />
		</>
	);
};
