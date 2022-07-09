import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';

import * as classes from './ConfirmModal.module.css';

type Button = {
	text?: string;
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
};

type Props = {
	onConfirm: () => void;
	onCancel: () => void;
	title: string;
	message: string;
	confifmButton?: Button;
	cancelButton?: Button;
	buttonsSize: 'sm' | 'md' | 'lg';
	visible: boolean;
};

const defaultConfirmButton: Button = {
	text: 'Yes',
};

const defaultCancelButton: Button = {
	text: 'No',
	type: 'danger',
};

export const ConfirmModal = ({
	onCancel,
	onConfirm,
	title,
	message,
	cancelButton = defaultCancelButton,
	confifmButton = defaultConfirmButton,
	buttonsSize,
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
			<p>{message}</p>
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
