import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from '.';

const meta: Meta<typeof Dialog> = {
  title: 'Element/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    triggerText: {
      control: { type: 'text' },
    },
    triggerVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'success', 'warning'],
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'confirmation', 'info', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    triggerText: 'Open Dialog',
    title: 'Basic Dialog',
    description: 'This is a basic dialog example.',
    type: 'default',
    size: 'md',
  },
};

export const ConfirmationDialog: Story = {
  args: {
    triggerText: 'Delete Item',
    triggerVariant: 'destructive',
    title: 'Delete Item',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    type: 'confirmation',
    size: 'sm',
    actions: [
      {
        label: 'Cancel',
        variant: 'outline',
        onClick: () => console.log('Cancelled'),
      },
      {
        label: 'Delete',
        variant: 'destructive',
        onClick: () => {
          console.log('Item deleted');
          alert('Item deleted successfully!');
        },
      },
    ],
  },
};

export const InfoDialog: Story = {
  args: {
    triggerText: 'Show Info',
    title: 'System Information',
    description: 'Your system is running smoothly. All services are operational.',
    type: 'info',
    size: 'sm',
    actions: [
      {
        label: 'Got it',
        variant: 'primary',
        onClick: () => console.log('Info acknowledged'),
      },
    ],
  },
};

export const WarningDialog: Story = {
  args: {
    triggerText: 'Show Warning',
    triggerVariant: 'outline',
    title: 'Warning',
    description: 'This action may have unintended consequences. Please review before proceeding.',
    type: 'warning',
    size: 'md',
    actions: [
      {
        label: 'Cancel',
        variant: 'outline',
        onClick: () => console.log('Cancelled'),
      },
      {
        label: 'Continue',
        variant: 'destructive',
        onClick: () => {
          console.log('Continued despite warning');
          alert('Action continued!');
        },
      },
    ],
  },
};

export const ErrorDialog: Story = {
  args: {
    triggerText: 'Show Error',
    triggerVariant: 'destructive',
    title: 'Error',
    description: 'Something went wrong while processing your request. Please try again later.',
    type: 'error',
    size: 'sm',
    actions: [
      {
        label: 'Close',
        variant: 'destructive',
        onClick: () => console.log('Error dialog closed'),
      },
    ],
  },
};

export const LargeDialog: Story = {
  args: {
    triggerText: 'Open Large Dialog',
    title: 'Large Content Dialog',
    description: 'This dialog demonstrates the large size variant.',
    type: 'default',
    size: 'lg',
    children: (
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          This is a large dialog with more content space. It's perfect for displaying
          detailed information or complex layouts.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Section 1</h4>
            <p className="text-sm text-muted-foreground">
              Content for section 1 goes here.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Section 2</h4>
            <p className="text-sm text-muted-foreground">
              Content for section 2 goes here.
            </p>
          </div>
        </div>
      </div>
    ),
  },
};

export const CustomActions: Story = {
  args: {
    triggerText: 'Custom Actions',
    title: 'Custom Actions Dialog',
    description: 'This dialog has custom action buttons with different variants.',
    type: 'default',
    size: 'md',
    actions: [
      {
        label: 'Save Draft',
        variant: 'secondary',
        onClick: () => console.log('Draft saved'),
      },
      {
        label: 'Cancel',
        variant: 'outline',
        onClick: () => console.log('Cancelled'),
      },
      {
        label: 'Publish',
        variant: 'primary',
        onClick: () => {
          console.log('Published');
          alert('Content published successfully!');
        },
      },
    ],
  },
};

export const LoadingState: Story = {
  args: {
    triggerText: 'Process Request',
    title: 'Processing',
    description: 'Please wait while we process your request...',
    type: 'default',
    size: 'sm',
    loading: true,
    actions: [
      {
        label: 'Cancel',
        variant: 'outline',
        disabled: true,
      },
      {
        label: 'Process',
        variant: 'primary',
        disabled: true,
      },
    ],
  },
};

export const DisabledDialog: Story = {
  args: {
    triggerText: 'Disabled Dialog',
    title: 'Disabled Dialog',
    description: 'This dialog is disabled and cannot be interacted with.',
    type: 'default',
    size: 'sm',
    disabled: true,
    actions: [
      {
        label: 'Action',
        variant: 'primary',
        disabled: true,
      },
    ],
  },
};

export const NoCloseButton: Story = {
  args: {
    triggerText: 'No Close Button',
    title: 'No Close Button',
    description: 'This dialog does not have a close button in the top-right corner.',
    type: 'default',
    size: 'sm',
    showCloseButton: false,
    actions: [
      {
        label: 'Close',
        variant: 'primary',
        onClick: () => console.log('Closed via action'),
      },
    ],
  },
};

export const NonDismissible: Story = {
  args: {
    triggerText: 'Non-Dismissible',
    title: 'Non-Dismissible Dialog',
    description: 'This dialog cannot be closed by clicking outside or pressing escape.',
    type: 'default',
    size: 'sm',
    closeOnOverlayClick: false,
    closeOnEscape: false,
    showCloseButton: false,
    actions: [
      {
        label: 'Close',
        variant: 'primary',
        onClick: () => console.log('Closed via action only'),
      },
    ],
  },
};

export const CustomContent: Story = {
  args: {
    triggerText: 'Show Custom Content',
    title: 'Custom Content Dialog',
    description: 'This dialog shows custom content with various elements.',
    type: 'default',
    size: 'lg',
    children: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">Status: Active</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold">Details</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Created: 2024-01-15</li>
            <li>• Last updated: 2024-01-20</li>
            <li>• Version: 2.1.0</li>
          </ul>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> This is a custom content area with additional styling.
          </p>
        </div>
      </div>
    ),
    actions: [
      {
        label: 'Close',
        variant: 'primary',
        onClick: () => console.log('Custom content dialog closed'),
      },
    ],
  },
};

// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogType, setDialogType] = useState<'default' | 'confirmation' | 'info' | 'warning' | 'error'>('default');

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Interactive Dialog Demo</h3>
          <p className="text-sm text-gray-600 mb-4">
            Choose a dialog type and click the button to open it.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {(['default', 'confirmation', 'info', 'warning', 'error'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setDialogType(type)}
                className={`px-3 py-1 text-sm rounded-md border ${
                  dialogType === type 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <Dialog
          open={isOpen}
          onOpenChange={setIsOpen}
          triggerText={`Open ${dialogType.charAt(0).toUpperCase() + dialogType.slice(1)} Dialog`}
          title={`${dialogType.charAt(0).toUpperCase() + dialogType.slice(1)} Dialog`}
          description={`This is a ${dialogType} dialog example.`}
          type={dialogType}
          size="md"
          children={
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                This is custom content for the {dialogType} dialog.
              </p>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm">
                  You can add any custom content here using the children prop.
                </p>
              </div>
            </div>
          }
          actions={[
            {
              label: dialogType === 'confirmation' ? 'Cancel' : 'Close',
              variant: 'outline',
              onClick: () => setIsOpen(false),
            },
            ...(dialogType === 'confirmation' ? [{
              label: 'Confirm',
              variant: 'destructive' as const,
              onClick: () => {
                alert('Action confirmed!');
                setIsOpen(false);
              },
            }] : []),
          ]}
        />
      </div>
    );
  },
};