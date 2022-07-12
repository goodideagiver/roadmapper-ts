import { RefObject, useEffect, useState } from 'react';

export const useHasOverflow = <T extends HTMLElement>(ref: RefObject<T>) => {
	const [hasTopOverflow, setHasTopOverflow] = useState(false);
	const [hasBottomOverflow, setHasBottomOverflow] = useState(false);

	useEffect(() => {
		const { current } = ref;
		if (current) {
			const { offsetHeight, scrollHeight, scrollTop } = current;
			setHasTopOverflow(scrollTop > 0);
			setHasBottomOverflow(scrollTop + offsetHeight < scrollHeight);
			current.addEventListener('scroll', () => {
				setHasTopOverflow(current.scrollTop > 0);
				setHasBottomOverflow(current.scrollTop + offsetHeight < scrollHeight);
			});

			return () => {
				current.removeEventListener('scroll', () => {
					setHasTopOverflow(current.scrollTop > 0);
					setHasBottomOverflow(current.scrollTop + offsetHeight < scrollHeight);
				});
			};
		}
	}, [ref]);

	return {
		hasTopOverflow,
		hasBottomOverflow,
	};
};
