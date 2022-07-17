import { Button } from '../../UI/Button/Button';

import { RoadmapPointTimeAdjust } from './components/RoadmapPointTimeAdjust/RoadmapPointTimeAdjust';
import { TimeInputDisplay } from './components/TimeInputDisplay/TimeInputDisplay';
import { LongDurationMessage } from './LongDurationMessage';

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

	const adjustTimeButtonsData = [
		{
			label: 'Day',
			onClick: handleChangeDays,
		},
		{
			label: 'Week',
			onClick: handleChangeWeeks,
		},
		{
			label: 'Month',
			onClick: handleChangeMonths,
		},
		{
			label: 'Year',
			onClick: handleChangeYears,
		},
	];

	return (
		<div>
			{daysValue > 3285 && daysValue < 6285 && (
				<LongDurationMessage message='React was released in 2013' />
			)}
			{daysValue > 26280 ? (
				<LongDurationMessage message='Entered number of days is longer than average human life expectancy.' />
			) : null}
			{daysValue > 9855 && daysValue < 11000 ? (
				<LongDurationMessage message='JavaScript was invented in 1995' />
			) : null}
			<TimeInputDisplay
				daysValue={daysValue}
				daysFallback='No time specified'
			/>
			{adjustTimeButtonsData.map((buttonData) => (
				<RoadmapPointTimeAdjust
					key={buttonData.label}
					label={buttonData.label}
					onTimeAdjust={buttonData.onClick}
				/>
			))}
			{daysValue > 0 && (
				<Button variant='danger' onClick={onReset}>
					Reset point time
				</Button>
			)}
		</div>
	);
};
