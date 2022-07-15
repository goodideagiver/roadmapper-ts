import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

import * as classes from './ConfirmModal.module.css';
import { Button as ButtonType, Props } from './ConfirmModal.types';

const defaultConfirmButton: ButtonType = {
	text: 'Yes',
	type: 'danger',
};

const defaultCancelButton: ButtonType = {
	text: 'No',
};

export const ConfirmModal = ({
	onCancel,
	onConfirm,
	title,
	message,
	cancelButton = defaultCancelButton,
	confifmButton = defaultConfirmButton,
	buttonsSize = 'md',
	visible,
}: Props) => {
	const cancelHandler = () => {
		onCancel();
	};

	const confirmHandler = () => {
		onConfirm();
	};

	return (
		<Modal visible={visible} title={title} onClose={cancelHandler}>
			<p className={classes.message}>{message}</p>
			<div className={classes.actions}>
				<Button
					size={buttonsSize}
					onClick={cancelHandler}
					variant={cancelButton.type}
				>
					{cancelButton.text}
				</Button>
				<Button
					size={buttonsSize}
					onClick={confirmHandler}
					variant={confifmButton.type}
				>
					{confifmButton.text}
				</Button>
			</div>
		</Modal>
	);
};
