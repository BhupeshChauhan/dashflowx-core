import { Toast, ToastProviderWrapper } from './index';

// Example showing how to use ToastProviderWrapper
export const ToastUsageExample = () => {
  return (
    <ToastProviderWrapper>
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Toast Usage Example</h1>
        <p className="text-gray-600">
          This example shows how to properly use the Toast component with ToastProviderWrapper.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Basic Toast */}
          <Toast
            title="Basic Toast"
            description="This is a basic toast message."
            variant="default"
            children="Show Basic Toast"
          />

          {/* Success Toast */}
          <Toast
            title="Success!"
            description="Your action was completed successfully."
            variant="success"
            children="Show Success Toast"
          />

          {/* Error Toast */}
          <Toast
            title="Error!"
            description="Something went wrong. Please try again."
            variant="destructive"
            children="Show Error Toast"
          />

          {/* Toast with Action */}
          <Toast
            title="Action Toast"
            description="This toast has an action button."
            variant="info"
            action={{
              label: "View",
              onClick: () => console.log("View clicked!"),
              variant: "default"
            }}
            children="Show Action Toast"
          />
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Usage Instructions:</h2>
          <div className="text-sm text-blue-700 space-y-2">
            <p><strong>1. Import the components:</strong></p>
            <code className="block bg-blue-100 p-2 rounded text-xs">
              import {`{ Toast, ToastProviderWrapper }`} from '@dashflowx/core';
            </code>
            
            <p><strong>2. Wrap your content with ToastProviderWrapper:</strong></p>
            <code className="block bg-blue-100 p-2 rounded text-xs">
              {`<ToastProviderWrapper>`}<br/>
              {`  <Toast title="..." description="..." />`}<br/>
              {`</ToastProviderWrapper>`}
            </code>
            
            <p><strong>3. Click any button to show a toast notification!</strong></p>
          </div>
        </div>
      </div>
    </ToastProviderWrapper>
  );
};
