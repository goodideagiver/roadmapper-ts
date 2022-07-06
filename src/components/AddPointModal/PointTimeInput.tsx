import { Button } from '../../UI/Button/Button';

import { RoadmapPointTimeAdjust } from './components/RoadmapPointTimeAdjust/RoadmapPointTimeAdjust';
import { TimeInputDisplay } from './components/TimeInputDisplay/TimeInputDisplay';

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

	const handleChangeYears = (amount: number) => {
		onChangeDays(amount * 365);
	};

	return (
		<div>
			<TimeInputDisplay
				daysValue={daysValue}
				daysFallback='No time specified'
			/>
			<RoadmapPointTimeAdjust onTimeAdjust={handleChangeDays} label='Day' />
			<RoadmapPointTimeAdjust onTimeAdjust={handleChangeWeeks} label='Week' />
			<RoadmapPointTimeAdjust onTimeAdjust={handleChangeMonths} label='Month' />
			<RoadmapPointTimeAdjust onTimeAdjust={handleChangeYears} label='Year' />
			<Button variant='danger' onClick={onReset}>
				Reset point time
			</Button>
		</div>
	);
};
