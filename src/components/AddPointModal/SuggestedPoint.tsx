import { Suggestion } from './AddPointInput';

import * as classes from './SuggestedPoint.module.css';

type SuggestedPointProps = {
	label: Suggestion;
	onChoose: (label: Suggestion) => void;
};

export const SuggestedPoint = ({ label, onChoose }: SuggestedPointProps) => {
	const buttonClickHandler = () => {
		onChoose(label);
	};

	return (
		<button className={classes.suggestion} onClick={buttonClickHandler}>
			{label}
		</button>
	);
};
