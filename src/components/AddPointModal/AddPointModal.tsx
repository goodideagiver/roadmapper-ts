import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';
import { AddPointInput } from './components/AddPointInput/AddPointInput';
import { PointTimeInput } from './PointTimeInput';

import * as classes from './AddPointModal.module.css';
import {
	AddRoadmapPoint,
	useAddPointModal,
} from './hooks/useAddPointModal.hook';
import { InputErrorDisplay } from './components/InputErrorDisplay/InputErrorDisplay';
import { getSuggestedTech } from '../../helpers/getSuggestedTech.helper';

type AddPointModalProps = {
	visible: boolean;
	onClose: () => void;
	modalTitle: string;
	suggestions?: string[];
	onConfirmPoint: AddRoadmapPoint;
	techForSuggestions?: string;
	initialTitle?: string;
	initialDays?: number;
};

export const AddPointModal = ({
	visible,
	onClose,
	suggestions,
	modalTitle,
	onConfirmPoint,
	techForSuggestions,
	initialTitle,
	initialDays,
}: AddPointModalProps) => {
	const {
		cancelHandler,
		titleErrorRef,
		error,
		title,
		handleInputTitle,
		timeErrorRef,
		handleResetDays,
		days,
		handleSetDays,
		confirmPointHandler,
	} = useAddPointModal(onClose, onConfirmPoint, initialTitle, initialDays);

	let suggestedTech;

	if (suggestions) {
		suggestedTech = suggestions;
	}
	if (!suggestions && techForSuggestions) {
		suggestedTech = getSuggestedTech(techForSuggestions);
	}

	return (
		<Modal onClose={cancelHandler} visible={visible} title={modalTitle}>
			<InputErrorDisplay
				hasError={!!error.titleError}
				errorMessage={error.titleError}
				ref={titleErrorRef}
			/>
			<AddPointInput
				label='Roadmap point title'
				value={title}
				suggestedPoints={suggestedTech}
				onInput={handleInputTitle}
				hasError={error.titleError.length > 0}
			/>
			<InputErrorDisplay
				hasError={!!error.timeError}
				errorMessage={error.timeError}
				ref={timeErrorRef}
			/>
			<PointTimeInput
				onReset={handleResetDays}
				daysValue={days}
				onChangeDays={handleSetDays}
			/>
			<Button
				onClick={confirmPointHandler}
				variant='success'
				className={classes.confirmButton}
				size='lg'
			>
				Confirm roadmap point
			</Button>
		</Modal>
	);
};
