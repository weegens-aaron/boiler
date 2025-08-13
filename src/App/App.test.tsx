import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from '.';

describe('App', () => {
  beforeEach(() => {
    // Reset any side effects between tests
    document.body.innerHTML = '';
  });

  it('renders configuration test app heading', () => {
    render(<App />);
    expect(screen.getByText('Configuration Test App')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<App />);
    expect(
      screen.getByText(/This minimal app tests our production configuration/),
    ).toBeInTheDocument();
  });

  it('increments counter when increment button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    const incrementButton = screen.getByTestId('increment-button');
    await user.click(incrementButton);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements counter when decrement button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByTestId('increment-button');
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByText('Count: 2')).toBeInTheDocument();

    const decrementButton = screen.getByTestId('decrement-button');
    await user.click(decrementButton);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('resets counter when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const incrementButton = screen.getByTestId('increment-button');
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByText('Count: 3')).toBeInTheDocument();

    const resetButton = screen.getByTestId('reset-button');
    await user.click(resetButton);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('throws error when error button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const errorButton = screen.getByTestId('error-button');

    // This will throw an error that should be caught by error boundary in real app
    await expect(async () => {
      await user.click(errorButton);
      render(<App />); // Re-render to trigger the error
    }).rejects.toThrow('Test error boundary');
  });

  it('displays environment information', () => {
    render(<App />);
    expect(screen.getByText(/Environment:/)).toBeInTheDocument();
  });
});
