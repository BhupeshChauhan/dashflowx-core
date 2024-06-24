import type { Meta, StoryObj } from '@storybook/react';
import { DropDownMenu } from '.';

const meta: Meta<typeof DropDownMenu> = {
  title: 'Element/DropDownMenu',
  component: DropDownMenu,
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
