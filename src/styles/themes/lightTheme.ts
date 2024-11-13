import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
	name: 'light',
	colors: {
		primary: '#007BFF',
		secondary: '#6C757D',
		background: '#FFFFFF',
		cardBackground: '#F8F9FA',
		text: '#212529',
		border: '#DEE2E6',
		error: '#DC3545',
		hover: '#0056b3',
		success: '#28A745',
		warning: '#FFC107',
		info: '#17A2B8'
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
		sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
		md: '0 3px 6px rgba(0, 0, 0, 0.1)',
		lg: '0 10px 20px rgba(0, 0, 0, 0.15)'
	}
};
