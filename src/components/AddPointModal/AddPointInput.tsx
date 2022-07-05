import { useState } from 'react';
import { uuid } from 'uuidv4';
import { SuggestedPoint } from './SuggestedPoint';
import * as classes from './AddPointInput.module.css';
import { InputWithLabel } from '../../UI/InputWithLabel/InputWithLabel';

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
			<InputWithLabel
				className={classes.inputHighlight}
				inputId={inputId}
				inputValue={inputValue}
				label={label}
			/>
			{suggestedPoints && (
				<>
					<p>Suggestions:</p>
					<div className={classes.suggestions}>
						{suggestedPoints &&
							suggestedPoints.map((point) => (
								<SuggestedPoint
									key={point}
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
