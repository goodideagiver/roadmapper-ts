import { useEffect, useRef, useState } from 'react';
import { uuid } from 'uuidv4';
import {
	roadmapDataPoint,
	roadmapMidpoint,
} from '../../../store/roadmap-slice';

type ModalError = {
	timeError: string;
	titleError: string;
};

export type AddRoadmapPoint =
	| ((point: roadmapDataPoint) => void)
	| ((point: roadmapMidpoint) => void);

export const useAddPointModal = (
	onClose: () => void,
	onAddRoadmapPoint: AddRoadmapPoint
) => {
	const [days, setDays] = useState(0);
	const [title, setTitle] = useState('');
	const [error, setError] = useState<ModalError>({
		timeError: '',
		titleError: '',
	});

	const titleErrorRef = useRef<HTMLParagraphElement>(null);
	const timeErrorRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (error.titleError) {
			titleErrorRef.current?.scrollIntoView({ block: 'start' });
		}
	}, [error.titleError.length]);

	const cancelHandler = () => {
		onClose();
		setError({
			timeError: '',
			titleError: '',
		});
		setTitle('');
		setDays(0);
	};

	const confirmPointHandler = () => {
		if (error.titleError) {
			titleErrorRef.current?.scrollIntoView({ block: 'start' });
			return;
		}

		if (title.trim().length === 0) {
			setError((error) => {
				const newError = 'title is a required field';
				return { ...error, titleError: newError };
			});
		}

		if (error.timeError) {
			timeErrorRef.current?.scrollIntoView({ block: 'start' });
			return;
		}

		if (days < 1) {
			setError((error) => {
				const newError = 'days is a required field';
				return { ...error, timeError: newError };
			});
		}

		if (title.length > 0 && days > 0) {
			setError({ timeError: '', titleError: '' });
			onAddRoadmapPoint({
				daysToComplete: days,
				title,
				finished: false,
				id: uuid(),
			});
			setDays(0);
			setTitle('');
			onClose();
		}
	};

	const handleSetDays = (daysAmount: number) => {
		setDays((oldDaysValue) => {
			if (oldDaysValue + daysAmount < 0) {
				return 0;
			}
			setError((error) => {
				const newError = '';
				return { ...error, timeError: newError };
			});

			return oldDaysValue + daysAmount;
		});
	};

	const handleInputTitle = (title: string) => {
		setError((error) => {
			const newError = '';
			return { ...error, titleError: newError };
		});
		setTitle(title);
	};

	const handleResetDays = () => {
		setDays(0);
	};

	return {
		cancelHandler,
		handleResetDays,
		confirmPointHandler,
		handleSetDays,
		handleInputTitle,
		days,
		title,
		error,
		titleErrorRef,
		timeErrorRef,
	};
};
