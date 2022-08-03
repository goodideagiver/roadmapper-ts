import { ReactNotifications } from 'react-notifications-component';
import './assets/css/index.css';
import './assets/css/variables.css';
import { MainControls } from './components/MainControls/MainControls';
import { Roadmap } from './components/Roadmap/Roadmap';
import { RoadmapSummary } from './components/RoadmapSummary/RoadmapSummary';
import 'react-notifications-component/dist/theme.css';

import { MainLayout } from './pages/MainLayout/MainLayout';
import { useRoadmap } from './store/useRoadmap';
import { MainFooter } from './components/MainFooter/MainFooter';
import { ShareRoadmapUrl } from './components/ShareRoadmapUrl/ShareRoadmapUrl';
import { useRoadmapLocalStorage } from './hooks/useRoadmapLocalStorage.hook';

const App = () => {
	const { mainRoadmapPoints } = useRoadmap();

	useRoadmapLocalStorage();

	return (
		<MainLayout>
			<ReactNotifications />
			<RoadmapSummary />
			<Roadmap roadmapArray={mainRoadmapPoints} />
			<ShareRoadmapUrl />
			<MainControls />
			<MainFooter />
		</MainLayout>
	);
};

export default App;
