import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
	name: 'dark',
	colors: {
		primary: '#1E90FF', // Dodger Blue
		secondary: '#ADB5BD', // Grayish
		background: '#212529', // Very Dark Gray
		cardBackground: '#343A40', // Dark Gray
		text: '#F8F9FA', // Almost White
		border: '#495057', // Medium Dark Gray
		error: '#E57373', // Light Red
		hover: '#1C7ED6', // Slightly lighter blue for hover states
		success: '#28A745', // Green (same as light theme for consistency)
		warning: '#FFC107', // Yellow (same as light theme)
		info: '#17A2B8' // Teal (same as light theme)
	},
	fonts: {
		body: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		heading: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		monospace: "'Courier New', Courier, monospace"
	},
	fontSizes: {
		xs: '0.75rem', // 12px
		sm: '0.875rem', // 14px
		md: '1rem', // 16px
		lg: '1.25rem', // 20px
		xl: '1.5rem', // 24px
		xxl: '2rem' // 32px
	},
	spacing: {
		xs: '0.25rem', // 4px
		sm: '0.5rem', // 8px
		md: '1rem', // 16px
		lg: '1.5rem', // 24px
		xl: '2rem', // 32px
		xxl: '3rem' // 48px
	},
	borderRadius: {
		sm: '0.2rem', // 3.2px
		md: '0.25rem', // 4px
		lg: '0.3rem' // 4.8px
	},
	shadows: {
		sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
		md: '0 3px 6px rgba(0, 0, 0, 0.3)',
		lg: '0 10px 20px rgba(0, 0, 0, 0.4)'
	}
};
