import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { Heart, Star, ArrowRight, Plus, Settings } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'success', 'warning', 'info', 'light', 'dark', 'gradient', 'glass', 'neon', 'soft', 'bordered'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    shape: {
      control: 'select',
      options: ['default', 'rounded', 'pill', 'square', 'circle'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'success',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    variant: 'warning',
    size: 'md',
  },
};

export const Info: Story = {
  args: {
    children: 'Info Button',
    variant: 'info',
    size: 'md',
  },
};

export const Light: Story = {
  args: {
    children: 'Light Button',
    variant: 'light',
    size: 'md',
  },
};

export const Dark: Story = {
  args: {
    children: 'Dark Button',
    variant: 'dark',
    size: 'md',
  },
};

export const Gradient: Story = {
  args: {
    children: 'Gradient Button',
    variant: 'gradient',
    size: 'md',
  },
};

export const Glass: Story = {
  args: {
    children: 'Glass Button',
    variant: 'glass',
    size: 'md',
  },
};

export const Neon: Story = {
  args: {
    children: 'Neon Button',
    variant: 'neon',
    size: 'md',
  },
};

export const Soft: Story = {
  args: {
    children: 'Soft Button',
    variant: 'soft',
    size: 'md',
  },
};

export const Bordered: Story = {
  args: {
    children: 'Bordered Button',
    variant: 'bordered',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large Button',
    variant: 'primary',
    size: 'xl',
  },
};

export const TwoXL: Story = {
  args: {
    children: '2XL Button',
    variant: 'primary',
    size: '2xl',
  },
};

export const Rounded: Story = {
  args: {
    children: 'Rounded Button',
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
  },
};

export const Pill: Story = {
  args: {
    children: 'Pill Button',
    variant: 'primary',
    size: 'md',
    shape: 'pill',
  },
};

export const Square: Story = {
  args: {
    children: 'Square Button',
    variant: 'primary',
    size: 'md',
    shape: 'square',
  },
};

export const Circle: Story = {
  args: {
    children: <Heart className="w-5 h-5" />,
    variant: 'primary',
    size: 'md',
    shape: 'circle',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    size: 'md',
    icon: <Star className="w-4 h-4" />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    size: 'md',
    icon: <ArrowRight className="w-4 h-4" />,
    iconPosition: 'right',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    size: 'md',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
};

export const LinkButton: Story = {
  args: {
    children: 'Link Button',
    variant: 'primary',
    size: 'md',
    href: 'https://example.com',
    target: '_blank',
  },
};

export const SubmitButton: Story = {
  args: {
    children: 'Submit',
    variant: 'success',
    size: 'md',
    type: 'submit',
  },
};

export const ResetButton: Story = {
  args: {
    children: 'Reset',
    variant: 'outline',
    size: 'md',
    type: 'reset',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="glass">Glass</Button>
      <Button variant="neon">Neon</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="bordered">Bordered</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="xs">XS</Button>
      <Button variant="primary" size="sm">SM</Button>
      <Button variant="primary" size="md">MD</Button>
      <Button variant="primary" size="lg">LG</Button>
      <Button variant="primary" size="xl">XL</Button>
      <Button variant="primary" size="2xl">2XL</Button>
    </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" shape="default">Default</Button>
      <Button variant="primary" shape="rounded">Rounded</Button>
      <Button variant="primary" shape="pill">Pill</Button>
      <Button variant="primary" shape="square">Square</Button>
      <Button variant="primary" shape="circle" icon={<Plus className="w-5 h-5" />} />
    </div>
  ),
};

export const IconOnlyButtons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" shape="circle" size="xs" icon={<Settings className="w-4 h-4" />} />
      <Button variant="primary" shape="circle" size="sm" icon={<Settings className="w-4 h-4" />} />
      <Button variant="primary" shape="circle" size="md" icon={<Settings className="w-5 h-5" />} />
      <Button variant="primary" shape="circle" size="lg" icon={<Settings className="w-6 h-6" />} />
      <Button variant="primary" shape="circle" size="xl" icon={<Settings className="w-7 h-7" />} />
      <Button variant="primary" shape="circle" size="2xl" icon={<Settings className="w-8 h-8" />} />
    </div>
  ),
};
