import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '.';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Element/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    tooltipTrigger: <Button variant="outline">Hover</Button>,
    tooltipContent: <p>Add to library</p>,
  },
};

export const Right: Story = {
  args: {
    tooltipTrigger: <Button variant="outline">Hover</Button>,
    tooltipContent: <p>Add to library</p>,
    side: 'right',
  },
};
