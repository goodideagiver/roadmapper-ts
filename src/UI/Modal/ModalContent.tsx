import * as classes from './ModalContent.module.css';
import { IoMdClose } from 'react-icons/io';

type ModalContentProps = {
	children: React.ReactNode;
	title: string;
	onClose: () => void;
};

export const ModalContent = ({
	children,
	title,
	onClose,
}: ModalContentProps) => {
	return (
		<div className={classes.root}>
			<header className={classes.header}>
				<p className={classes.title}>{title}</p>
				<button
					aria-label='Close'
					className={classes.closeButton}
					onClick={onClose}
				>
					<IoMdClose />
				</button>
			</header>
			<main className={classes.content}>{children}</main>
		</div>
	);
};
