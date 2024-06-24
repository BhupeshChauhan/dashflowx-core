import type { Meta, StoryObj } from '@storybook/react';
import { Command } from '.';

const meta: Meta<typeof Command> = {
  title: 'Element/Command',
  component: Command,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    suggestionsItems: [
      {
        title: 'Command 1',
        shortcut: 'C1',
      },
      {
        title: 'Command 2',
        shortcut: 'C2',
      },
    ],
    items: [
      {
        title: 'Settings',
        childs: [
          {
            title: 'Command 3',
            shortcut: 'C3',
          },
          {
            title: 'Command 4',
            shortcut: 'C4',
          },
        ],
      },
      {
        title: 'Help',
        childs: [
          {
            title: 'Command 5',
            shortcut: 'C5',
          },
          {
            title: 'Command 6',
            shortcut: 'C6',
          },
        ],
      },
    ],
  },
};
