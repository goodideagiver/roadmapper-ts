import { Modal } from '../Modal/Modal';

type ModalInput = {
	label: string;
	validator: (value: string) => boolean;
	errorMessage: string;
};

type Props = {
	modalTitle: string;
	visible: boolean;
	onClose: () => void;
	onConfirm: () => void;
	inputs: ModalInput[];
};

export const ModalWithInputs = ({
	visible,
	modalTitle,
	onClose,
	onConfirm,
}: Props) => {
	return (
		<Modal title={modalTitle} onClose={onClose} visible={visible}>
			<div>Inputs</div>
			<div>Actions</div>
		</Modal>
	);
};
