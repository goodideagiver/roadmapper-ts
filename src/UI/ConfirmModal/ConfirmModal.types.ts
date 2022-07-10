export type Button = {
	text?: string;
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
};

export type Props = {
	onConfirm: () => void;
	onCancel: () => void;
	title: string;
	message: string;
	confifmButton?: Button;
	cancelButton?: Button;
	buttonsSize?: 'sm' | 'md' | 'lg';
	visible: boolean;
};
