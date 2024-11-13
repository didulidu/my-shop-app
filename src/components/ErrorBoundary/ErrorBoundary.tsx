import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
	fallbackUI: ReactNode;
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = { hasError: false };

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Error caught by ErrorBoundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallbackUI;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
