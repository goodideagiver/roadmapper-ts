import { RefObject, useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(
	ref: RefObject<T>,
	onOutsideClick: () => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			onOutsideClick();
		};
		document.addEventListener('click', listener);
		return () => {
			document.removeEventListener('click', listener);
		};
	}, [ref, onOutsideClick]);
};
