import type { Meta, StoryObj } from '@storybook/react';
import { Input2 } from '.';

const meta: Meta<typeof Input2> = {
  title: 'Element/Input2',
  component: Input2,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    lable: 'Your Email',
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'name@company.com',
  },
};

export const Fullwidth: Story = {
  args: {
    lable: 'Your Email',
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'name@company.com',
    fullwidth: true,
    required: true,
  },
};
