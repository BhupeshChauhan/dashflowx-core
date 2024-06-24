import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '.';

const meta: Meta<typeof Tabs> = {
  title: 'Element/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    tabsArray: [
      {
        id: 1,
        title: 'Market',
        content: <div>Market</div>,
      },
      {
        id: 2,
        title: 'Market',
        content: <div>Market</div>,
      },
    ],
    defaultActive: 1,
  },
};
