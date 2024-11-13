import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => props.theme.spacing.md};
	border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.colors.text};
	font-size: ${(props) => props.theme.fontSizes.lg};
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.hover};
	}
`;

export const Content = styled.div`
	flex: 1;
	overflow-y: auto;
	padding: ${(props) => props.theme.spacing.md};
`;

export const Footer = styled.div`
	padding: ${(props) => props.theme.spacing.md};
	border-top: 1px solid ${(props) => props.theme.colors.border};
`;

interface StyledSidebarProps {
	show: boolean;
}

export const StyledSidebar = styled.div<StyledSidebarProps>`
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 300px;
	background-color: ${(props) => props.theme.colors.cardBackground};
	box-shadow: -2px 0 5px ${(props) => props.theme.colors.border};
	transform: translateX(${(props) => (props.show ? '0%' : '100%')});
	transition: transform 0.3s ease-in-out;
	display: flex;
	flex-direction: column;
	color: ${(props) => props.theme.colors.text};
	font-family: ${(props) => props.theme.fonts.body};
	z-index: 1001; /* Higher than overlay */
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
`;
