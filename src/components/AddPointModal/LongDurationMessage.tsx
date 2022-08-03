import { useEffect, useRef } from 'react';
import * as classes from './LongDurationMessage.module.css';

type Props = {
	message: string;
};

export const LongDurationMessage = ({ message }: Props) => {
	const messageRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (!messageRef.current) return;

		messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
	}, []);

	return (
		<p ref={messageRef} className={classes.message}>
			<span className={classes.emoji}>🧓</span>
			<span className={classes.text}>{message}</span>
		</p>
	);
};
