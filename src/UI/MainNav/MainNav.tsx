
import { CSSTransitionLibraryProps } from '../../assets/types/types';

export const MainNav = ({ in: true }: CSSTransitionLibraryProps) => {
	return (
		<div>
			<a href='gith'>Link do gita</a>
			<div>Button do reseta</div>
			<div>Button do zmiany theme</div>
		</div>
	);
};
