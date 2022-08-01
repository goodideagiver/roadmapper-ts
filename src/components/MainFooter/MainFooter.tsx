import * as classes from './MainFooter.module.css';

const links = [
	{ name: 'Repo', url: '' },
	{ name: 'GitHub', url: '' },
	{ name: 'Website', url: '' },
];

export const MainFooter = () => {
	const anchors = links.map((link) => (
		<a key={link.name} href={link.url}>
			{link.name}
		</a>
	));

	return (
		<footer className={classes.root}>
			<div className={classes.links}>{anchors}</div>
			<p className={classes.createdBy}>Created by Purple Black</p>
		</footer>
	);
};
