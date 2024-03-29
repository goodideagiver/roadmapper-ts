/* eslint-disable react/display-name */
import { CSSTransition } from 'react-transition-group';

import * as classes from './InputErrorDisplay.module.css';

import * as animation from './Animation.module.css';
import { forwardRef } from 'react';

type Props = {
	hasError: boolean;
	errorMessage: string;
};

export const InputErrorDisplay = forwardRef<HTMLParagraphElement, Props>(
	({ hasError, errorMessage }, ref) => {
		const hasErrorContent = `Can't confirm, because ${errorMessage}`;
		const hasNoErrorContent = 'Ok';
		const displayClasses = `${classes.error} ${
			!errorMessage ? classes.noError : ''
		}`;

		return (
			<CSSTransition
				classNames={animation}
				in={hasError}
				mountOnEnter
				unmountOnExit
				timeout={{ appear: 0, enter: 2000, exit: 200 }}
			>
				<p className={displayClasses} ref={ref}>
					{errorMessage ? hasErrorContent : hasNoErrorContent}
				</p>
			</CSSTransition>
		);
	}
);
