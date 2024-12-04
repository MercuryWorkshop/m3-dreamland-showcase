import 'dreamland';
import { StyleFromParams } from 'm3-dreamland';
import Home from './routes/home';

const App: Component<{}, { renderRoot: HTMLElement }> = function() {
	return (
		<div id="app">
			<StyleFromParams scheme="tonal_spot" contrast={0} color="CBA6F7" />
			<Home />
		</div>
	);
};

window.addEventListener('load', () => {
	document.getElementById('app')!.replaceWith(<App />);
});
