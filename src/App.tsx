import { ReactNotifications } from 'react-notifications-component';
import './assets/css/index.css';
import './assets/css/variables.css';
import { MainControls } from './components/MainControls/MainControls';
import { Roadmap } from './components/Roadmap/Roadmap';
import { RoadmapSummary } from './components/RoadmapSummary/RoadmapSummary';
import 'react-notifications-component/dist/theme.css';
import { parseUrlToRoadmapObject } from './helpers/parseRoadmapToURLString.helper';

import { MainLayout } from './pages/MainLayout/MainLayout';
import { useRoadmap } from './store/useRoadmap';
import { MainFooter } from './components/MainFooter/MainFooter';
import { useState } from 'react';

const App = () => {
	const { mainRoadmapPoints, setRoadmap } = useRoadmap();

	const [isFirstLoad, setIsFirstLoad] = useState(true);

	if (window.location.pathname.includes('/share/') && isFirstLoad) {
		const roadmapFromUrl = parseUrlToRoadmapObject(
			window.location.pathname.replace('/share/', '')
		);

		// window.location.pathname = '/';
		setRoadmap(roadmapFromUrl);

		console.log(roadmapFromUrl);

		// setRoadmap(roadmapFromUrl);
	}

	if (isFirstLoad) {
		setIsFirstLoad(false);
	}
	return (
		<MainLayout>
			<ReactNotifications />
			<RoadmapSummary />
			<Roadmap roadmapArray={mainRoadmapPoints} />
			<MainControls />
			<MainFooter />
		</MainLayout>
	);
};

export default App;
