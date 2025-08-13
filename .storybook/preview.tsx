import type { Decorator, Preview } from '@storybook/react-vite';

// Import the necessary CSS files
import '../src/index.css';

// Create a decorator that wraps all stories with a basic container
const withContainer: Decorator = (Story) => (
  <div style={{ padding: '1rem' }}>
    <Story />
  </div>
);

const preview: Preview = {
  decorators: [withContainer],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
