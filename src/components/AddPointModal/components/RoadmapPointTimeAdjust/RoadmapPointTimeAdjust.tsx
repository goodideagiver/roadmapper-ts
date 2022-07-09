import * as classes from './RoadmapPointTimeAdjust.module.css';
import * as common from '../../assets/css/common.module.css';
import { Button } from '../../../../UI/Button/Button';

type RoadmapPoinTimeAdjustProps = {
	onTimeAdjust: (amount: number) => void;
	label: string;
};

export const RoadmapPointTimeAdjust = ({
	onTimeAdjust,
	label,
}: RoadmapPoinTimeAdjustProps) => (
	<div className={classes.root}>
		<Button size='sm' onClick={() => onTimeAdjust(-1)}>
			-1 {label}
		</Button>
		<p>{label + 's'}</p>
		<Button size='sm' onClick={() => onTimeAdjust(1)}>
			+1 {label}
		</Button>
	</div>
);
