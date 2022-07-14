import { AiFillQuestionCircle } from 'react-icons/ai';
import { Modal } from '../Modal/Modal';

type Props = {
	title: string;
	visible: boolean;
	children: React.ReactNode;
	onClose: () => void;
};
export const ExplainModal = ({ children, title, visible, onClose }: Props) => {
	const explainHeader = (
		<>
			<AiFillQuestionCircle />
			{title}
		</>
	);

	return (
		<Modal
			visible={visible}
			onClose={onClose}
			title={title}
			header={explainHeader}
		>
			{children}
		</Modal>
	);
};
