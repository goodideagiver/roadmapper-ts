import { RefObject, useEffect } from 'react';

export const useHorizontalScroll = <T extends HTMLElement>(
	ref: RefObject<T>
) => {
	useEffect(() => {
		const handleHorizontalScroll = (event) => {
			event.preventDefault();
			event.target.scrollLeft += event.deltaY;
		};
		if (ref && ref.current) {
			ref.current.addEventListener('scroll', handleHorizontalScroll);
		}
		return () => {
			if (ref && ref.current) {
				ref.current.removeEventListener('scroll', handleHorizontalScroll);
			}
		};
	}, [ref]);
};
