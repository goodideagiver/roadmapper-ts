import { RefObject, useEffect, useState } from 'react';

export const useHasOverflow = <T extends HTMLElement>(ref: RefObject<T>) => {
	// let hasTopOverflow = false;
	// let hasBottomOverflow = false;
	const [hasTopOverflow, setHasTopOverflow] = useState(false);
	const [hasBottomOverflow, setHasBottomOverflow] = useState(false);

	useEffect(() => {
		const { current } = ref;

		if (!current) {
			return;
		}
		const setOverflow = () => {
			const { offsetHeight, scrollHeight, scrollTop } = current;
			const currentScroll: number = current.scrollTop + offsetHeight;
			setHasTopOverflow(scrollTop > 0);
			setHasBottomOverflow(Math.round(currentScroll) < scrollHeight);
		};

		setOverflow();
		current.addEventListener('scroll', setOverflow);
		window.addEventListener('resize', setOverflow);

		return () => {
			current.removeEventListener('scroll', setOverflow);
			window.removeEventListener('resize', setOverflow);
		};
	}, [ref]);

	return {
		hasTopOverflow,
		hasBottomOverflow,
	};
};
