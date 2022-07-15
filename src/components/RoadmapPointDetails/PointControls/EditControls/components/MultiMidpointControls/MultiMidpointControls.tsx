import { roadmapMidpoint } from '../../../../../../store/roadmap-slice';
import { Button } from '../../../../../../UI/Button/Button';
import { EditControlWrapper } from '../../EditControlWrapper';

type Props = {
	midpoints: roadmapMidpoint[];
	mainPointFinished: boolean;
};

export const MultiMidpointControls = ({
	midpoints,
	mainPointFinished,
}: Props) => {
	const allMidpointsFinished =
		midpoints?.every((midpoint) => midpoint.finished) || mainPointFinished;

	return (
		<div>
			<p>Control midpoints</p>
			<EditControlWrapper>
				<Button disabled={mainPointFinished} variant='success'>
					Mark all {allMidpointsFinished ? 'unfinished' : 'finished'}
				</Button>
				<Button>Sort asc</Button>
				<Button>Sort Desc</Button>
				<Button variant='danger'>Delete all</Button>
			</EditControlWrapper>
		</div>
	);
};
