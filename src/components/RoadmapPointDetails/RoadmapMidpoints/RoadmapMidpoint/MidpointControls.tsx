import {
	FiArrowDown,
	FiArrowUp,
	FiCheckCircle,
	FiCircle,
	FiTrash,
} from 'react-icons/fi';
import { Button } from '../../../../UI/Button/Button';

import * as classes from './MidpointControls.module.css';

type Props = {
	showDeleteModalHandler: () => void;
	moveMidpointUpHandler: () => void;
	moveMidpointDownHandler: () => void;
	toggleMidpointFinished: () => void;
	midpointFinished: boolean;
	midpointsCount: number;
	midpointIndex: number;
};
export const MidpointControls = ({
	moveMidpointDownHandler,
	moveMidpointUpHandler,
	showDeleteModalHandler,
	toggleMidpointFinished,
	midpointFinished,
	midpointIndex,
	midpointsCount,
}: Props) => {
	const isOnlyMidpoint = midpointsCount === 1;

	const canBeMovedUp = !isOnlyMidpoint && midpointIndex > 0;
	const canBeMovedDown = !isOnlyMidpoint && midpointIndex < midpointsCount - 1;

	return (
		<div className={classes.controls}>
			<Button size='sm' onClick={toggleMidpointFinished}>
				{!midpointFinished ? <FiCircle /> : <FiCheckCircle />}
			</Button>
			{!isOnlyMidpoint && (
				<>
					<Button
						disabled={!canBeMovedUp}
						size='sm'
						onClick={moveMidpointUpHandler}
					>
						<FiArrowUp />
					</Button>
					<Button
						disabled={!canBeMovedDown}
						size='sm'
						onClick={moveMidpointDownHandler}
					>
						<FiArrowDown />
					</Button>
				</>
			)}
			<Button onClick={showDeleteModalHandler} size='sm' variant='danger'>
				<FiTrash />
			</Button>
		</div>
	);
};
