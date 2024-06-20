import { Card, Button, ButtonLink, Switch, CardClickable } from 'm3-dreamland';

// javascript syntax for defining components
const Home = function() {
	this.counter = 0;

	this.css = `
		display: grid;
		grid-auto-rows: 16em;
		grid-template-columns: repeat(4, 1fr);
		gap: 1em;

		.buttons {
			display: flex;
			flex-direction: row;
			row-gap: 1em;
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
		</div>
	);
};

export default Home;
