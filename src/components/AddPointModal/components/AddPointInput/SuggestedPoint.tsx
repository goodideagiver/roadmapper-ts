import { Button } from '../../../../UI/Button/Button';
import { Suggestion } from './AddPointInput';

type SuggestedPointProps = {
	label: Suggestion;
	onChoose: (label: Suggestion) => void;
};

export const SuggestedPoint = ({ label, onChoose }: SuggestedPointProps) => {
	const buttonClickHandler = () => {
		onChoose(label);
	};

	return (
		<Button size='sm' onClick={buttonClickHandler}>
			{label}
		</Button>
	);
};
