import { CSSTransition } from 'react-transition-group';
import { Backdrop } from '../Backdrop/Backdrop';
import { ModalContent } from './ModalContent';
import ReactDOM from 'react-dom';
import * as ModalAnimation from './ModalAnimation.module.css';
import * as BackdropAnimation from './BackdropAnimation.module.css';

type ModalProps = {
	visible: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	className?: string;
	onExited?: () => void;
	header?: React.ReactNode;
};

export const Modal = ({
	title,
	children,
	visible,
	onClose,
	className,
	onExited,
	header,
}: ModalProps) => {
	const overlayRoot = document.getElementById('overlay-root');

	if (!overlayRoot) {
		throw new Error('No overlay root element found');
	}

	return ReactDOM.createPortal(
		<>
			<CSSTransition
				classNames={BackdropAnimation}
				in={visible}
				mountOnEnter
				unmountOnExit
				timeout={300}
			>
				<Backdrop onClose={onClose} />
			</CSSTransition>
			<CSSTransition
				onExited={onExited}
				classNames={ModalAnimation}
				in={visible}
				mountOnEnter
				unmountOnExit
				timeout={300}
			>
				<ModalContent
					header={header}
					className={className}
					title={title}
					onClose={onClose}
				>
					{children}
				</ModalContent>
			</CSSTransition>
		</>,
		overlayRoot
	);
};
