import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '.';

const meta: Meta<typeof Calendar> = {
  title: 'Element/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    mode: 'default',
    date: new Date(),
    setDate: () => {},
    className: '',
  },
};
