import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from '.';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Element/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
