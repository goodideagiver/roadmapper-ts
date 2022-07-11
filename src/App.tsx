import './assets/css/index.css';
import './assets/css/variables.css';
import { AddRoadmapPoint } from './components/AddRoadmapPoint/AddRoadmapPoint';
import { Roadmap } from './components/Roadmap/Roadmap';
import { RoadmapSummary } from './components/RoadmapSummary/RoadmapSummary';

import { MainLayout } from './pages/MainLayout/MainLayout';
import { useRoadmap } from './store/useRoadmap';

const App = () => {
	const { mainRoadmapPoints } = useRoadmap();

	return (
		<MainLayout>
			<RoadmapSummary />
			<Roadmap roadmapArray={mainRoadmapPoints} />
			<AddRoadmapPoint />
		</MainLayout>
	);
};

export default App;
