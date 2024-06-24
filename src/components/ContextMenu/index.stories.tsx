import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from '.';

const meta: Meta<typeof ContextMenu> = {
  title: 'Element/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    childern: 'Open ContextMenu',
    items: [
      {
        type: 'label',
        title: 'Label',
      },
      {
        type: 'seperator',
      },
      {
        type: 'subMenu',
        title: 'Sub Menu',
        children: [
          {
            title: 'Sub Menu Item',
          },
          {
            title: 'Sub Menu Item',
          },
        ],
      },
      {
        type: 'radio',
        title: 'Radio',
        children: [
          {
            title: 'Radio Item',
          },
          {
            title: 'Radio Item',
          },
        ],
      },
      {
        type: 'checkbox',
        title: 'Checkbox',
        checked: true,
      },
    ],
  },
};
