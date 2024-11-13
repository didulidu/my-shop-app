import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Sidebar, { SidebarProps } from './Sidebar';
import { action } from '@storybook/addon-actions';

const meta: Meta<SidebarProps> = {
	title: 'Components/Sidebar',
	component: Sidebar,
	decorators: [
		(Story) => (
			<div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
				<Story />
			</div>
		)
	],
	argTypes: {
		title: {
			control: 'text',
			defaultValue: 'Sidebar Title'
		},
		footer: {
			control: 'text',
			defaultValue: 'This is the footer content.'
		},
		children: {
			control: 'text',
			defaultValue: 'This is the main content of the sidebar.'
		},
		onClose: {
			action: 'closed'
		}
	}
};

export default meta;

type Story = StoryObj<SidebarProps>;

export const Toggleable: Story = {
	render: (args) => {
		const [isVisible, setIsVisible] = useState<boolean>(false);

		const handleToggle = () => {
			setIsVisible((prev) => !prev);
		};

		return (
			<div>
				<button onClick={handleToggle}>
					{isVisible ? 'Hide Sidebar' : 'Show Sidebar'}
				</button>
				<Sidebar
					{...args}
					show={isVisible}
					onClose={() => {
						setIsVisible(false);
						action('close button clicked')();
					}}
				/>
			</div>
		);
	},
	args: {
		title: 'Toggleable Sidebar',
		footer: 'Footer Content',
		children: 'This is the content inside the sidebar.'
	}
};
