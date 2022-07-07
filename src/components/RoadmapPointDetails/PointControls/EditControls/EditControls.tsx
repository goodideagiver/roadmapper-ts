import { useRoadmap } from '../../../../store/roadmap-slice';
import { Button } from '../../../../UI/Button/Button';
import classes from './EditControls.module.css';

type Props = {
	id: string;
	isFinished: boolean;
};

//mark as finished

export const EditControls = ({ id, isFinished }: Props) => {
	const completion = !isFinished ? 'unfinished' : 'finished';

	const { mainRoadmapPoints } = useRoadmap();

	const orderInArray = mainRoadmapPoints.findIndex((el) => el.id === id);

	return (
		<div>
			<p>{completion}</p>
			<p>Id: {id}</p>
			<p>Order: {orderInArray + 1}</p>
			<Button>Mark as finished</Button>
			<Button>Move up</Button>
			<Button>Move Down</Button>
			<Button>Edit name and time</Button>
			<Button variant='danger'>Delete roadmap point</Button>
		</div>
	);
};
