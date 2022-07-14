import * as styles from './Backdrop.module.css';

type BackdropProps = {
	onClose: () => void;
};

export const Backdrop = ({ onClose }: BackdropProps) => {
	return <div className={styles.backdrop} onClick={onClose} />;
};
