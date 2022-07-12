import { FiCheck } from 'react-icons/fi';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { Button } from '../../../../UI/Button/Button';

import * as classes from './MidpointInfo.module.css';

type Props = {
	title: string;
	daysToComplete: number;
	toggleOptions: () => void;
	finished: boolean;
};

export const MidpointInfo = ({
	daysToComplete,
	title,
	toggleOptions,
	finished,
}: Props) => {
	const formattedDays = daysToYrsMthWeekDayString(daysToComplete);

	return (
		<div className={classes.info}>
			<p>{title}</p>
			{!finished && <p>{formattedDays}</p>}
			{finished && (
				<FiCheck
					className={classes.checkmark}
					aria-label='checkmark'
					fontSize={'1.5rem'}
				/>
			)}
			<Button size='sm' onClick={toggleOptions}>
				Edit
			</Button>
		</div>
	);
};
