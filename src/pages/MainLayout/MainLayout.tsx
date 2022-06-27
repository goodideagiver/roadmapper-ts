import { ReactNode } from 'react';
import * as classes from './MainLayout.module.css';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return <div className={classes.root}>{children}</div>;
};
