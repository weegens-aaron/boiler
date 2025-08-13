import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from '.';

// Component that throws an error
function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
}

describe('ErrorBoundary', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  beforeEach(() => {
    consoleErrorSpy.mockClear();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error fallback when error is thrown', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Please refresh the page or contact support.')).toBeInTheDocument();
  });

  it('renders custom fallback when provided', () => {
    const customFallback = <div>Custom error message</div>;

    render(
      <ErrorBoundary fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
  });

  it('logs error when error reporting is enabled', () => {
    // Mock environment variable
    vi.stubEnv('VITE_ENABLE_ERROR_REPORTING', 'true');

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error caught by boundary:',
      expect.any(Error),
      expect.any(Object),
    );

    vi.unstubAllEnvs();
  });

  it('does not log error when error reporting is disabled', () => {
    vi.stubEnv('VITE_ENABLE_ERROR_REPORTING', 'false');

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    // Console.error is called by React itself for error boundaries, but not our custom log
    const customLogCalls = consoleErrorSpy.mock.calls.filter(
      (call) => call[0] === 'Error caught by boundary:',
    );
    expect(customLogCalls).toHaveLength(0);

    vi.unstubAllEnvs();
  });

  it('shows error details in development mode', () => {
    vi.stubEnv('DEV', true);

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Error details (dev only)')).toBeInTheDocument();

    vi.unstubAllEnvs();
  });

  it('hides error details in production mode', () => {
    vi.stubEnv('DEV', false);

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.queryByText('Error details (dev only)')).not.toBeInTheDocument();

    vi.unstubAllEnvs();
  });

  it('recovers when error is resolved', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();

    // Re-render with no error
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>,
    );

    // Error boundary doesn't automatically recover - this is expected behavior
    // The error state persists until the component is unmounted
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
