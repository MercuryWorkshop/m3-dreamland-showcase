import { Tabs, Icon, FAB, ChipChooser, CheckboxAnim, Checkbox, CircularProgress, CircularProgressIndeterminate, LinearProgress, LinearProgressIndeterminate, Card, Button, ButtonLink, Switch, CardClickable, SegmentedButtonContainer, SegmentedButtonItem, Divider, RadioAnim1, RadioAnim2, RadioAnim3, NavDrawer, NavDrawerButton, NavList, NavListButton, TextField, TextFieldMultiline, Dialog, ListItem, ListItemLabel, ListItemButton, List, ListItemCheckbox } from 'm3-dreamland';
import iconCode from '@ktibow/iconset-material-symbols/code';
import iconTriangle from '@ktibow/iconset-material-symbols/change-history-outline';
import iconSquare from '@ktibow/iconset-material-symbols/square-outline';
import iconCircle from '@ktibow/iconset-material-symbols/circle-outline';

const SegmentedPlayground: Component<{ multiSelect: boolean }, {}> = function() {
	if (this.multiSelect) {
		return (
			<div>
				<SegmentedButtonContainer>
					<SegmentedButtonItem type="checkbox" name="segmented-a" input="segmented-a-0" checked={true}>$</SegmentedButtonItem>
					<SegmentedButtonItem type="checkbox" name="segmented-a" input="segmented-a-1">$$</SegmentedButtonItem>
					<SegmentedButtonItem type="checkbox" name="segmented-a" input="segmented-a-2" disabled={true}>$$$</SegmentedButtonItem>
				</SegmentedButtonContainer>
			</div>
		)
	} else {
		return (
			<div>
				<SegmentedButtonContainer>
					<SegmentedButtonItem type="radio" name="segmented-b" input="segmented-b-0" icon={iconTriangle} checked={true}>Tab A</SegmentedButtonItem>
					<SegmentedButtonItem type="radio" name="segmented-b" input="segmented-b-1" icon={iconSquare}>Tab B</SegmentedButtonItem>
					<SegmentedButtonItem type="radio" name="segmented-b" input="segmented-b-2" icon={iconCircle} disabled={true}>Tab C</SegmentedButtonItem>
				</SegmentedButtonContainer>
			</div>
		)
	}
}

const TextfieldPlayground: Component<{}, { errored: boolean, disabled: boolean, val: string, name: string }> = function() {
	this.errored = false;
	this.disabled = false;
	this.val = "";
	this.name = "Name";
	return (
		<div>
			<div>Errored <Switch bind:checked={use(this.errored)} /></div>
			<div>Disabled <Switch bind:checked={use(this.disabled)} /></div>
			<div><TextField bind:value={use(this.name)} name="Name of textfield" /></div>
			<TextField bind:error={use(this.errored)} bind:disabled={use(this.disabled)} bind:value={use(this.val)} bind:name={use(this.name)} />
			<TextFieldMultiline bind:error={use(this.errored)} bind:disabled={use(this.disabled)} bind:value={use(this.val)} bind:name={use(this.name)} />
		</div>
	)
}

// javascript syntax for defining components
const Home: Component<{}, {
	counter: number,

	progress: number,

	chipsChosen: string[],

	currentTab0: string,
	currentTab1: string,
	currentTab2: string,

	dialogOpen: boolean,
}> = function() {
	this.counter = 0;

	this.progress = 69;

	this.chipsChosen = [];
	this.currentTab0 = "op1";
	this.currentTab1 = "op1";
	this.currentTab2 = "op1";

	this.dialogOpen = false;

	this.css = `
		font-family: 'Roboto Flex', Roboto, RobotoDraft, 'Droid Sans', system-ui, sans-serif;
		display: flex;
		flex-direction: column;
		gap: 1em;

		h1 {
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
				<p>It is based on the <a href="https://ktibow.github.io/m3-svelte" target="_blank" rel="noopener noreferrer">m3-svelte</a> project.</p>
			</Card>
			<Card type="elevated">
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
			<Card type="outlined">
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
			<Card type="elevated">
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
				<h3>MAB Regular</h3>
				<Card type="filled">
					<div class="buttons">
						<FAB color="primary" icon={iconCode} text="Primary" />
						<FAB color="surface" icon={iconCode} text="Surface" />
						<FAB color="secondary" icon={iconCode} text="Secondary" />
						<FAB color="tertiary" icon={iconCode} text="Teritary" />
					</div>
				</Card>
				<h3>MAB Large</h3>
				<Card type="filled">
					<div class="buttons">
						<FAB size="large" color="primary" icon={iconCode} />
						<FAB size="large" color="surface" icon={iconCode} />
						<FAB size="large" color="secondary" icon={iconCode} />
						<FAB size="large" color="tertiary" icon={iconCode} />
					</div>
				</Card>
				<h3>MAB Small</h3>
				<Card type="filled">
					<div class="buttons">
						<FAB size="small" color="primary" icon={iconCode} text="Primary" />
						<FAB size="small" color="surface" icon={iconCode} text="Surface" />
						<FAB size="small" color="secondary" icon={iconCode} text="Secondary" />
						<FAB size="small" color="tertiary" icon={iconCode} text="Tertiary" />
					</div>
				</Card>
			</Card>
			<Card type="elevated">
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
			<Card type="elevated">
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
			<Card type="elevated">
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
			<Card type="elevated">
				<h2>Divider</h2>
				<p>
					It's primarily their college age siblings, or the kids who graduated, are taking programming classes, and are still friends with the high school aged kids. Watching our ~40,000 kids, very few it's rarer than most people would think. I always feel the need to point it out, because everyone around where I work assumes all children from the age of 6 is some kind of super hacker. It gets super annoying talking to the teaching staff who insist their kids are geniuses because their older sibling told them to turn on airplane mode to avoid being seen in Securly Classroom.
				</p>
				<Divider inset={true} />
				<p>
					Today, I want to talk to you about our Lord and Savior, OlyB. He is the embodiment of love, compassion, and forgiveness. His teachings have the power to change lives and bring hope to those who are lost.

					OlyB's message is simple yet profound: love your neighbor as yourself, forgive those who wronged you, and seek peace in all your endeavors. He showed us that through faith and devotion, we can overcome any obstacle and find salvation in his embrace.

					But OlyB's love is not limited to a select few. He welcomes everyone, regardless of their background, race, or social status. He sees beyond our flaws and recognizes the goodness in our hearts. His grace is boundless, and his mercy is infinite.

					So, my dear brothers and sisters, let us follow OlyB's example and spread his message of love and hope to those around us. Let us be the light in the darkness and the salt of the earth. Let us embrace his teachings with open hearts and minds, and let us live our lives in accordance with his will.

					May OlyB bless us all, now and forevermore. Amen.
				</p>
				<Divider />
				<p>
					I AM FURIOUS WITH TITANIUM NETWORK FOR BREAKING THE NOW.GG ROBLOX SITE ON THEIR WEB PROXIES. I HAVE BEEN A LOYAL CUSTOMER FOR YEARS AND THIS IS UNACCEPTABLE. I HAVE CONTACTED CUSTOMER SUPPORT SEVERAL TIMES AND THEY HAVE BEEN USELESS. FIX THIS ISSUE NOW OR I WILL STOP DONATING TO THE HOLY UNBLOCKER PATREON
				</p>
			</Card>
			<Card type="elevated">
				<p>
					<div>RadioAnim1</div>
					<div class="buttons">
						<RadioAnim1><input type="radio" name="radio1" /></RadioAnim1>
						<RadioAnim1><input type="radio" name="radio1" /></RadioAnim1>
						<RadioAnim1><input type="radio" name="radio1" /></RadioAnim1>
					</div>
				</p>
				<p>
					<div>RadioAnim2</div>
					<div class="buttons">
						<RadioAnim2><input type="radio" name="radio2" /></RadioAnim2>
						<RadioAnim2><input type="radio" name="radio2" /></RadioAnim2>
						<RadioAnim2><input type="radio" name="radio2" /></RadioAnim2>
					</div>
				</p>
				<p>
					<div>RadioAnim3</div>
					<div class="buttons">
						<RadioAnim3><input type="radio" name="radio3" /></RadioAnim3>
						<RadioAnim3><input type="radio" name="radio3" /></RadioAnim3>
						<RadioAnim3><input type="radio" name="radio3" /></RadioAnim3>
					</div>
				</p>
			</Card>
			<Card type="elevated">
				<NavDrawer>
					<NavDrawerButton icon={iconCode} selected={true}>The Code 1</NavDrawerButton>
					<NavDrawerButton icon={iconCode}>The Code 2</NavDrawerButton>
					<NavDrawerButton icon={iconCode}>The Code 3</NavDrawerButton>
					<NavDrawerButton icon={iconCode}>The Code 4</NavDrawerButton>
				</NavDrawer>
			</Card>
			<Card type="elevated">
				<NavList type="auto">
					<NavListButton type="auto" icon={iconCode} selected={true}>The Code 1</NavListButton>
					<NavListButton type="auto" icon={iconCode}>The Code 2</NavListButton>
					<NavListButton type="auto" icon={iconCode}>The Code 3</NavListButton>
					<NavListButton type="auto" icon={iconCode}>The Code 4</NavListButton>
				</NavList>
			</Card>
			<Card type="elevated">
				<p>
					<Tabs items={[{ name: "Things", value: "op1", icon: iconCode }, { name: "More things", value: "op2", icon: iconCode }, { name: "ALL THE THINGS!!!", value: "op3", icon: iconCode }]} bind:tab={use(this.currentTab0)}></Tabs>
				</p>
				<p>
					<Tabs items={[{ name: "Things", value: "op1", icon: iconCode }, { name: "More things", value: "op2", icon: iconCode }, { name: "ALL THE THINGS!!!", value: "op3", icon: iconCode }]} bind:tab={use(this.currentTab1)} secondary={true}></Tabs>
				</p>
			</Card>
			<Card type="elevated">
				<TextfieldPlayground />
			</Card>
			<Card type="elevated">
				<Button type="tonal" on:click={() => { this.dialogOpen = !this.dialogOpen }}>Open dialog</Button>
				<Dialog headline="m3-dreamland... WINS!!" closeOnClick={false} bind:open={use(this.dialogOpen)}>
					<span>M3-dreamland on top!!!</span>
					<span><Button type="text" on:click={() => { this.dialogOpen = !this.dialogOpen }}>Goog..</Button></span>
				</Dialog>
			</Card>
			<Card type="elevated">
				<List>
					<ListItem headline="This is a headline" />
					<Divider />
					<ListItemLabel headline="This is an animated checkbox label headline">
						<ListItemCheckbox><CheckboxAnim><input type="checkbox" /></CheckboxAnim></ListItemCheckbox>
					</ListItemLabel>
					<Divider />
					<ListItemLabel headline="This is a checkbox label headline">
						<ListItemCheckbox><Checkbox><input type="checkbox" /></Checkbox></ListItemCheckbox>
					</ListItemLabel>
					<Divider />
					<ListItemButton headline="This is a button headline" />
				</List>
			</Card>
		</div>
	);
};

export default Home;
