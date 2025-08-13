import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { ErrorBoundary } from '.';

const meta = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A production-ready error boundary component that catches JavaScript errors in child components and displays a fallback UI.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'React components to be wrapped by the error boundary',
      control: false,
    },
    fallback: {
      description: 'Custom fallback UI to display when an error is caught',
      control: false,
    },
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

// Component that can throw an error on demand
function ErrorTrigger() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Storybook test error!');
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Error Boundary Demo</h2>
      <p>Click the button to trigger an error</p>
      <button
        onClick={() => {
          setShouldError(true);
        }}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#3182ce',
          color: 'white',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontWeight: '500'
        }}
      >
        Trigger Error
      </button>
    </div>
  );
}

export const Default: Story = {
  name: 'Working State',
  args: {
    children: 'Placeholder - see render function',
  },
  render: () => (
    <ErrorBoundary>
      <div style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Protected Content</h2>
        <p>This content is wrapped in an ErrorBoundary.</p>
        <p>If an error occurs, it will be caught and displayed gracefully.</p>
      </div>
    </ErrorBoundary>
  ),
};

export const WithError: Story = {
  name: 'Interactive Error Trigger',
  args: {
    children: 'Placeholder - see render function',
  },
  render: () => (
    <ErrorBoundary>
      <ErrorTrigger />
    </ErrorBoundary>
  ),
};

export const CustomFallback: Story = {
  name: 'Custom Error Fallback',
  args: {
    children: 'Placeholder - see render function',
  },
  render: () => (
    <ErrorBoundary
      fallback={
        <div style={{ padding: '2rem', background: '#fee', borderRadius: '8px' }}>
          <h2>🚨 Custom Error Handler</h2>
          <p>This is a custom error fallback component.</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload Page
          </button>
        </div>
      }
    >
      <ErrorTrigger />
    </ErrorBoundary>
  ),
};
