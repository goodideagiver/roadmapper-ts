import * as classes from './MainFooter.module.css';

const links = [
	{ name: 'Repo', url: 'https://github.com/goodideagiver/roadmapper-ts' },
	{ name: 'GitHub', url: 'https://github.com/goodideagiver' },
	{ name: 'Website', url: 'https://purpleblack.dev/' },
];

export const MainFooter = () => {
	const anchors = links.map((link) => (
		<a key={link.name} href={link.url} target='_blank' rel='noreferrer'>
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
