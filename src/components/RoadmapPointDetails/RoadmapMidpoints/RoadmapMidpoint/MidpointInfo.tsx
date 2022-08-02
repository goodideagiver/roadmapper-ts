import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { useMidpoints } from '../../../../store/useMidpoints.hook';
import { Button } from '../../../../UI/Button/Button';

import * as classes from './MidpointInfo.module.css';

type Props = {
	title: string;
	daysToComplete: number;
	toggleOptions: () => void;
	finished: boolean;
	mainPointId: string;
	midpointId: string;
};

export const MidpointInfo = ({
	daysToComplete,
	title,
	toggleOptions,
	finished,
	mainPointId,
	midpointId,
}: Props) => {
	const [titleEditActive, setTitleEditActive] = useState(false);
	const [titleEditValue, setTitleEditValue] = useState(title);

	const formattedDays = daysToYrsMthWeekDayString(daysToComplete);

	const { editMidpointByMidpointId } = useMidpoints(mainPointId);

	const clickOutsideHandler = () => {
		setTitleEditActive(false);

		if (
			titleEditValue.length > 0 &&
			title !== titleEditValue &&
			titleEditValue.length < 16
		) {
			editMidpointByMidpointId(midpointId, {
				daysToComplete,
				title: titleEditValue,
				finished,
				id: midpointId,
			});
		} else {
			setTitleEditValue(title);
		}
	};

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const enteredValue = event.target.value.trim();

		setTitleEditValue(enteredValue);
	};

	return (
		<div className={classes.info}>
			{!titleEditActive && (
				<p onClick={() => setTitleEditActive(true)} className={classes.title}>
					{title}
				</p>
			)}
			{titleEditActive && (
				<input
					autoFocus
					onBlur={clickOutsideHandler}
					onChange={titleChangeHandler}
					type='text'
					className={classes.titleInput}
					value={titleEditValue}
				/>
			)}
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
