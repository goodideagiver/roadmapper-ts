import { Modal } from '../../UI/Modal/Modal';

type AddPointModalProps = {
	visible: boolean;
	onClose: () => void;
};

export const AddPointModal = ({ visible, onClose }: AddPointModalProps) => {
	return (
		<Modal onClose={onClose} visible={visible} title='Add roadmap point'>
			<p>siema</p>
		</Modal>
	);
};
