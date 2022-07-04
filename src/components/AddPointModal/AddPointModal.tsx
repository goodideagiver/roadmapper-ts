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

	const handleSetDays = (daysAmount: number) => {
		setDays((oldDaysValue) => {
			if (oldDaysValue + daysAmount < 0) {
				return 0;
			}
			return oldDaysValue + daysAmount;
		});
	};

	const handleResetDays = () => {
		setDays(0);
	};

	return (
		<Modal onClose={onClose} visible={visible} title='Add roadmap point'>
			<AddPointInput
				label='Roadmap point title'
				value=''
				suggestedPoints={['JS', 'CSS', 'HTML', 'React', 'Redux', 'TypeScript']}
			/>
			<PointTimeInput
				onReset={handleResetDays}
				daysValue={days}
				onChangeDays={handleSetDays}
			/>
			<Button variant='success' className={classes.confirmButton}>
				Confirm roadmap point
			</Button>
		</Modal>
	);
};
