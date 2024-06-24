import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from '.';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Element/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
