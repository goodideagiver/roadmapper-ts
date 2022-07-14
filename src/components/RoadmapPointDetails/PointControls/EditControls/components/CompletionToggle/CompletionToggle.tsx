import { roadmapDataPoint } from '../../../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../../../store/useRoadmap';
import { Button } from '../../../../../../UI/Button/Button';
import { EditControlWrapper } from '../../EditControlWrapper';

import * as classes from './CompletionToggle.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
};

export const CompletionToggle = ({ roadmapPoint }: Props) => {
	const { finished } = roadmapPoint;

	const { updateRoadmapPoint } = useRoadmap();

	const completion = !finished ? 'Not finished' : 'Finished';

	const toggleFinishedHandler = () => {
		updateRoadmapPoint({ ...roadmapPoint, finished: !finished });
	};

	return (
		<EditControlWrapper className={`${finished ? classes.finished : ''}`}>
			<p>{completion}</p>
			<Button onClick={toggleFinishedHandler}>
				Mark as {!finished ? 'finished' : 'not finished'}
			</Button>
		</EditControlWrapper>
	);
};
