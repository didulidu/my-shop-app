import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';
import { ThemeProvider } from '../../context/ThemeContext';

const meta: Meta = {
	title: 'Components/ErrorMessage',
	component: ErrorMessage,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<div style={{ padding: '20px' }}>
					<Story />
				</div>
			</ThemeProvider>
		)
	],
	argTypes: {
		children: {
			control: 'text',
			defaultValue: 'This is an error message.'
		}
	}
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	args: {
		children: 'This is an error message.'
	}
};
