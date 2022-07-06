import './assets/css/index.css';
import './assets/css/variables.css';
import { AddRoadmapPoint } from './components/AddRoadmapPoint/AddRoadmapPoint';
import { Roadmap } from './components/Roadmap/Roadmap';
import { RoadmapSummary } from './components/RoadmapSummary/RoadmapSummary';

import { MainLayout } from './pages/MainLayout/MainLayout';
import { useRoadmap } from './store/roadmap-slice';

const App = () => {
	const { roadmap } = useRoadmap();

	return (
		<MainLayout>
			<RoadmapSummary />
			<Roadmap roadmapArray={roadmap.roadmap} />
			<AddRoadmapPoint />
		</MainLayout>
	);
};

export default App;
