import * as classes from './ModalContent.module.css';
import { useKey } from '../../hooks/useKey.hook';
import { ModalHeader } from './ModalHeader';

type ModalContentProps = {
	children: React.ReactNode;
	title: string;
	onClose: () => void;
	className?: string;
	header?: React.ReactNode;
};

export const ModalContent = ({
	children,
	title,
	onClose,
	className,
	header,
}: ModalContentProps) => {
	useKey('Escape', onClose);

	const headerContent = header ? header : <>{title}</>;

	return (
		<div className={`${classes.root} ${className ? className : ''}`}>
			<ModalHeader onClose={onClose}>{headerContent}</ModalHeader>
			<main className={classes.content}>{children}</main>
		</div>
	);
};
