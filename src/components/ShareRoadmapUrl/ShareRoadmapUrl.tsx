import { useSharedRoadmapURL } from '../../hooks/useSharedRoadmapURL.hook';
import { ExplainModal } from '../../UI/ExplainModal/ExplainModal';

export const ShareRoadmapUrl = () => {
	const { clearError, error } = useSharedRoadmapURL();

	if (error) {
		return (
			<ExplainModal
				visible={!!error}
				onClose={clearError}
				title='Shared roadmap error'
			>
				<p>There was an error when loading shared roadmap link.</p>
				<p>Error message: {error}</p>
			</ExplainModal>
		);
	}

	return null;
};
