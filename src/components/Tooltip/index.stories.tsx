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

export const WhiteBackground: Story = {
  args: {
    tooltipTrigger: <Button variant="outline">White Background</Button>,
    tooltipContent: <p>This tooltip has a default white background</p>,
  },
};

export const CustomStyling: Story = {
  args: {
    tooltipTrigger: <Button variant="outline">Custom Styled</Button>,
    tooltipContent: <p>Custom styled tooltip</p>,
    className: 'bg-blue-50 text-blue-800 border-blue-200',
  },
};

export const AllSides: Story = {
  args: {
    tooltipTrigger: <Button variant="outline">All Sides</Button>,
    tooltipContent: <p>Tooltip appears on different sides</p>,
  },
  render: (args) => (
    <div className="flex gap-4 p-8">
      <Tooltip {...args} side="top" tooltipTrigger={<button>Top</button>} tooltipContent="Top tooltip" />
      <Tooltip {...args} side="right" tooltipTrigger={<button>Right</button>} tooltipContent="Right tooltip" />
      <Tooltip {...args} side="bottom" tooltipTrigger={<button>Bottom</button>} tooltipContent="Bottom tooltip" />
      <Tooltip {...args} side="left" tooltipTrigger={<button>Left</button>} tooltipContent="Left tooltip" />
    </div>
  ),
};
