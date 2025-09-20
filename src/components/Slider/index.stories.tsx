import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Element/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value of the slider',
    },
    defaultValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Default value of the slider',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step size',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the slider',
    },
    inverted: {
      control: 'boolean',
      description: 'Whether the slider is inverted',
    },
    showLabels: {
      control: 'boolean',
      description: 'Whether to show labels',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show current value',
    },
    showTicks: {
      control: 'boolean',
      description: 'Whether to show tick marks',
    },
    tickCount: {
      control: 'number',
      description: 'Number of tick marks',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    valueLabel: {
      control: 'text',
      description: 'Custom value label',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
};

export const WithLabels: Story = {
  args: {
    defaultValue: [75],
    min: 0,
    max: 100,
    step: 1,
    showLabels: true,
    label: 'Volume',
    showValue: true,
    valueLabel: '75%',
  },
};

export const WithTicks: Story = {
  args: {
    defaultValue: [60],
    min: 0,
    max: 100,
    step: 10,
    showTicks: true,
    tickCount: 6,
    showLabels: true,
    label: 'Temperature',
    showValue: true,
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Slider size="sm" defaultValue={[50]} showLabels label="Small" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium</h3>
        <Slider size="md" defaultValue={[50]} showLabels label="Medium" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Slider size="lg" defaultValue={[50]} showLabels label="Large" />
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Slider variant="default" defaultValue={[50]} showLabels label="Default" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Primary</h3>
        <Slider variant="primary" defaultValue={[50]} showLabels label="Primary" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Success</h3>
        <Slider variant="success" defaultValue={[50]} showLabels label="Success" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Warning</h3>
        <Slider variant="warning" defaultValue={[50]} showLabels label="Warning" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Error</h3>
        <Slider variant="error" defaultValue={[50]} showLabels label="Error" />
      </div>
    </div>
  ),
};

export const RangeSlider: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
    step: 1,
    showLabels: true,
    label: 'Price Range',
    showValue: true,
    showTicks: true,
    tickCount: 5,
  },
};

export const VerticalSlider: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: 'vertical',
    showLabels: true,
    label: 'Height',
    showValue: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [60],
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    showLabels: true,
    label: 'Disabled',
    showValue: true,
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    
    return (
      <div className="space-y-4 w-80">
        <Slider
          value={value}
          onValueChange={setValue}
          min={0}
          max={100}
          step={1}
          showLabels
          label="Interactive Slider"
          showValue
          showTicks
          tickCount={6}
          variant="primary"
        />
        <div className="text-sm text-gray-600">
          Current value: {value[0]}
        </div>
      </div>
    );
  },
};