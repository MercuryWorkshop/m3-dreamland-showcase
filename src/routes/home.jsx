import { Icon, FAB, ChipChooser, CheckboxAnim, Checkbox, CircularProgress, CircularProgressIndeterminate, LinearProgress, LinearProgressIndeterminate, Card, Button, ButtonLink, Switch, CardClickable, SegmentedButtonContainer, SegmentedButtonItem } from 'm3-dreamland';
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
					<SegmentedButtonItem name="segmented-b" input="segmented-b-2" icon={iconCircle}>Tab C</SegmentedButtonItem>
				</SegmentedButtonContainer>
			</div>
		)
	}
}

// javascript syntax for defining components
const Home = function() {
	this.counter = 0;

	this.progress = 69;

	this.chipsChosen = [];

	this.css = `
		font-family: 'Roboto Flex', Roboto, RobotoDraft, 'Droid Sans', system-ui, sans-serif;
		display: flex;
		flex-direction: column;
		gap: 1em;

		h1 {
			font-variation-settings: "wdth" 110;
			font-weight: 750;
			font-size: 2.5rem;
		}

		h2 {
			font-weight: 575;
			font-size: 1.75rem;
		}

		h3 {
			font-weight: 500;
			font-size: 1.25rem;
		}

		.buttons {
			display: flex;
			flex-direction: row;
			column-gap: 1em;
			align-items: center;
		}

		.flex {
			display: flex;
			&.hcenter {
				justify-content: center;
			}
			&.vcenter {
				align-items: center;
			}
			&.row {
				flex-direction: row;
			}
			&.column {
				flex-direction: column;
			}
			&.gap {
				gap: 1.5em;
			}
			&.gap-md {
				gap: 1em;
			}
			&.gap-sm {
				gap: 0.5em;
			}
		}

		.flex {
			display: flex;
			&.hcenter {
				justify-content: center;
			}
			&.vcenter {
				align-items: center;
			}
			&.row {
				flex-direction: row;
			}
			&.column {
				flex-direction: column;
			}
			&.gap {
				gap: 1.5em;
			}
			&.gap-md {
				gap: 1em;
			}
			&.gap-sm {
				gap: 0.5em;
			}
		}
	`;

	return (
		<div>
			<Card type="elevated">
				<h1>M3-Dreamland Showcase</h1>
				<p>This is a showcase of the <a href="https://github.com/MercuryWorkshop/m3-dreamland" target="_blank" rel="noopener noreferrer">m3-dreamland</a> library, which implements Google's <a href="https://m3.material.io" target="_blank" rel="noopener noreferrer">Material Design 3</a> for use with the <a href="https://dreamland.js.org" target="_blank" rel="noopener noreferrer">dreamland.js</a> framework.</p>
			</Card>
			<Card type="elevated" id="reactivity">
				<h2>Reactivity</h2>
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
			<Card type="outlined" id="cards">
				<h2>Cards</h2>
				<div class="buttons">
					<CardClickable type="elevated">
						This is a card.
					</CardClickable>
					<CardClickable type="filled">
						You can click them.
					</CardClickable>
					<CardClickable type="outlined">
						This is another card.
					</CardClickable>
				</div>
			</Card>
			<Card type="elevated" id="buttons">
				<h2>Buttons</h2>
				<h3>Link</h3>
				<Card type="filled">
					<p class="buttons">
						<ButtonLink type="elevated" iconType="left" href="https://dreamland.js.org"><Icon icon={iconCode} />Dreamland</ButtonLink>
						<ButtonLink type="tonal" iconType="full" href="https://dreamland.js.org"><Icon icon={iconCode} /></ButtonLink>
					</p>
					<p class="buttons">
						<ButtonLink type="elevated" href="https://dreamland.js.org">Elevated</ButtonLink>
						<ButtonLink type="filled" href="https://dreamland.js.org">Filled</ButtonLink>
						<ButtonLink type="tonal" href="https://dreamland.js.org">Tonal</ButtonLink>
						<ButtonLink type="outlined" href="https://dreamland.js.org">Outlined</ButtonLink>
						<ButtonLink type="text" href="https://dreamland.js.org">Text</ButtonLink>
					</p>
				</Card>
				<h3>Regular</h3>
				<Card type="filled">
					<div class="buttons">
						<FAB color="primary" icon={iconCode} text="Primary" />
						<FAB color="surface" icon={iconCode} text="Surface" />
						<FAB color="secondary" icon={iconCode} text="Secondary" />
						<FAB color="tertiary" icon={iconCode} text="Teritary" />
					</div>
				</Card>
				<h3>Large</h3>
				<Card type="filled">
					<div class="buttons">
						<FAB size="large" color="primary" icon={iconCode} />
						<FAB size="large" color="surface" icon={iconCode} />
						<FAB size="large" color="secondary" icon={iconCode} />
						<FAB size="large" color="tertiary" icon={iconCode} />
					</div>
				</Card>
				<h3>Small</h3>
				<Card type="filled">
					<div class="buttons">
						<FAB size="small" color="primary" icon={iconCode} text="Primary" />
						<FAB size="small" color="surface" icon={iconCode} text="Surface" />
						<FAB size="small" color="secondary" icon={iconCode} text="Secondary" />
						<FAB size="small" color="tertiary" icon={iconCode} text="Tertiary" />
					</div>
				</Card>
			</Card>
			<Card type="filled" id="switches">
				<h2>Switches</h2>
				<p class="flex vcenter gap-md">
				<Switch></Switch> Switch
				</p>
				<p class="flex vcenter gap-md">
				<CheckboxAnim><input type="checkbox" /></CheckboxAnim> Animated Checkbox
				</p>
				<p class="flex vcenter gap-md">
				<Checkbox><input type="checkbox" /></Checkbox> Checkbox
				</p>
			</Card>
			<Card type="elevated" id="segmented">
				<h2>Segmented Controls</h2>
				<div style={`display: grid; grid-template-columns: repeat(2, 1fr); gap: 1em;`}>
					<p>
					<h3>Single-Select</h3>
					<Card type="filled">
						<p style="height: 3rem;">
							<SegmentedPlayground multiSelect={false} />
						</p>
					</Card>
					</p>
					<p>
					<h3>Multi-Select</h3>
					<Card type="filled">
						<p style="height: 3rem;">
						<SegmentedPlayground multiSelect={true} />
						</p>
					</Card>
					</p>
				</div>
			</Card>
			<Card type="elevated" id="progress">
				<h2>Progress</h2>
				{/* This doesn't work yet, since I'm obviously too retarded -- fish */}
				<span class="flex row gap-sm vcenter">
					<Button type="tonal" on:click={() => this.progress--}>-</Button>
					<span>{use`${this.progress}%`}</span>
					<Button type="filled" on:click={() => this.progress++}>+</Button>
				</span>
				<div style={`display: grid; grid-template-columns: repeat(2, 1fr); gap: 1em;`}>
					<div>
						<h3>Circular</h3>
						<Card type="filled">
							<p class="flex row gap hcenter" style="height: 3rem;">
								<span class="flex vcenter gap-sm">
									Determinate
									<CircularProgress bind:percent={use(this.progress)} />
								</span>
								<span class="flex vcenter gap-sm">
									Indeterminate
									<CircularProgressIndeterminate />
								</span>
							</p>
						</Card>
					</div>
					<div>
						<h3>Linear</h3>
						<Card type="filled">
							<p class="flex row gap hcenter" style="height: 3rem;">
								<span class="flex vcenter gap-sm">
									Determinate
									<LinearProgress bind:percent={use(this.progress)} />
								</span>
								<span class="flex vcenter gap-sm">
									Indeterminate
									<LinearProgressIndeterminate />
								</span>
							</p>
						</Card>
					</div>
				</div>
			</Card >
			<Card type="elevated">
				<h2>Options</h2>
				<ChipChooser options={[{ label: "Things", value: "op1", icon: iconCode }, { label: "More things", value: "op2", icon: iconCode }, { label: "ALL THE THINGS!!!", value: "op3", icon: iconCode }]} bind:chosenOptions={use(this.chipsChosen)}></ChipChooser>
			</Card>
		</div >
	);
};

export default Home;
