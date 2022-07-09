import { MutableRefObject, Ref, useEffect } from 'react';

export const useClickOutside = <T extends MutableRefObject>(
	ref: T,
	onOutsideClick: (ev: MouseEvent) => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			onOutsideClick(event);
		};
		document.addEventListener('click', listener);
		return () => {
			document.removeEventListener('click', listener);
		};
	}, [ref, onOutsideClick]);
};
