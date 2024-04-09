import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta: Meta<typeof Typography> = {
  title: 'Element/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: 'h1',
    children:
      'be parts correct potatoes sides donkey extra climate happily freedom relationship tape unit tall hung call cat window steady world front graph particular pick',
  },
};
