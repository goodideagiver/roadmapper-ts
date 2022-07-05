import * as classes from './InputWithLabel.module.css';

type InputWithLabelProps = {
	inputId: string;
	inputValue: string | number;
	label: string;
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	hasError?: boolean;
};

export const InputWithLabel = ({
	label,
	inputId,
	inputValue,
	className,
	onChange,
	hasError,
}: InputWithLabelProps) => (
	<div className={`${classes.input} ${className ? className : ''} `}>
		<label htmlFor={inputId}>{label}</label>
		<input
			className={`${classes.field} ${hasError ? classes.error : ''}`}
			type='text'
			id={inputId}
			value={inputValue}
			onChange={onChange}
		/>
	</div>
);
