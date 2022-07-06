import { useEffect, useRef, useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';
import { AddPointInput } from './AddPointInput';
import { PointTimeInput } from './PointTimeInput';

import * as classes from './AddPointModal.module.css';
import { useKey } from '../../hooks/useKey.hook';

type AddPointModalProps = {
	visible: boolean;
	onClose: () => void;
};

type ModalError = {
	timeError: string;
	titleError: string;
};

export const AddPointModal = ({ visible, onClose }: AddPointModalProps) => {
	const [days, setDays] = useState(0);
	const [title, setTitle] = useState('');
	const [error, setError] = useState<ModalError>({
		timeError: '',
		titleError: '',
	});

	const titleErrorRef = useRef<HTMLDivElement>(null);
	const timeErrorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (error.titleError) {
			titleErrorRef.current?.scrollIntoView({ block: 'start' });
		}
	}, [error.titleError.length]);

	const cancelHandler = () => {
		onClose();
		setError({
			timeError: '',
			titleError: '',
		});
		setTitle('');
		setDays(0);
	};

	const confirmPointHandler = () => {
		if (error.titleError) {
			titleErrorRef.current?.scrollIntoView({ block: 'start' });
			return;
		}

		if (title.trim().length === 0) {
			setError((error) => {
				const newError = 'title is a required field';
				return { ...error, titleError: newError };
			});
		}

		if (error.timeError) {
			timeErrorRef.current?.scrollIntoView({ block: 'start' });
			return;
		}

		if (days < 1) {
			setError((error) => {
				const newError = 'days is a required field';
				return { ...error, timeError: newError };
			});
		}

		if (title.length > 0 && days > 0) {
			setError({ timeError: '', titleError: '' });
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
			setError((error) => {
				const newError = '';
				return { ...error, timeError: newError };
			});

			return oldDaysValue + daysAmount;
		});
	};

	const handleInputTitle = (title: string) => {
		setError((error) => {
			const newError = '';
			return { ...error, titleError: newError };
		});
		setTitle(title);
	};

	const handleResetDays = () => {
		setDays(0);
	};

	return (
		<Modal onClose={cancelHandler} visible={visible} title='Add roadmap point'>
			{error.titleError && (
				<div ref={titleErrorRef} className={classes.error}>
					Can&apos;t confirm, because {error.titleError}
				</div>
			)}
			<AddPointInput
				label='Roadmap point title'
				value={title}
				suggestedPoints={['JS', 'CSS', 'HTML', 'React', 'Redux', 'TypeScript']}
				onInput={handleInputTitle}
				hasError={error.titleError.length > 0}
			/>
			{error.timeError && (
				<div ref={timeErrorRef} className={classes.error}>
					Can&apos;t confirm, because {error.timeError}
				</div>
			)}
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
		</Modal>
	);
};
