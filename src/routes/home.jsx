import { Icon, FAB, CheckboxAnim, Checkbox, CircularProgress, CircularProgressIndeterminate, LinearProgress, LinearProgressIndeterminate, Card, Button, ButtonLink, Switch, CardClickable, SegmentedButtonContainer, SegmentedButtonItem } from 'm3-dreamland';
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
					<SegmentedButtonItem name="segmented-b" input="segmented-b-2" icon={iconCircle}>Tab C</SegmentedButtonItem>
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
			align-items: center;
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
				<div class="buttons">
					<CardClickable type="elevated">
						Hiii
					</CardClickable>
					<CardClickable type="filled">
						Hiii
					</CardClickable>
					<CardClickable type="outlined">
						Hiii
					</CardClickable>
				</div>
			</Card>
			<Card type="filled">
				<p class="buttons">
					<ButtonLink type="elevated" iconType="left" href="https://dreamland.js.org"><Icon icon={iconCode} />Dreamland</ButtonLink>
					<ButtonLink type="tonal" iconType="full" href="https://dreamland.js.org"><Icon icon={iconCode} /></ButtonLink>
				</p>
				<p class="buttons">
					<ButtonLink type="elevated" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="filled" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="tonal" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="outlined" href="https://dreamland.js.org">Dreamland</ButtonLink>
					<ButtonLink type="text" href="https://dreamland.js.org">Dreamland</ButtonLink>
				</p>
			</Card>
			<Card type="filled">
				<div class="buttons">
					<Switch />
					<CheckboxAnim><input type="checkbox" /></CheckboxAnim>
					<Checkbox><input type="checkbox" /></Checkbox>
				</div>
			</Card>
			<Card type="filled">
				<div class="buttons">
					<SegmentedPlayground multiSelect={true} />
					<SegmentedPlayground multiSelect={false} />
				</div>
			</Card>
			<Card type="filled">
				<div class="buttons">
					<FAB color="primary" icon={iconCode} text="The Code" />
					<FAB color="surface" icon={iconCode} text="The Code" />
					<FAB color="secondary" icon={iconCode} text="The Code" />
					<FAB color="tertiary" icon={iconCode} text="The Code" />
				</div>
			</Card>
			<Card type="filled">
				<div class="buttons">
					<FAB size="large" color="primary" icon={iconCode} />
					<FAB size="large" color="surface" icon={iconCode} />
					<FAB size="large" color="secondary" icon={iconCode} />
					<FAB size="large" color="tertiary" icon={iconCode} />
				</div>
			</Card>
			<Card type="filled">
				<div class="buttons">
					<FAB size="small" color="primary" icon={iconCode} text="The Code" />
					<FAB size="small" color="surface" icon={iconCode} text="The Code" />
					<FAB size="small" color="secondary" icon={iconCode} text="The Code" />
					<FAB size="small" color="tertiary" icon={iconCode} text="The Code" />
				</div>
			</Card>
			<Card type="filled">
				<div class="buttons">
					<CircularProgress percent={61} />
					<CircularProgressIndeterminate />
					<LinearProgress percent={61} />
					<LinearProgressIndeterminate />
				</div>
			</Card >
		</div >
	);
};

export default Home;
