import { IoMdClose } from 'react-icons/io';
import * as classes from './ModalHeader.module.css';

type Props = {
	children: React.ReactNode;
	onClose: () => void;
};
export const ModalHeader = ({ children, onClose }: Props) => {
	return (
		<header className={classes.header}>
			<h2 className={classes.title}>{children}</h2>
			<button
				aria-label='Close'
				className={classes.closeButton}
				onClick={onClose}
			>
				<IoMdClose />
			</button>
		</header>
	);
};
