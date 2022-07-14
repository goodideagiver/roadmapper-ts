import * as classes from './Button.module.css';

type ButtonVariants =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info';

type WidthVariants = 'full' | 'fit';

type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
	onClick: () => void;
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	variant?: ButtonVariants;
	roundness?: number;
	disabled?: boolean;
	size?: ButtonSizes;
	width?: WidthVariants;
};

export const Button = ({
	variant,
	className,
	children,
	size = 'md',
	width,
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

	if (width === 'full') {
		buttonClasses += ` ${classes.full}`;
	}

	if (width === 'fit') {
		buttonClasses += ` ${classes.fit}`;
	}

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};
