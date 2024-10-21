import 'dreamland';
import { router } from './router.tsx';
import { StyleFromParams } from 'm3-dreamland';

const App: Component<{}, { renderRoot: HTMLElement }> = function() {
	this.mount = () => {
		router.mount(this.renderRoot);
	};

	return (
		<div id="app">
			<StyleFromParams scheme="tonal_spot" contrast={0} color="CBA6F7" />
			<div bind:this={use(this.renderRoot)} />
		</div>
	);
};

window.addEventListener('load', () => {
	document.getElementById('app')!.replaceWith(<App />);
});
