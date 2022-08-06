/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { TimePickerModule, TimePicker } from "./";
import { TimePickerSelectModule } from "../timepicker-select";

export default {
	title: "Components/Timepicker",
	decorators: [
		moduleMetadata({
			imports: [
				TimePickerModule,
				TimePickerSelectModule,
				FormsModule,
				DocumentationModule
			]
		})
	],
	component: TimePicker
} as Meta;

const Template: Story<TimePicker> = (args) => ({
	props: args,
	template: `
		<ibm-timepicker
			(valueChange)="timePickerChange($event)"
			[(ngModel)]="model"
			[disabled]="disableTime"
			[invalid]="invalid"
			[invalidText]="invalidText"
			label="Select a time">
			<ibm-timepicker-select
				(valueChange)="timePickerSelectChange($event)"
				[disabled]="disabledSelect"
				display="inline"
				[(ngModel)]="period">
				<option selected value="AM">AM</option>
				<option value="PM">PM</option>
			</ibm-timepicker-select>
			<ibm-timepicker-select
				(valueChange)="timePickerSelectChange($event)"
				[disabled]="disabledSelect"
				display="inline"
				[(ngModel)]="timeZone">
				<option selected value="Time Zone 1">Time Zone 1</option>
				<option value="Time Zone 2">Time Zone 2</option>
			</ibm-timepicker-select>
		</ibm-timepicker>
		<br>
		<p> Input: {{model}} </p>
		<p> Period: {{period}} </p>
		<p> Time Zone: {{timeZone}} </p>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	model: "12:12",
	period: "AM",
	timeZone: "Time Zone 1",
	disableTime: false,
	disabledSelect: false,
	invalid: false,
	invalidText: "A valid value is required!"
};

Basic.argTypes = {
	timePickerChange: {
		action: "Time picker value changed!"
	},
	timePickerSelectChange: {
		action: "Time picker select change fired!"
	},
	theme: {
		options: ["light", "dark"],
		defaultValue: "dark",
		control: "radio"
	}
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_timepicker.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
