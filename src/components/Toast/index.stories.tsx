import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProviderWrapper } from '.';

const meta: Meta<typeof Toast> = {
  title: 'Element/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Toast title',
    },
    description: {
      control: 'text',
      description: 'Toast description',
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      description: 'Toast variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Toast size',
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds',
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Whether to auto-dismiss the toast',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Basic Toast',
    description: 'This is a basic toast message.',
    variant: 'default',
    size: 'md',
    children: 'Show Basic Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const Success: Story = {
  args: {
    title: 'Success!',
    description: 'Your action was completed successfully.',
    variant: 'success',
    size: 'md',
    children: 'Show Success Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const Error: Story = {
  args: {
    title: 'Error!',
    description: 'Something went wrong. Please try again.',
    variant: 'destructive',
    size: 'md',
    children: 'Show Error Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const Warning: Story = {
  args: {
    title: 'Warning!',
    description: 'Please check your input before proceeding.',
    variant: 'warning',
    size: 'md',
    children: 'Show Warning Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const Info: Story = {
  args: {
    title: 'Information',
    description: 'Here is some useful information for you.',
    variant: 'info',
    size: 'md',
    children: 'Show Info Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const WithAction: Story = {
  args: {
    title: 'Scheduled: Catch up',
    description: 'Friday, February 10, 2023 at 5:57 PM',
    variant: 'default',
    size: 'md',
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo clicked'),
      variant: 'default',
    },
    children: 'Show Action Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const SmallSize: Story = {
  args: {
    title: 'Small Toast',
    description: 'This is a small toast.',
    variant: 'default',
    size: 'sm',
    children: 'Show Small Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const LargeSize: Story = {
  args: {
    title: 'Large Toast',
    description: 'This is a large toast with more content and padding.',
    variant: 'default',
    size: 'lg',
    children: 'Show Large Toast',
  },
  render: (args) => (
    <ToastProviderWrapper>
      <Toast {...args} />
    </ToastProviderWrapper>
  ),
};

export const LongDuration: Story = {
  args: {
    title: 'Long Duration',
    description: 'This toast will stay for 10 seconds.',
    variant: 'info',
    size: 'md',
    duration: 10000,
    children: 'Show Long Duration Toast',
  },
};

export const NoAutoDismiss: Story = {
  args: {
    title: 'Persistent Toast',
    description: 'This toast will not auto-dismiss.',
    variant: 'warning',
    size: 'md',
    autoDismiss: false,
    children: 'Show Persistent Toast',
  },
};



export const CustomStyling: Story = {
  args: {
    title: 'Custom Styled',
    description: 'This toast has custom styling.',
    variant: 'default',
    size: 'md',
    className: 'border-2 border-purple-300 bg-purple-50 text-purple-800',
    children: 'Show Custom Styled Toast',
  },
};
