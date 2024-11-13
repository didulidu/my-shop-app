import { Moon, Sunny } from 'react-ionicons';
import styled from 'styled-components';

export const StyledMoonIcon = styled(Moon).attrs(({ theme }) => ({
	color: theme.colors.warning,
	'data-testid': 'moon-icon'
}))``;
export const StyledSunIcon = styled(Sunny).attrs(({ theme }) => ({
	color: theme.colors.warning,
	'data-testid': 'sun-icon'
}))``;
