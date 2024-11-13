import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';
import { ThemeProvider } from '../../context/ThemeContext';

const meta: Meta = {
	title: 'Components/Loader',
	component: Loader,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<div
					style={{
						padding: '20px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh'
					}}
				>
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
			<Loader />
		</ThemeProvider>
	)
};
