import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error reporting service in production
    if (import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true') {
      console.error('Error caught by boundary:', error, errorInfo);
      // TODO: Send to error reporting service
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div role="alert" style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Something went wrong</h2>
            <p>Please refresh the page or contact support.</p>
            {import.meta.env.DEV && this.state.error && (
              <details style={{ marginTop: '20px', textAlign: 'left' }}>
                <summary>Error details (dev only)</summary>
                <pre>{this.state.error.stack}</pre>
              </details>
            )}
          </div>
        )
      );
    }

    return this.props.children;
  }
}
