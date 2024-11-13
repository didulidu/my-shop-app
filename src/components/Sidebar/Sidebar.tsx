import React from 'react';
import { H2 } from '../Typography';
import {
	CloseButton,
	Content,
	Footer,
	Header,
	Overlay,
	StyledSidebar
} from './styles';

export interface SidebarProps {
	show: boolean;
	onClose: () => void;
	title: string;
	footer?: React.ReactNode;
	children: React.ReactNode;
}

const Sidebar = ({ show, onClose, title, footer, children }: SidebarProps) => {
	let touchStartX = 0;
	let touchCurrentX = 0;

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchCurrentX = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (touchStartX < touchCurrentX && touchCurrentX - touchStartX > 50) {
			onClose();
		}
	};

	return (
		<>
			{show && <Overlay onClick={onClose} />}
			<StyledSidebar
				show={show}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<Header>
					<H2>{title}</H2>
					<CloseButton name="close" role="button" onClick={onClose}>
						&times;
					</CloseButton>
				</Header>
				<Content>{children}</Content>
				{footer && <Footer>{footer}</Footer>}
			</StyledSidebar>
		</>
	);
};

export default Sidebar;
