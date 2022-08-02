import { useSharedRoadmapURL } from '../../hooks/useSharedRoadmapURL.hook';
import { ExplainModal } from '../../UI/ExplainModal/ExplainModal';

export const ShareRoadmapUrl = () => {
	const { clearError, error, clearMessage, displaySuccessMessage } =
		useSharedRoadmapURL();

	return (
		<>
			<ExplainModal
				visible={displaySuccessMessage}
				onClose={clearMessage}
				title='Shared roadmap loaded'
			>
				<p>Roadmap was loaded from shared link succesfully.</p>
			</ExplainModal>
			<ExplainModal
				visible={!!error}
				onClose={clearError}
				title='Shared roadmap error'
			>
				<p>There was an error when loading shared roadmap link.</p>
				<p>Error message: {error}</p>
			</ExplainModal>
		</>
	);
};
