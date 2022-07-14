import * as classes from './EditControlWrapper.module.css';

type Props = {
	children: React.ReactNode;
	className?: string;
};
export const EditControlWrapper = ({ children, className }: Props) => {
	const cssClasses = [classes.order, className || ''].join(' ');

	return <div className={cssClasses}>{children}</div>;
};
