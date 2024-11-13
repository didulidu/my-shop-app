import { renderHook, act } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';
import { items } from '../mocks/items';

const localStorageMock = (() => {
	let store: { [key: string]: string } = {};
	return {
		getItem: (key: string) => store[key] || null,
		setItem: (key: string, value: string) => {
			store[key] = value;
		},
		clear: () => {
			store = {};
		},
		removeItem: (key: string) => {
			delete store[key];
		}
	};
})();

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock
});

describe('useLocalStorage', () => {
	beforeEach(() => {
		window.localStorage.clear();
	});

	test('should initialize with the initial value if localStorage is empty', () => {
		const { result } = renderHook(() => useLocalStorage('items', '[]'));
		const [storedValue] = result.current;
		expect(storedValue).toBe('[]');
	});

	test('should initialize with the value from localStorage if present', () => {
		window.localStorage.setItem('testKey', 'storedValue');
		const { result } = renderHook(() =>
			useLocalStorage('items', JSON.stringify(items))
		);
		const [storedValue] = result.current;
		expect(storedValue).toBe(JSON.stringify(items));
	});

	test('should update localStorage when the value is updated', () => {
		const { result } = renderHook(() =>
			useLocalStorage('items', JSON.stringify(items))
		);
		const [, setStoredValue] = result.current;

		act(() => {
			setStoredValue('Something else');
		});

		expect(window.localStorage.getItem('items')).toBe('"Something else"');
	});

	test('should handle JSON parse errors gracefully', () => {
		window.localStorage.setItem('testKey', 'invalidJSON');
		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'initialValue')
		);
		const [storedValue] = result.current;
		expect(storedValue).toBe('initialValue');
	});

	test('should warn on localStorage setItem errors', () => {
		jest.spyOn(console, 'warn').mockImplementation(() => {});
		jest.spyOn(window.localStorage, 'setItem').mockImplementation(() => {
			throw new Error('localStorage error');
		});

		const { result } = renderHook(() =>
			useLocalStorage('testKey', 'something')
		);
		const [, setStoredValue] = result.current;

		act(() => {
			setStoredValue('something new');
		});

		expect(console.warn).toHaveBeenCalledWith(
			'Error setting localStorage key “testKey”:',
			expect.any(Error)
		);
	});
});
