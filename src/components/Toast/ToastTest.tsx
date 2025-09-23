import { Toast, ToastProviderWrapper } from './index';

// Simple test component to verify Toast functionality
export const ToastTest = () => {
  return (
    <ToastProviderWrapper>
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Toast Test</h1>
        <p className="text-gray-600">Click the buttons below to test the Toast component:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Basic Toast */}
          <Toast
            title="Test Toast"
            description="This is a test toast message."
            variant="default"
            children="Show Test Toast"
          />

          {/* Success Toast */}
          <Toast
            title="Success!"
            description="This is a success toast message."
            variant="success"
            children="Show Success Toast"
          />

          {/* Error Toast */}
          <Toast
            title="Error!"
            description="This is an error toast message."
            variant="destructive"
            children="Show Error Toast"
          />

          {/* Warning Toast */}
          <Toast
            title="Warning!"
            description="This is a warning toast message."
            variant="warning"
            children="Show Warning Toast"
          />

          {/* Info Toast */}
          <Toast
            title="Info"
            description="This is an info toast message."
            variant="info"
            children="Show Info Toast"
          />

          {/* Toast with Action */}
          <Toast
            title="Action Toast"
            description="This toast has an action button."
            variant="default"
            action={{
              label: "Action",
              onClick: () => console.log("Action clicked!"),
              variant: "default"
            }}
            children="Show Action Toast"
          />
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Instructions:</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Click any button above to show a toast notification</li>
            <li>Toasts will appear in the top-right corner by default</li>
            <li>Toasts will auto-dismiss after 5 seconds (unless specified otherwise)</li>
            <li>Action toasts have a clickable action button</li>
            <li>You can show multiple toasts at once</li>
          </ul>
        </div>
      </div>
    </ToastProviderWrapper>
  );
};
