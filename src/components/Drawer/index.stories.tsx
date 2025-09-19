import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from '.';

const meta: Meta<typeof Drawer> = {
  title: 'Element/Drawer',
  component: Drawer,
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
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'info', 'warning', 'error', 'success'],
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
    triggerText: 'Open Drawer',
    title: 'Basic Drawer',
    description: 'This is a basic drawer example.',
    position: 'left',
    size: 'md',
    type: 'default',
  },
};

export const LeftDrawer: Story = {
  args: {
    triggerText: 'Open Left Drawer',
    title: 'Left Drawer',
    description: 'This drawer slides in from the left.',
    position: 'left',
    size: 'md',
    children: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This is the content area of the drawer. You can put any content here.
        </p>
        <div className="space-y-2">
          <h4 className="font-semibold">Features</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Responsive design</li>
            <li>• Smooth animations</li>
            <li>• Customizable content</li>
            <li>• Multiple positions</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export const RightDrawer: Story = {
  args: {
    triggerText: 'Open Right Drawer',
    title: 'Right Drawer',
    description: 'This drawer slides in from the right.',
    position: 'right',
    size: 'lg',
    children: (
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900">Information</h4>
          <p className="text-sm text-blue-700 mt-2">
            This is an information panel with custom styling.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold">Settings</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Enable notifications</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Dark mode</span>
            </label>
          </div>
        </div>
      </div>
    ),
  },
};

export const TopDrawer: Story = {
  args: {
    triggerText: 'Open Top Drawer',
    title: 'Top Drawer',
    description: 'This drawer slides down from the top.',
    position: 'top',
    size: 'md',
    children: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm">Quick Actions</h4>
            <p className="text-xs text-gray-600 mt-1">Access common tasks</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm">Recent Items</h4>
            <p className="text-xs text-gray-600 mt-1">View recent activity</p>
          </div>
        </div>
      </div>
    ),
  },
};

export const BottomDrawer: Story = {
  args: {
    triggerText: 'Open Bottom Drawer',
    title: 'Bottom Drawer',
    description: 'This drawer slides up from the bottom.',
    position: 'bottom',
    size: 'lg',
    children: (
      <div className="space-y-4">
        <div className="text-center">
          <h4 className="font-semibold">Mobile Menu</h4>
          <p className="text-sm text-gray-600 mt-1">Perfect for mobile interfaces</p>
        </div>
        <div className="space-y-2">
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
            Home
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
            About
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
            Contact
          </button>
        </div>
      </div>
    ),
  },
};

export const InfoDrawer: Story = {
  args: {
    triggerText: 'Show Info',
    title: 'System Information',
    description: 'Your system is running smoothly. All services are operational.',
    type: 'info',
    position: 'right',
    size: 'md',
    children: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">Status: Active</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold">System Stats</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <div>CPU Usage: 45%</div>
            <div>Memory: 2.1GB / 8GB</div>
            <div>Disk Space: 120GB / 500GB</div>
          </div>
        </div>
      </div>
    ),
  },
};

export const WarningDrawer: Story = {
  args: {
    triggerText: 'Show Warning',
    triggerVariant: 'warning',
    title: 'Warning',
    description: 'This action may have unintended consequences.',
    type: 'warning',
    position: 'left',
    size: 'md',
    children: (
      <div className="space-y-4">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800">Important Notice</h4>
          <p className="text-sm text-yellow-700 mt-2">
            Please review the following information before proceeding.
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold">Potential Issues</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Data loss may occur</li>
            <li>• Changes cannot be undone</li>
            <li>• System restart required</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export const ErrorDrawer: Story = {
  args: {
    triggerText: 'Show Error',
    triggerVariant: 'destructive',
    title: 'Error',
    description: 'Something went wrong while processing your request.',
    type: 'error',
    position: 'right',
    size: 'sm',
    children: (
      <div className="space-y-4">
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="font-semibold text-red-800">Error Details</h4>
          <p className="text-sm text-red-700 mt-2">
            Error Code: 500<br />
            Timestamp: {new Date().toLocaleString()}
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold">Troubleshooting</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Check your internet connection</li>
            <li>• Try refreshing the page</li>
            <li>• Contact support if issue persists</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export const SuccessDrawer: Story = {
  args: {
    triggerText: 'Show Success',
    triggerVariant: 'success',
    title: 'Success',
    description: 'Operation completed successfully.',
    type: 'success',
    position: 'left',
    size: 'md',
    children: (
      <div className="space-y-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-semibold text-green-800">All Done!</h4>
          <p className="text-sm text-green-600 mt-2">
            Your changes have been saved successfully.
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold">What's Next?</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Review your changes</li>
            <li>• Share with your team</li>
            <li>• Continue with other tasks</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export const LargeDrawer: Story = {
  args: {
    triggerText: 'Open Large Drawer',
    title: 'Large Drawer',
    description: 'This drawer demonstrates the large size variant.',
    position: 'right',
    size: 'xl',
    children: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Section 1</h4>
            <p className="text-sm text-gray-600">
              Content for section 1 goes here.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Section 2</h4>
            <p className="text-sm text-gray-600">
              Content for section 2 goes here.
            </p>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Additional Information</h4>
          <p className="text-sm text-gray-600">
            This is a large drawer with more content space. It's perfect for displaying
            detailed information, forms, or complex layouts.
          </p>
        </div>
      </div>
    ),
  },
};

export const CustomActions: Story = {
  args: {
    triggerText: 'Custom Actions',
    title: 'Custom Actions Drawer',
    description: 'This drawer has custom action buttons.',
    position: 'left',
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
    children: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This drawer has custom action buttons with different variants.
        </p>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Title</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter title"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Content</label>
          <textarea 
            className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
            placeholder="Enter content"
          />
        </div>
      </div>
    ),
  },
};

export const LoadingState: Story = {
  args: {
    triggerText: 'Process Request',
    title: 'Processing',
    description: 'Please wait while we process your request...',
    position: 'right',
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
    children: (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-sm text-gray-600 mt-4">Processing...</p>
      </div>
    ),
  },
};

export const DisabledDrawer: Story = {
  args: {
    triggerText: 'Disabled Drawer',
    title: 'Disabled Drawer',
    description: 'This drawer is disabled and cannot be interacted with.',
    position: 'left',
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
    description: 'This drawer does not have a close button in the header.',
    position: 'right',
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
    title: 'Non-Dismissible Drawer',
    description: 'This drawer cannot be closed by clicking outside or pressing escape.',
    position: 'left',
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

// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [drawerPosition, setDrawerPosition] = useState<'left' | 'right' | 'top' | 'bottom'>('left');
    const [drawerType, setDrawerType] = useState<'default' | 'info' | 'warning' | 'error' | 'success'>('default');

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Interactive Drawer Demo</h3>
          <p className="text-sm text-gray-600 mb-4">
            Choose a position and type, then click the button to open the drawer.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {(['left', 'right', 'top', 'bottom'] as const).map((position) => (
              <button
                key={position}
                onClick={() => setDrawerPosition(position)}
                className={`px-3 py-1 text-sm rounded-md border ${
                  drawerPosition === position 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {position.charAt(0).toUpperCase() + position.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {(['default', 'info', 'warning', 'error', 'success'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setDrawerType(type)}
                className={`px-3 py-1 text-sm rounded-md border ${
                  drawerType === type 
                    ? 'bg-green-500 text-white border-green-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <Drawer
          open={isOpen}
          onOpenChange={setIsOpen}
          triggerText={`Open ${drawerPosition.charAt(0).toUpperCase() + drawerPosition.slice(1)} ${drawerType.charAt(0).toUpperCase() + drawerType.slice(1)} Drawer`}
          title={`${drawerType.charAt(0).toUpperCase() + drawerType.slice(1)} Drawer`}
          description={`This is a ${drawerType} drawer positioned on the ${drawerPosition}.`}
          type={drawerType}
          position={drawerPosition}
          size="md"
          children={
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                This is custom content for the {drawerType} drawer positioned on the {drawerPosition}.
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
              label: 'Close',
              variant: 'outline',
              onClick: () => setIsOpen(false),
            },
          ]}
        />
      </div>
    );
  },
};