import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '.';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: 'Grid',
  },
};
