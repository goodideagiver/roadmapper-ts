import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { Button } from '../../../../UI/Button/Button';

import * as classes from './MidpointInfo.module.css';

type Props = {
	title: string;
	daysToComplete: number;
	toggleOptions: () => void;
};

export const MidpointInfo = ({
	daysToComplete,
	title,
	toggleOptions,
}: Props) => {
	const formattedDays = daysToYrsMthWeekDayString(daysToComplete);

	return (
		<div className={classes.info}>
			<p>{title}</p>
			<p>{formattedDays}</p>
			<Button size='sm' onClick={toggleOptions}>
				Edit
			</Button>
		</div>
	);
};
