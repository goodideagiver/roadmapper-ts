import classes from './ModalContent.module.css';

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
				<button className={classes.closeButton} onClick={onClose}>
					Close modal
				</button>
			</header>
			<main className={classes.content}>{children}</main>
		</div>
	);
};
