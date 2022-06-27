export interface CSSTransitionLibraryProps {
	children?: React.ReactNode;
	in: boolean;
	timeout?: number;
	classNames?:
		| string
		| {
				enter: string;
				enterActive: string;
				exit: string;
				exitActive: string;
		  };
	onEnter?: () => void;
	onEntering?: () => void;
	onEntered?: () => void;
	onExit?: () => void;
	onExiting?: () => void;
	onExited?: () => void;
	mountOnEnter: true | undefined;
	unmountOnExit: true | undefined;
}
