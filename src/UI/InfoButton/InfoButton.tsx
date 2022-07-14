import { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { Button } from '../Button/Button';
import { ExplainModal } from '../ExplainModal/ExplainModal';

import * as classes from './InfoButton.module.css';

type Props = {
	children: React.ReactNode;
	title: string;
};
export const InfoButton = ({ children, title }: Props) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Button
				className={classes.button}
				width='fit'
				onClick={() => setVisible(true)}
			>
				<AiFillQuestionCircle fontSize='1.2rem' aria-label='question mark' />
			</Button>
			<ExplainModal
				title={title}
				visible={visible}
				onClose={() => setVisible(false)}
			>
				{children}
			</ExplainModal>
		</>
	);
};
