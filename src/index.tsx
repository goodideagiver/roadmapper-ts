import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

const app = document.getElementById('app');
if (app) {
	const root = createRoot(app);
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
} else {
	console.error('App not found');
}
