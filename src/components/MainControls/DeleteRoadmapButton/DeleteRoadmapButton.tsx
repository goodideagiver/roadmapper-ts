import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useRoadmap } from '../../../store/useRoadmap';
import { Button } from '../../../UI/Button/Button';
import { ConfirmModal } from '../../../UI/ConfirmModal/ConfirmModal';
import * as classes from './DeleteRoadmapButton.module.css';

type Props = {};

export const DeleteRoadmapButton = () => {
	const [confirmModalVisible, setConfirmModalVisible] = useState(false);

	const { setRoadmap } = useRoadmap();

	const deleteHandler = () => {
		setRoadmap([]);
		setConfirmModalVisible(false);
	};

	return (
		<>
			<Button
				className={classes.root}
				onClick={() => setConfirmModalVisible(true)}
				variant='danger'
			>
				<FiTrash fontSize='1.5rem' />
				<span>Delete roadmap</span>
			</Button>
			<ConfirmModal
				visible={confirmModalVisible}
				title='Roadmap delete'
				onCancel={() => setConfirmModalVisible(false)}
				message='Do you want to delete the roadmap? This action cannot be undone.'
				onConfirm={deleteHandler}
			/>
		</>
	);
};
