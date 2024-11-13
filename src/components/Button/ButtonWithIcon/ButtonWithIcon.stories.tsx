import type { Meta, StoryObj } from '@storybook/react';
import ButtonWithIcon from './ButtonWithIcon';
import { ButtonWithIconProps } from '../types';
import { StyledMoonIcon } from '../../ThemeButton/styles';

const meta: Meta<ButtonWithIconProps> = {
	title: 'Components/ButtonWithIcon',
	component: ButtonWithIcon,
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary']
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large']
		},
		$iconPosition: {
			control: 'radio',
			options: ['left', 'right'],
			name: 'Icon Position'
		},
		children: {
			control: 'text',
			defaultValue: 'Button with Icon'
		},
		onClick: { action: 'clicked' }
	}
};

export default meta;

type Story = StoryObj<ButtonWithIconProps>;

export const Default: Story = {
	args: {
		variant: 'primary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Primary Button'
	}
};

export const PrimaryLeft: Story = {
	args: {
		variant: 'primary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Primary Left'
	}
};

export const SecondaryLeft: Story = {
	args: {
		variant: 'secondary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Secondary Left'
	}
};

export const TertiaryLeft: Story = {
	args: {
		variant: 'tertiary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Tertiary Left'
	}
};

export const PrimaryRight: Story = {
	args: {
		variant: 'primary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'right',
		children: 'Primary Right'
	}
};

export const SecondaryRight: Story = {
	args: {
		variant: 'secondary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'right',
		children: 'Secondary Right'
	}
};

export const TertiaryRight: Story = {
	args: {
		variant: 'tertiary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'right',
		children: 'Tertiary Right'
	}
};

export const SmallLeft: Story = {
	args: {
		variant: 'primary',
		size: 'small',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Small Left'
	}
};

export const LargeRight: Story = {
	args: {
		variant: 'primary',
		size: 'large',
		icon: <StyledMoonIcon />,
		$iconPosition: 'right',
		children: 'Large Right'
	}
};

export const Disabled: Story = {
	args: {
		variant: 'primary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Disabled Button',
		disabled: true
	}
};

export const Loading: Story = {
	args: {
		variant: 'primary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Loading...'
	}
};

export const FullWidth: Story = {
	args: {
		variant: 'primary',
		size: 'medium',
		icon: <StyledMoonIcon />,
		$iconPosition: 'left',
		children: 'Full Width Button',
		$fullWidth: true
	}
};
