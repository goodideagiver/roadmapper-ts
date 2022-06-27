type MainNavProps = {
	isOpen: boolean;
};

export const MainNav = ({ isOpen = true }: MainNavProps) => {
	return (
		<div>
			<a href='gith'>Link do gita</a>
			<div>Button do reseta</div>
			<div>Button do zmiany theme</div>
		</div>
	);
};
