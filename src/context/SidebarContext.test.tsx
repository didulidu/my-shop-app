import { renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SidebarProvider, useSidebar } from './SidebarContext';

describe('SidebarContext', () => {
	test('should toggle sidebar open and closed without rendering components', () => {
		const { result } = renderHook(() => useSidebar(), {
			wrapper: SidebarProvider
		});

		expect(result.current.isSidebarOpen).toBe(false);

		act(() => {
			result.current.toggleSidebar();
		});
		expect(result.current.isSidebarOpen).toBe(true);

		act(() => {
			result.current.toggleSidebar();
		});
		expect(result.current.isSidebarOpen).toBe(false);
	});
});
