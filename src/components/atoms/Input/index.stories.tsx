import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Element/Input',
  component: Input,
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
