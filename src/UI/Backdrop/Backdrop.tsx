type BackdropProps = {
	onClose: () => void;
};

export const Backdrop = ({ onClose }: BackdropProps) => {
	return <div onClick={onClose} />;
};
