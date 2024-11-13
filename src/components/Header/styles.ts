import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background-color: ${({ theme }) => theme.colors.background};
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
`;

export const StyledLogoImage = styled.img<{ height?: string; width?: string }>`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`;