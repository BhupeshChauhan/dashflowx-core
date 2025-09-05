import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '.';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Element/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    actionButton: 'Open Dropdown',
    dropdownItems: [
      {
        type: 'label',
        title: 'Title',
      },
    ],
  },
};
