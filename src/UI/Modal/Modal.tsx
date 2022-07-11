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
};

export const Modal = ({
	title,
	children,
	visible,
	onClose,
	className,
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
				classNames={ModalAnimation}
				in={visible}
				mountOnEnter
				unmountOnExit
				timeout={300}
			>
				<ModalContent className={className} title={title} onClose={onClose}>
					{children}
				</ModalContent>
			</CSSTransition>
		</>,
		overlayRoot
	);
};
