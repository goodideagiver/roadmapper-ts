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
};
export const MidpointControls = ({
	moveMidpointDownHandler,
	moveMidpointUpHandler,
	showDeleteModalHandler,
	toggleMidpointFinished,
	midpointFinished,
}: Props) => {
	return (
		<div className={classes.controls}>
			<Button size='sm' onClick={toggleMidpointFinished}>
				{!midpointFinished ? <FiCircle /> : <FiCheckCircle />}
			</Button>
			<Button size='sm' onClick={moveMidpointUpHandler}>
				<FiArrowUp />
			</Button>
			<Button size='sm' onClick={moveMidpointDownHandler}>
				<FiArrowDown />
			</Button>
			<Button onClick={showDeleteModalHandler} size='sm' variant='danger'>
				<FiTrash />
			</Button>
		</div>
	);
};
