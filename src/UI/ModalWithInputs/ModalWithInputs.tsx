import { ChangeEvent, useId, useState } from 'react';
import { InputErrorDisplay } from '../../components/AddPointModal/components/InputErrorDisplay/InputErrorDisplay';
import { InputWithLabel } from '../InputWithLabel/InputWithLabel';
import { Modal } from '../Modal/Modal';

import * as classes from './ModalWithInputs.module.css';

type ModalInput = {
	label: string;
	validator: (value: string) => boolean;
	errorMessage: string;
	setState: (value: string) => void;
	value: string | number;
};

type Props = {
	modalTitle: string;
	visible: boolean;
	onClose: () => void;
	onConfirm: () => void;
	inputs: ModalInput[];
};

const Input = ({
	errorMessage,
	label,
	setState,
	validator,
	value,
}: ModalInput) => {
	const [error, setError] = useState('');

	const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		setState(inputValue);
		if (!validator(inputValue)) {
			setError(errorMessage);
			return;
		}
		setError('');
	};

	return (
		<>
			<InputErrorDisplay hasError={!!error} errorMessage={error} />
			<InputWithLabel
				inputId={useId()}
				inputValue={value}
				label={label}
				onChange={inputChangeHandler}
				hasError={!!error}
			/>
		</>
	);
};

export const ModalWithInputs = ({
	visible,
	modalTitle,
	onClose,
	onConfirm,
	inputs,
}: Props) => {
	return (
		<Modal title={modalTitle} onClose={onClose} visible={visible}>
			<div>
				{inputs?.map((input) => (
					<Input
						key={input.label}
						label={input.label}
						errorMessage={input.errorMessage}
						setState={input.setState}
						validator={input.validator}
						value={input.value}
					/>
				))}
			</div>
			<div>Actions</div>
		</Modal>
	);
};
