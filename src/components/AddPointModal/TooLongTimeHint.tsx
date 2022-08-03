import { LongDurationMessage } from './LongDurationMessage';

type Props = {
	daysValue: number;
};
export const TooLongTimeHint = ({ daysValue }: Props) => {
	return (
		<>
			{daysValue > 3285 && daysValue < 6285 && (
				<LongDurationMessage message='React was released in 2013' />
			)}
			{daysValue > 26280 ? (
				<LongDurationMessage message='Entered number of days is longer than average human life expectancy.' />
			) : null}
			{daysValue > 9855 && daysValue < 11000 ? (
				<LongDurationMessage message='JavaScript was invented in 1995' />
			) : null}
		</>
	);
};
