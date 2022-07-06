import * as classes from './ModalContent.module.css';
import { IoMdClose } from 'react-icons/io';
import { useKey } from '../../hooks/useKey.hook';

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
	useKey('Escape', onClose);
	return (
		<div className={classes.root}>
			<header className={classes.header}>
				<h2 className={classes.title}>{title}</h2>
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
