export const DiffLine = ({
	displayDateDiff,
}: {
	displayDateDiff: string | null;
}) => {
	if (displayDateDiff) {
		return (
			<div>
				<div>{displayDateDiff}</div>
			</div>
		);
	}

	return (
		<div>
			<div>Placeholder</div>
		</div>
	);
};
