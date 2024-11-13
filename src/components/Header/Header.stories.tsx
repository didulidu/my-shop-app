import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';

const meta: Meta = {
	title: 'Components/Header',
	component: Header,
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
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</ThemeProvider>
	)
};
