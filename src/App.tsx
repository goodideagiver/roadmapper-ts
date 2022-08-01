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
import { useEffect, useState } from 'react';

const App = () => {
	const { mainRoadmapPoints, setRoadmap } = useRoadmap();
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	useEffect(() => {
		const pathname = window.location.pathname;

		if (
			pathname.includes('/share/') &&
			isFirstLoad &&
			mainRoadmapPoints.length === 0
		) {
			if (isFirstLoad) {
				setIsFirstLoad(false);
			}
			try {
				window.history.pushState(null, '', '/');
				const roadmapFromUrl = parseUrlToRoadmapObject(
					pathname.replace('/share/', '')
				);
				setRoadmap(roadmapFromUrl);
			} catch (e) {
				console.error(e);
			}
		}

		if (isFirstLoad) {
			setIsFirstLoad(false);
		}
	}, []);

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
