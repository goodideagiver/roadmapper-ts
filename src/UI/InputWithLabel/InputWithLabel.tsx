import * as classes from './InputWithLabel.module.css';

type InputWithLabelProps = {
	inputId: string;
	inputValue: string | number;
	label: string;
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWithLabel = ({
	label,
	inputId,
	inputValue,
	className,
	onChange,
}: InputWithLabelProps) => (
	<div className={`${classes.input} ${className ? className : ''}`}>
		<label htmlFor={inputId}>{label}</label>
		<input
			className={classes.field}
			type='text'
			id={inputId}
			value={inputValue}
			onChange={onChange}
		/>
	</div>
);
