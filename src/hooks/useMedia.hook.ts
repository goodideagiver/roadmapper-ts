//use media query hook

import { useEffect, useState } from 'react';

export const useMediaQuery = (rule: string) => {
	const [matches, setMatches] = useState(window.matchMedia(rule).matches);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(rule);
		const listener = () => setMatches(mediaQueryList.matches);
		mediaQueryList.addEventListener('change', listener);
		return () => mediaQueryList.removeEventListener('change', listener);
	}, [rule]);
	return matches;
};