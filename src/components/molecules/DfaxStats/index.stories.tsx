import type { Meta, StoryObj } from '@storybook/react';
import { DfaxStats } from '.';

const meta: Meta<typeof DfaxStats> = {
  title: 'Components/DfaxStats',
  component: DfaxStats,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    statsArray: [
      {
        id: 1,
        stat: '90%',
        label: 'POWERFUL CUSTOMIZATION',
      },
      {
        id: 2,
        stat: '2.5X',
        label: 'FASTER DEVELOPMENT',
      },
      {
        id: 2,
        stat: '100+',
        label: 'Pre-made Components',
      },
    ],
    varient: 'one',
  },
};
