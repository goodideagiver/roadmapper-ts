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
				<p>{title}</p>
				<button onClick={onClose}>Close modal</button>
			</header>
			<main>{children}</main>
		</div>
	);
};
