import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '.';

const meta: Meta<typeof Toggle> = {
  title: 'Element/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: 'Text Area',
  },
};
