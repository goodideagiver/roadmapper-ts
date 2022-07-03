import './assets/css/index.css';
import './assets/css/variables.css';
import { Roadmap } from './components/Roadmap/Roadmap';
import { roadmapDataPoint } from './components/Roadmap/Roadmap.types';
import { MainLayout } from './pages/MainLayout/MainLayout';

const fakeRoadmapData: roadmapDataPoint[] = [
	{
		title: 'Zaczynamy',
		daysToComplete: 0,
		finished: false,
		midpoints: [
			{
				daysToComplete: 0,
				finished: false,
				title: 'Zaczynamy',
			},
		],
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
