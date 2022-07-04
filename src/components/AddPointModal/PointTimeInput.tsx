import { useId } from 'react';
import { Button } from '../../UI/Button/Button';
import { InputWithLabel } from '../../UI/InputWithLabel/InputWithLabel';
import { RoadmapPointTimeAdjust } from './RoadmapPointTimeAdjust';

type PointTimeInputProps = {
	onChangeDays: (daysAmount: number) => void;
	daysValue: number;
	onReset: () => void;
};

export const PointTimeInput = ({
	onChangeDays,
	daysValue,
	onReset,
}: PointTimeInputProps) => {
	const handleChangeMonths = (amount: number) => {
		onChangeDays(amount * 30);
	};
	const handleChangeDays = (amount: number) => {
		onChangeDays(amount);
	};
	const handleChangeWeeks = (amount: number) => {
		onChangeDays(amount * 7);
	};

	return (
		<div>
			<InputWithLabel
				label='Time to complete'
				inputId={useId()}
				inputValue={daysValue}
			/>
			<RoadmapPointTimeAdjust onTimeAdjust={handleChangeDays} label='Day' />
			<RoadmapPointTimeAdjust onTimeAdjust={handleChangeWeeks} label='Week' />
			<RoadmapPointTimeAdjust onTimeAdjust={handleChangeMonths} label='Month' />
			<Button variant='danger' onClick={onReset}>
				Reset point time
			</Button>
		</div>
	);
};
