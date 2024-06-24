import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Element/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Checkbox',
    checked: true,
    variant: 'basic',
  },
};

export const One: Story = {
  args: {
    label: 'Checkbox',
    checked: true,
    variant: 'one',
  },
};
