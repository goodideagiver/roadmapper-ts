import { Modal } from '../../UI/Modal/Modal';
import { AddPointInput } from './AddPointInput';

type AddPointModalProps = {
	visible: boolean;
	onClose: () => void;
};

export const AddPointModal = ({ visible, onClose }: AddPointModalProps) => {
	return (
		<Modal onClose={onClose} visible={visible} title='Add roadmap point'>
			<AddPointInput
				label='Roadmap point title'
				value=''
				suggestedPoints={['JS', 'CSS', 'HTML', 'React', 'Redux', 'TypeScript']}
			/>
			<AddPointInput
				label='How much time to complete?'
				value=''
				suggestedPoints={['1 day', '1 month', '1 year']}
			/>
		</Modal>
	);
};
