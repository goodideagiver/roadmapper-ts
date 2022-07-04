import * as classes from './InputWithLabel.module.css'; 

type InputWithLabelProps = {
	inputId: string;
	inputValue: string;
	label: string;
};

export const InputWithLabel = ({
	label,
	inputId,
	inputValue,
}: InputWithLabelProps) => (
	<div className={classes.input}>
		<label htmlFor={inputId}>{label}</label>
		<input
			className={classes.field}
			type='text'
			id={inputId}
			value={inputValue}
		/>
	</div>
);
