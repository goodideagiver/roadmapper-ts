import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

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
	onAddRoadmapPoint: AddRoadmapPoint,
	defaultTitle = '',
	defaultTime = 0
) => {
	const [days, setDays] = useState(defaultTime);
	const [title, setTitle] = useState(defaultTitle);
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
		setTitle(defaultTitle);
		setDays(defaultTime);
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
			return;
		}

		if (title.trim().length > 15) {
			setError((error) => {
				const newError = 'title must be less than 16 characters';
				return { ...error, titleError: newError };
			});
			return;
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
			return;
		}

		if (title.trim().length > 0 && days > 0) {
			setError({ timeError: '', titleError: '' });
			onAddRoadmapPoint({
				daysToComplete: days,
				title,
				finished: false,
				id: uuid(),
			});
			setDays(defaultTime);
			setTitle(defaultTitle);
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
		setDays(defaultTime);
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
