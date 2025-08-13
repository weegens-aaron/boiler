import type { Meta, StoryObj } from '@storybook/react-vite';

import { App } from '.';

const meta = {
  title: 'Components/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default App',
};
