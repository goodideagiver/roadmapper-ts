const technologys: {
	[key: string]: string[];
} = {
	HTML: [
		'Headings',
		'Paragraphs',
		'Lists',
		'Links',
		'Images',
		'Forms',
		'Tables',
		'Accessibility',
	],
	CSS: [
		'Block models',
		'Inline models',
		'Media queries',
		'CSS variables',
		'CSS grid',
		'CSS animations',
		'CSS transitions',
		'CSS flexbox',
	],
	React: ['Hooks', 'Context', 'Redux', 'Router', 'Styled components'],
	JavaScript: [
		'Arrays',
		'Objects',
		'Functions',
		'Loops',
		'Conditions',
		'Dom manipulation',
		'Events',
		'Promises',
		'Async/await',
	],
	TypeScript: [
		'Inference',
		'Assertions',
		'Guards',
		'Aliases',
		'Literals',
		'Intersections',
		'Generics',
		'Classes',
		'Interfaces',
		'Enums',
		'Tuples',
		'Nullables',
		'Union types',
		'Function types',
		'Array types',
		'Object types',
};

export const getSuggestedTech = (technology: string) => {
	if (technology in technologys) {
		return technologys[technology];
	}
};
