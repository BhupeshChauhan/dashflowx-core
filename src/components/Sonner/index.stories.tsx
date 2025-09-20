import type { Meta, StoryObj } from '@storybook/react';
import { Sonner, toast, createIsolatedToastState, clearAllToasts } from '.';

const meta: Meta<typeof Sonner> = {
  title: 'Element/Sonner',
  component: Sonner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div className="space-y-4">
      <Sonner />
      <div className="space-x-2">
        <button
          onClick={() =>
            toast.success('Success!', {
              description: 'Your action was completed successfully.',
            })
          }
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Success Toast
        </button>
        
        <button
          onClick={() =>
            toast.error('Error!', {
              description: 'Something went wrong.',
              showCloseButton: true,
            })
          }
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Error Toast
        </button>
        
        <button
          onClick={() =>
            toast.warning('Warning!', {
              description: 'Please check your input.',
            })
          }
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        >
          Warning Toast
        </button>
        
        <button
          onClick={() =>
            toast.info('Info', {
              description: 'Here is some information.',
            })
          }
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Info Toast
        </button>
      </div>
    </div>
  ),
};

export const SuccessToast: Story = {
  render: () => (
    <div className="space-y-4">
      <Sonner />
      <button
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        onClick={() =>
          toast.success('Success!', {
            description: 'Your action was completed successfully.',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Success Toast
      </button>
    </div>
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <div className="space-y-4">
      <Sonner />
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        onClick={() =>
          toast.error('Error!', {
            description: 'Something went wrong.',
            showCloseButton: true,
          })
        }
      >
        Show Error Toast
      </button>
    </div>
  ),
};

export const WarningToast: Story = {
  render: () => (
    <div className="space-y-4">
      <Sonner />
      <button
        className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        onClick={() =>
          toast.warning('Warning!', {
            description: 'Please check your input.',
          })
        }
      >
        Show Warning Toast
      </button>
    </div>
  ),
};

export const InfoToast: Story = {
  render: () => (
    <div className="space-y-4">
      <Sonner />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={() =>
          toast.info('Info', {
            description: 'Here is some information.',
          })
        }
      >
        Show Info Toast
      </button>
    </div>
  ),
};

export const MultipleToasts: Story = {
  render: () => (
    <div className="space-y-4">
      <Sonner />
      <div className="space-x-2">
        <button
          className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
          onClick={() => toast.success('Task completed!')}
        >
          Success
        </button>
        <button
          className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
          onClick={() => toast.error('Task failed!')}
        >
          Error
        </button>
        <button
          className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
          onClick={() => toast.warning('Task pending!')}
        >
          Warning
        </button>
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          onClick={() => toast.info('Task info!')}
        >
          Info
        </button>
      </div>
    </div>
  ),
};

export const IsolatedState: Story = {
  render: () => {
    const isolatedState = createIsolatedToastState();
    
    return (
      <div className="space-y-4">
        <Sonner isolatedState={isolatedState} />
        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={() =>
              isolatedState.toast.success('Isolated Success!', {
                description: 'This toast uses isolated state.',
              })
            }
          >
            Isolated Success
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            onClick={() =>
              isolatedState.toast.error('Isolated Error!', {
                description: 'This toast is isolated from global state.',
              })
            }
          >
            Isolated Error
          </button>
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            onClick={() => isolatedState.clearAllToasts()}
          >
            Clear Isolated
          </button>
        </div>
      </div>
    );
  },
};

export const GlobalVsIsolated: Story = {
  render: () => {
    const isolatedState = createIsolatedToastState();
    
    return (
      <div className="space-y-6">
        {/* Global Toasts */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Global Toasts</h3>
          <Sonner position="top-left" />
          <div className="space-x-2">
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              onClick={() => toast.info('Global Toast', { description: 'This affects global state.' })}
            >
              Global Info
            </button>
            <button
              className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
              onClick={() => clearAllToasts()}
            >
              Clear Global
            </button>
          </div>
        </div>
        
        {/* Isolated Toasts */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Isolated Toasts</h3>
          <Sonner position="top-right" isolatedState={isolatedState} />
          <div className="space-x-2">
            <button
              className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
              onClick={() => isolatedState.toast.success('Isolated Toast', { description: 'This is isolated.' })}
            >
              Isolated Success
            </button>
            <button
              className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
              onClick={() => isolatedState.clearAllToasts()}
            >
              Clear Isolated
            </button>
          </div>
        </div>
      </div>
    );
  },
};

export const MarkdocCompatible: Story = {
  render: () => (
    <div className="space-y-4">
      <Sonner />
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Markdoc Compatible Toast</h3>
        <p className="text-sm text-gray-600 mb-4">
          This toast system works in Markdoc context without ES module dependencies.
        </p>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          onClick={() =>
            toast.default('Markdoc Compatible!', {
              description: 'This toast works perfectly in Markdoc context.',
              showCloseButton: true,
            })
          }
        >
          Show Markdoc Toast
        </button>
      </div>
    </div>
  ),
};