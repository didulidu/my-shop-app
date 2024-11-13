import type { Meta, StoryObj } from '@storybook/react';
import ThemeButton from './ThemeButton';
import { ThemeProvider } from '../../context/ThemeContext';

const meta: Meta = {
	title: 'Components/ThemeButton',
	component: ThemeButton,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<div style={{ padding: '20px' }}>
					<Story />
				</div>
			</ThemeProvider>
		)
	]
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<ThemeProvider>
			<ThemeButton />
		</ThemeProvider>
	)
};
