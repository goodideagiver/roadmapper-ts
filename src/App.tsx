import './assets/css/index.css';
import './assets/css/variables.css';
import { AddRoadmapPoint } from './components/AddRoadmapPoint/AddRoadmapPoint';
import { Roadmap } from './components/Roadmap/Roadmap';
import { roadmapDataPoint } from './components/Roadmap/Roadmap.types';
import { MainLayout } from './pages/MainLayout/MainLayout';

const fakeRoadmapData: roadmapDataPoint[] = [
	{
		title: 'Zaczynamy',
		daysToComplete: 5,
		finished: false,
		midpoints: [
			{
				daysToComplete: 5,
				finished: false,
				title: 'Zaczynamy',
			},
		],
	},
	{
		title: 'Zaczynamy',
		daysToComplete: 5,
		finished: false,
	},
	{
		title: 'Zaczynamy',
		daysToComplete: 5,
		finished: false,
		midpoints: [
			{
				daysToComplete: 5,
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
			<AddRoadmapPoint />
		</MainLayout>
	);
};

export default App;
