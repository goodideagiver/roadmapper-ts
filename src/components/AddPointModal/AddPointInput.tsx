import { uuid } from 'uuidv4';
import { SuggestedPoint } from './SuggestedPoint';
import * as classes from './AddPointInput.module.css';
import { InputWithLabel } from '../../UI/InputWithLabel/InputWithLabel';

export type Suggestion = string | number;

type AddPointInputProps = {
	suggestedPoints?: Suggestion[];
	label: string;
	value: string;
	onInput: (title: string) => void;
};

export const AddPointInput = ({
	suggestedPoints,
	label,
	value = '',
	onInput,
}: AddPointInputProps) => {
	const inputId = uuid();

	const pickSuggestionHandler = (label: Suggestion) => {
		onInput(label.toString());
	};

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event) {
			return;
		}
		const value =( event && event.target) && event.target.value;

		onInput(value);
	};

	return (
		<div className={classes.root}>
			<InputWithLabel
				className={classes.inputHighlight}
				inputId={inputId}
				inputValue={value}
				label={label}
				onChange={inputHandler}
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
