import './assets/css/index.css';
import './assets/css/variables.css';
import { Roadmap } from './components/Roadmap/Roadmap';
import { roadmapDataPoint } from './components/Roadmap/Roadmap.types';
import { MainLayout } from './pages/MainLayout/MainLayout';

const fakeRoadmapData: roadmapDataPoint[] = [
	{
		title: 'Siema',
		finished: false,
		date: new Date(2020, 20, 10),
	},
	{
		title: 'Siema',
		finished: false,
		date: new Date(2020, 20, 10),
	},
	{
		title: 'Siema',
		finished: false,
		date: new Date(2020, 20, 10),
	},
	{
		title: 'Siema',
		finished: false,
		date: new Date(2020, 20, 10),
	},
];

const App = () => {
	return (
		<MainLayout>
			<Roadmap roadmapArray={fakeRoadmapData} />
		</MainLayout>
	);
};

export default App;
