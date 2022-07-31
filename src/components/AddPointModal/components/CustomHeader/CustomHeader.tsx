import { GiStarsStack } from 'react-icons/gi';
import { TiCog, TiStar } from 'react-icons/ti';

type Props = {
	variant: 'edit' | 'addMainPoint' | 'addSubPoint';
	title: string;
};

const icons = {
	edit: <TiCog />,
	addMainPoint: <TiStar />,
	addSubPoint: <GiStarsStack />,
};

export const CustomHeader = ({ variant, title }: Props) => {
	return (
		<>
			{icons[variant]}
			{title}
		</>
	);
};
