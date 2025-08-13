import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('Test error boundary');
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ 
        border: '1px solid #e1e5e9', 
        borderRadius: '8px', 
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: '600' }}>Configuration Test App</h1>
        <p style={{ margin: '0 0 2rem 0', lineHeight: '1.5', color: '#4a5568' }}>
          This minimal app tests our production configuration including TypeScript, Vite, Testing,
          Storybook, and Playwright.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>Counter Test</h2>
          <p style={{ margin: '0 0 1rem 0', lineHeight: '1.5', color: '#4a5568' }}>Count: {count}</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              data-testid="increment-button"
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
              Increment
            </button>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
              data-testid="decrement-button"
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
              Decrement
            </button>
            <button
              onClick={() => {
                setCount(0);
              }}
              data-testid="reset-button"
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #cbd5e0',
                borderRadius: '4px',
                backgroundColor: 'white',
                color: '#4a5568',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>Error Boundary Test</h2>
          <button
            onClick={() => {
              setError(true);
            }}
            data-testid="error-button"
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              backgroundColor: '#f7fafc',
              color: '#4a5568',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Trigger Error
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p style={{ margin: '0', fontSize: '0.875rem', color: '#718096' }}>
            Environment: {import.meta.env.MODE} | Version:{' '}
            {import.meta.env.VITE_APP_VERSION || 'dev'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
