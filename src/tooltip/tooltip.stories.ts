/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { TooltipModule, Tooltip } from "./";

export default {
	title: "Components/Tooltip",
	decorators: [
		moduleMetadata({
			imports: [TooltipModule, DocumentationModule]
		})
	],
	args: {
		isOpen: true,
		caret: true,
		description: "Occassionally, services are updated in a specified time window to ensure no down time for customers."
	},
	argTypes: {
		onOpen: {
			control: "Opened!"
		},
		onClose: {
			control: "Closed!"
		},
		isOpenChange: {
			control: "Is Open Change!"
		},
		align: {
			options: [
				"top",
				"top-left",
				"top-right",
				"bottom",
				"bottom-left",
				"bottom-right",
				"left",
				"left-bottom",
				"left-top",
				"right",
				"right-bottom",
				"right-top"
			],
			defaultValue: "bottom",
			control: "select"
		}
	},
	component: Tooltip
} as Meta;

const Template: Story<Tooltip> = (args) => ({
	props: args,
	template: `
		<div class="container">
			<ibm-tooltip
				[isOpen]="isOpen"
				[caret]="caret"
				[align]="align"
				(onOpen)="onOpen($event)"
				(onClose)="onClose($event)"
				(isOpenChange)="isOpenChange($event)"
				[description]="description">
				<button type="button" class="tooltip-trigger">
					<svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
						<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path>
					</svg>
				</button>
			</ibm-tooltip>
		</div>
	`,
	styles: [`
		.container {
			width: 100%;
			height: 300px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.tooltip-trigger {
			box-sizing: border-box;
			margin: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 2rem;
			height: 2rem;
			background: white;
			border: 1px solid var(--cds-border-subtle);
			cursor: pointer;
		}
		svg { fill: var(--cds-background-inverse); }
	`]
});
export const Basic = Template.bind({});

const EllipsesTemplate: Story<Tooltip> = (args) => ({
	props: args,
	template: `
		<div class="container">
			<ibm-tooltip
				[isOpen]="isOpen"
				[caret]="caret"
				[align]="align"
				description="Tooltip for ellipsis because I can and I am really really long">
				<span class="overflowText">
					Tooltip for ellipsis because I can and I am really really long
				</span>
			</ibm-tooltip>
		</div>
	`,
	styles: [`
		.container {
			width: 100%;
			height: 300px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.overflowText {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			width: 100px;
			display: inline-block;
		}
	`]
});
export const Ellipses = EllipsesTemplate.bind({});
Ellipses.argTypes = {
	description: {
		control: false
	}
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_tooltip.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
