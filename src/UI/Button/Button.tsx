import * as classes from './Button.module.css';

type ButtonVariants =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info';

type ButtonProps = {
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
	variant?: ButtonVariants;
	roundness?: number;
};

export const Button = ({
	variant,
	className,
	children,
	...props
}: ButtonProps) => {
	const buttonClasses = `${classes.button} ${variant ? classes[variant] : ''} ${
		className ? className : ''
	}`;

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};
