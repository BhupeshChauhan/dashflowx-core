import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'gray', 'slate', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'gradient', 'glass'],
    },
    colorIntensity: {
      control: 'select',
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    },
    variant: {
      control: 'select',
      options: ['default', 'circular', 'rectangular', 'text', 'avatar'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '200px',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Skeleton Variants</h3>
        <div className="space-y-2">
          <Skeleton variant="default" width="200px" />
          <Skeleton variant="circular" width="40px" height="40px" />
          <Skeleton variant="rectangular" width="200px" height="20px" />
          <Skeleton variant="text" width="150px" />
          <Skeleton variant="avatar" width="50px" height="50px" />
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Skeleton Sizes</h3>
        <div className="space-y-2">
          <Skeleton size="sm" width="200px" />
          <Skeleton size="md" width="200px" />
          <Skeleton size="lg" width="200px" />
          <Skeleton size="xl" width="200px" />
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Skeleton Colors</h3>
        <div className="space-y-2">
          <Skeleton color="blue" colorIntensity="200" width="200px" />
          <Skeleton color="green" colorIntensity="200" width="200px" />
          <Skeleton color="red" colorIntensity="200" width="200px" />
          <Skeleton color="purple" colorIntensity="200" width="200px" />
          <Skeleton color="gradient" width="200px" />
          <Skeleton color="glass" width="200px" />
        </div>
      </div>
    </div>
  ),
};

export const ColorIntensities: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Color Intensities</h3>
        <div className="space-y-2">
          <Skeleton color="blue" colorIntensity="100" width="200px" />
          <Skeleton color="blue" colorIntensity="300" width="200px" />
          <Skeleton color="blue" colorIntensity="500" width="200px" />
          <Skeleton color="blue" colorIntensity="700" width="200px" />
          <Skeleton color="blue" colorIntensity="900" width="200px" />
        </div>
      </div>
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Animation Types</h3>
        <div className="space-y-2">
          <Skeleton animation="pulse" width="200px" />
          <Skeleton animation="wave" width="200px" />
          <Skeleton animation="none" width="200px" />
        </div>
      </div>
    </div>
  ),
};

export const CustomDimensions: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Dimensions</h3>
        <div className="space-y-2">
          <Skeleton width="300px" height="20px" />
          <Skeleton width="150px" height="40px" />
          <Skeleton width="100%" height="60px" />
          <Skeleton width={250} height={30} />
        </div>
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Card Skeleton Example</h3>
        <div className="border rounded-lg p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <Skeleton variant="avatar" width="40px" height="40px" />
            <div className="space-y-1">
              <Skeleton width="120px" height="16px" />
              <Skeleton width="80px" height="12px" />
            </div>
          </div>
          <Skeleton width="100%" height="100px" />
          <div className="flex justify-between">
            <Skeleton width="60px" height="20px" />
            <Skeleton width="80px" height="20px" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">List Skeleton Example</h3>
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton variant="circular" width="32px" height="32px" />
              <div className="flex-1 space-y-1">
                <Skeleton width="60%" height="16px" />
                <Skeleton width="40%" height="12px" />
              </div>
              <Skeleton width="60px" height="20px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">All Color Variants</h3>
        <div className="grid grid-cols-2 gap-2">
          {(['gray', 'slate', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'] as const).map(color => (
            <div key={color} className="space-y-1">
              <Skeleton 
                color={color} 
                colorIntensity="200" 
                width="100%" 
                height="20px"
              />
              <p className="text-xs text-gray-500 capitalize">{color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
