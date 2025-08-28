import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'Element/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'container', 'card', 'spacing', 'flex', 'grid', 'responsive', 'interactive', 'gradient', 'animated'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    boxItem: 'Basic Box Content',
    className: 'bg-gray-100',
  },
};

export const Container: Story = {
  args: {
    variant: 'container',
    boxItem: 'Container Box with auto margins and padding',
  },
};

export const Card: Story = {
  args: {
    variant: 'card',
    boxItem: 'Card Box with shadow and hover effects',
  },
};

export const Spacing: Story = {
  args: {
    variant: 'spacing',
    boxItem: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </>
    ),
  },
};

export const Flex: Story = {
  args: {
    variant: 'flex',
    boxItem: (
      <>
        <span>Left</span>
        <span>Center</span>
        <span>Right</span>
      </>
    ),
  },
};

export const Grid: Story = {
  args: {
    variant: 'grid',
    boxItem: (
      <>
        <div className="bg-blue-100 p-2">Grid Item 1</div>
        <div className="bg-green-100 p-2">Grid Item 2</div>
        <div className="bg-yellow-100 p-2">Grid Item 3</div>
        <div className="bg-red-100 p-2">Grid Item 4</div>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    variant: 'responsive',
    boxItem: 'Responsive Box with different padding on different screen sizes',
  },
};

export const Interactive: Story = {
  args: {
    variant: 'interactive',
    boxItem: 'Interactive Box with hover effects',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    boxItem: 'Gradient Box with beautiful colors',
  },
};

export const Animated: Story = {
  args: {
    variant: 'animated',
    boxItem: 'Animated Box with scale and shadow transitions',
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Box variant="card" size="sm" boxItem="Small Box" />
      <Box variant="card" size="md" boxItem="Medium Box" />
      <Box variant="card" size="lg" boxItem="Large Box" />
      <Box variant="card" size="xl" boxItem="Extra Large Box" />
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    variant: 'card',
    size: 'lg',
    className: 'border-2 border-blue-500 bg-blue-50',
    boxItem: 'Custom styled box with additional classes',
  },
};
