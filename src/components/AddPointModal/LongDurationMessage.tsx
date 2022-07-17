import * as classes from './LongDurationMessage.module.css';

type Props = {
	message: string;
};

export const LongDurationMessage = ({ message }: Props) => {
	return (
		<p className={classes.message}>
			<span className={classes.emoji}>🧓</span>
			<span className={classes.text}>{message}</span>
		</p>
	);
};
