import './assets/css/index.css';
import './assets/css/variables.css';
import { Roadmap } from './components/Roadmap/Roadmap';
import { MainLayout } from './pages/MainLayout/MainLayout';

const App = () => {
	return (
		<MainLayout>
			<Roadmap />
		</MainLayout>
	);
};

export default App;
