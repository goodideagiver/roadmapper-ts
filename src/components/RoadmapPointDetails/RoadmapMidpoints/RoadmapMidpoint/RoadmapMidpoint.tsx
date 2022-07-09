import { useRef, useState } from 'react';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { roadmapMidpoint } from '../../../../store/roadmap-slice';
import { Button } from '../../../../UI/Button/Button';

import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import * as classes from './RoadmapMidpoint.module.css';
import { useClickOutside } from '../../../../hooks/useClickOutside.hook';

type Props = {
	midpoint: roadmapMidpoint;
};
export const RoadmapMidpoint = ({ midpoint }: Props) => {
	const [optionsOpen, setOptionsOpen] = useState(false);
	const midpointRef = useRef(null);

	const toggleOptions = () => setOptionsOpen(!optionsOpen);

	const formattedDays = daysToYrsMthWeekDayString(midpoint.daysToComplete);

	useClickOutside(midpointRef, () => setOptionsOpen(false));

	return (
		<div ref={midpointRef} className={classes.midpoint} key={midpoint.id}>
			<div className={classes.info}>
				<p>{midpoint.title}</p>
				<p>{formattedDays}</p>
				<Button onClick={toggleOptions}>Edit</Button>
			</div>
			{optionsOpen && (
				<div className={classes.controls}>
					<Button>
						{midpoint.finished ? 'Mark unfinished' : 'Mark finished'}
					</Button>
					<Button>
						<FiArrowUp />
						Up
					</Button>
					<Button>
						<FiArrowDown />
						Down
					</Button>
				</div>
			)}
		</div>
	);
};
