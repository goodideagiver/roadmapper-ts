import { useRef, useState } from 'react';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { roadmapMidpoint, useRoadmap } from '../../../../store/roadmap-slice';
import { Button } from '../../../../UI/Button/Button';

import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import * as classes from './RoadmapMidpoint.module.css';
import { useClickOutside } from '../../../../hooks/useClickOutside.hook';

type Props = {
	midpoint: roadmapMidpoint;
	mainPointId: string;
};
export const RoadmapMidpoint = ({ midpoint, mainPointId }: Props) => {
	const [optionsOpen, setOptionsOpen] = useState(false);
	const midpointRef = useRef(null);

	const { getMidpointsByPointId, setMidpointsByPointId } = useRoadmap();

	const toggleOptions = () => setOptionsOpen(!optionsOpen);

	const formattedDays = daysToYrsMthWeekDayString(midpoint.daysToComplete);

	useClickOutside(midpointRef, () => setOptionsOpen(false));

	const updatePointMidpoints = (newMidpoints: roadmapMidpoint[]) => {
		setMidpointsByPointId(mainPointId, newMidpoints);
	};

	const moveMidpointUpHandler = () => {
		const oldMidpoints = getMidpointsByPointId(mainPointId);

		if (!oldMidpoints || oldMidpoints.length === 1) return;

		const thisPointIndex = oldMidpoints.findIndex(
			(searchedMidpoint) => searchedMidpoint.id === midpoint.id
		);

		if (thisPointIndex === 0) {
			return;
		}

		const newMidpoints = [...oldMidpoints];
		const thisPoint = newMidpoints[thisPointIndex];
		const prevPoint = newMidpoints[thisPointIndex - 1];

		newMidpoints[thisPointIndex] = prevPoint;
		newMidpoints[thisPointIndex - 1] = thisPoint;

		updatePointMidpoints(newMidpoints);
	};

	const moveMidpointDownHandler = () => {
		const oldMidpoints = getMidpointsByPointId(mainPointId);

		if (!oldMidpoints || oldMidpoints.length === 1) return;

		const thisPointIndex = oldMidpoints.findIndex(
			(searchedMidpoint) => searchedMidpoint.id === midpoint.id
		);

		if (thisPointIndex === oldMidpoints.length - 1) {
			return;
		}

		const newMidpoints = [...oldMidpoints];
		const thisPoint = newMidpoints[thisPointIndex];
		const nextPoint = newMidpoints[thisPointIndex + 1];

		newMidpoints[thisPointIndex] = nextPoint;
		newMidpoints[thisPointIndex + 1] = thisPoint;

		updatePointMidpoints(newMidpoints);
	};

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
					<Button onClick={moveMidpointUpHandler}>
						<FiArrowUp />
						Up
					</Button>
					<Button onClick={moveMidpointDownHandler}>
						<FiArrowDown />
						Down
					</Button>
				</div>
			)}
		</div>
	);
};
