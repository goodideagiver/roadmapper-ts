import { FiMinus, FiPlus } from 'react-icons/fi';
import { useRoadmap } from '../../../../../../store/useRoadmap';
import { Button } from '../../../../../../UI/Button/Button';
import { EditControlWrapper } from '../../EditControlWrapper';

import * as classes from './OrderEdit.module.css';

type Props = {
	id: string;
};
export const OrderEdit = ({ id }: Props) => {
	const { moveRoadmapPointUp, moveRoadmapPointDown, mainRoadmapPoints } =
		useRoadmap();

	const orderInArray = mainRoadmapPoints.findIndex((el) => el.id === id);
	return (
		<EditControlWrapper>
			<p>Order: {orderInArray + 1}</p>
			<div className={classes.buttons}>
				<Button
					disabled={orderInArray === 0}
					onClick={() => moveRoadmapPointDown(id)}
				>
					<FiMinus aria-label='minus' fontSize='1.6rem' />
				</Button>
				<Button
					disabled={orderInArray === mainRoadmapPoints.length - 1}
					onClick={() => moveRoadmapPointUp(id)}
				>
					<FiPlus aria-label='plus' fontSize='1.6rem' />
				</Button>
			</div>
		</EditControlWrapper>
	);
};
