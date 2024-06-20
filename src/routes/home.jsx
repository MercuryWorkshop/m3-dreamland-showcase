import { Icon, Card, Button, ButtonLink, Switch, CardClickable, SegmentedButtonContainer, SegmentedButtonItem } from 'm3-dreamland';
import iconCode from '@ktibow/iconset-material-symbols/code';
import iconTriangle from '@ktibow/iconset-material-symbols/change-history-outline';
import iconSquare from '@ktibow/iconset-material-symbols/square-outline';
import iconCircle from '@ktibow/iconset-material-symbols/circle-outline';

const SegmentedPlayground = function() {
	if (this.multiSelect) {
		return (
			<div>
				<SegmentedButtonContainer>
					<SegmentedButtonItem type="checkbox" input="segmented-a-0" checked={true}>$</SegmentedButtonItem>
					<SegmentedButtonItem type="checkbox" input="segmented-a-1">$$</SegmentedButtonItem>
					<SegmentedButtonItem type="checkbox" input="segmented-a-2" disabled={true}>$$$</SegmentedButtonItem>
				</SegmentedButtonContainer>
			</div>
		)
	} else {
		return (
			<div>
				<SegmentedButtonContainer>
					<SegmentedButtonItem name="segmented-b" input="segmented-b-0" icon={iconTriangle} checked={true}>Tab A</SegmentedButtonItem>
					<SegmentedButtonItem name="segmented-b" input="segmented-b-1" icon={iconSquare}>Tab B</SegmentedButtonItem>
					<SegmentedButtonItem name="segmented-b" input="segmented-b-2" icon={iconCircle} disabled={true}>Tab C</SegmentedButtonItem>
				</SegmentedButtonContainer>
			</div>
		)
	}
}

// javascript syntax for defining components
const Home = function() {
	this.counter = 0;

	this.css = `
		display: flex;
		flex-direction: column;
		gap: 1em;

		.buttons {
			display: flex;
			flex-direction: row;
			column-gap: 1em;
		}
	`;

	return (
		<div>
			<Card type="elevated">
				<p class="buttons">
					<Button type="elevated" on:click={() => this.counter++}>Click me!</Button>
					<Button type="filled" on:click={() => this.counter++}>Click me!</Button>
					<Button type="tonal" on:click={() => this.counter++}>Click me!</Button>
					<Button type="outlined" on:click={() => this.counter++}>Click me!</Button>
					<Button type="text" on:click={() => this.counter++}>Click me!</Button>
				</p>
				<Card type="filled">
					{use(this.counter)}
				</Card>
			</Card>
			<Card type="outlined">
				Hiii :3
				<CardClickable type="elevated">
					Hiii
				</CardClickable>
				<CardClickable type="filled">
					Hiii
				</CardClickable>
				<CardClickable type="outlined">
					Hiii
				</CardClickable>
			</Card>
			<Card type="filled">
				<p>
					<ButtonLink type="elevated" iconType="left" href="https://dreamland.js.org"><Icon icon={iconCode} />Dreamland</ButtonLink>
					<ButtonLink type="tonal" iconType="full" href="https://dreamland.js.org"><Icon icon={iconCode} /></ButtonLink>
				</p>
				<p>
					<ButtonLink type="elevated" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="filled" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="tonal" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="outlined" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="text" href="https://dreamland.js.org">Dreamland</ButtonLink>
				</p>
			</Card>
			<Card type="filled">
				<Switch></Switch>
			</Card>
			<Card type="filled">
				<SegmentedPlayground multiSelect={true} />
			</Card>
			<Card type="filled">
				<SegmentedPlayground multiSelect={false} />
			</Card>
		</div>
	);
};

export default Home;
