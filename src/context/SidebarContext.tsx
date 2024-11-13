import {
	createContext,
	useState,
	useCallback,
	useContext,
	ReactNode
} from 'react';

interface SidebarContextProps {
	isSidebarOpen: boolean;
	toggleSidebar: (show?: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
	isSidebarOpen: false,
	toggleSidebar: () => {}
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	const toggleSidebar = useCallback((show?: boolean) => {
		if (show !== undefined) {
			setIsSidebarOpen(show);
			return;
		}

		setIsSidebarOpen((prev) => !prev);
	}, []);

	return (
		<SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebar = () => useContext(SidebarContext);
