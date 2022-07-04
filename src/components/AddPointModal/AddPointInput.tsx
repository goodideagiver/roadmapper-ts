import { useState } from 'react';
import { uuid } from 'uuidv4';
import { SuggestedPoint } from './SuggestedPoint';
import * as classes from './AddPointInput.module.css';

export type Suggestion = string | number;

type AddPointInputProps = {
	suggestedPoints?: Suggestion[];
	label: string;
	value: string;
};

export const AddPointInput = ({
	suggestedPoints,
	label,
	value = '',
}: AddPointInputProps) => {
	const inputId = uuid();

	const [inputValue, setInputValue] = useState(value);

	const pickSuggestionHandler = (label: Suggestion) => {
		setInputValue(label.toString());
	};

	return (
		<div className={classes.root}>
			<div className={classes.input}>
				<label htmlFor={inputId}>{label}</label>
				<input
					className={classes.field}
					type='text'
					id={inputId}
					value={inputValue}
				/>
			</div>
			{suggestedPoints && (
				<>
					<p>Suggestions:</p>
					<div className={classes.suggestions}>
						{suggestedPoints &&
							suggestedPoints.map((point) => (
								<SuggestedPoint
									onChoose={pickSuggestionHandler}
									label={point}
								/>
							))}
					</div>{' '}
				</>
			)}
		</div>
	);
};
