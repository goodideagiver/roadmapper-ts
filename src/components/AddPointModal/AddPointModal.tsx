import { useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';
import { AddPointInput } from './AddPointInput';
import { PointTimeInput } from './PointTimeInput';

import * as classes from './AddPointModal.module.css';

type AddPointModalProps = {
	visible: boolean;
	onClose: () => void;
};

export const AddPointModal = ({ visible, onClose }: AddPointModalProps) => {
	const [days, setDays] = useState(0);
	const [title, setTitle] = useState('');
	const [error, setError] = useState('');

	const confirmPointHandler = () => {
		if (title.trim().length === 0) {
			setError('title is a required field');
			return;
		}

		if (days < 1) {
			setError('days is a required field');
			return;
		}

		if (title.length > 0 && days > 0) {
			setError('');
			console.log(days, title);
			setDays(0);
			setTitle('');
			onClose();
		}
		//add point logic
	};

	const handleSetDays = (daysAmount: number) => {
		setDays((oldDaysValue) => {
			if (oldDaysValue + daysAmount < 0) {
				return 0;
			}
			return oldDaysValue + daysAmount;
		});
	};

	const handleInputTitle = (title: string) => {
		setTitle(title);
	};

	const handleResetDays = () => {
		setDays(0);
	};

	return (
		<Modal onClose={onClose} visible={visible} title='Add roadmap point'>
			<AddPointInput
				label='Roadmap point title'
				value={title}
				suggestedPoints={['JS', 'CSS', 'HTML', 'React', 'Redux', 'TypeScript']}
				onInput={handleInputTitle}
			/>
			<PointTimeInput
				onReset={handleResetDays}
				daysValue={days}
				onChangeDays={handleSetDays}
			/>
			<Button
				onClick={confirmPointHandler}
				variant='success'
				className={classes.confirmButton}
			>
				Confirm roadmap point
			</Button>
			{error && (
				<div className={classes.error}>Can&apos;t confirm, because {error}</div>
			)}
		</Modal>
	);
};
