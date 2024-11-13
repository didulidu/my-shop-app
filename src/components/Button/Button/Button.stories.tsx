import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from '../types';

const meta: Meta<ButtonProps> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary']
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large']
		},
		onClick: { action: 'clicked' }
	}
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button'
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Button'
	}
};

export const Tertiary: Story = {
	args: {
		variant: 'tertiary',
		children: 'Button'
	}
};

export const Small: Story = {
	args: {
		size: 'small',
		children: 'Button'
	}
};

export const Medium: Story = {
	args: {
		size: 'medium',
		children: 'Button'
	}
};

export const Large: Story = {
	args: {
		size: 'large',
		children: 'Button'
	}
};

export const PrimarySmall: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		size: 'small'
	}
};

export const SecondaryLarge: Story = {
	args: {
		variant: 'secondary',
		children: 'Button',
		size: 'large'
	}
};
