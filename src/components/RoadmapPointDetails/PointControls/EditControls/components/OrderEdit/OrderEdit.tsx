import { useRoadmap } from '../../../../../../store/useRoadmap';
import { Button } from '../../../../../../UI/Button/Button';

type Props = {
	id: string;
};
export const OrderEdit = ({ id }: Props) => {
	const { moveRoadmapPointUp, moveRoadmapPointDown, mainRoadmapPoints } =
		useRoadmap();

	const orderInArray = mainRoadmapPoints.findIndex((el) => el.id === id);
	return (
		<>
			<Button
				disabled={orderInArray === 0}
				onClick={() => moveRoadmapPointDown(id)}
			>
				Move Down
			</Button>
			<p>Order: {orderInArray + 1}</p>
			<Button
				disabled={orderInArray === mainRoadmapPoints.length - 1}
				onClick={() => moveRoadmapPointUp(id)}
			>
				Move up
			</Button>
		</>
	);
};
