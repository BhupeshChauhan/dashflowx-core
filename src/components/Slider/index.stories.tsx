import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Element/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
