import * as classes from './Button.module.css';

type ButtonVariants =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info';

type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
	onClick: () => void;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	variant?: ButtonVariants;
	roundness?: number;
	disabled?: boolean;
	size?: ButtonSizes;
};

export const Button = ({
	variant,
	className,
	children,
	size = 'md',
	...props
}: ButtonProps) => {
	let buttonClasses = `${classes.button} ${variant ? classes[variant] : ''} ${
		className ? className : ''
	}`;

	if (size === 'sm') {
		buttonClasses += ` ${classes.sm}`;
	}
	if (size === 'lg') {
		buttonClasses += ` ${classes.lg}`;
	}
	if (size === 'md') {
		buttonClasses += ` ${classes.md}`;
	}

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};
