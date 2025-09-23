import * as React from 'react';
import { Toast, ToastProviderWrapper } from './index';
import { Button } from '../Button';

// Basic Toast Examples
export const BasicToastExamples = () => {
  return (
    <ToastProviderWrapper>
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-4">Basic Toast Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Default Toast */}
          <Toast
            title="Default Toast"
            description="This is a default toast message."
            variant="default"
            children="Show Default Toast"
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

          {/* Warning Toast */}
          <Toast
            title="Warning!"
            description="Please check your input before proceeding."
            variant="warning"
            children="Show Warning Toast"
          />

          {/* Info Toast */}
          <Toast
            title="Information"
            description="Here is some useful information for you."
            variant="info"
            children="Show Info Toast"
          />
        </div>
      </div>
    </ToastProviderWrapper>
  );
};

// Toast with Actions Examples
export const ToastWithActionsExamples = () => {
  return (
    <ToastProviderWrapper>
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-4">Toast with Actions Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Toast with Undo Action */}
          <Toast
            title="Scheduled: Catch up"
            description="Friday, February 10, 2023 at 5:57 PM"
            variant="default"
            action={{
              label: "Undo",
              onClick: () => console.log("Undo clicked"),
              variant: "default"
            }}
            children="Show Toast with Undo"
          />

          {/* Toast with Destructive Action */}
          <Toast
            title="Delete Item"
            description="This action cannot be undone."
            variant="destructive"
            action={{
              label: "Delete",
              onClick: () => console.log("Delete clicked"),
              variant: "destructive"
            }}
            children="Show Delete Toast"
          />

          {/* Toast with Custom Action */}
          <Toast
            title="New Message"
            description="You have received a new message from John."
            variant="info"
            action={{
              label: "View",
              onClick: () => console.log("View clicked"),
              variant: "default"
            }}
            children="Show Message Toast"
          />

          {/* Toast with Multiple Actions */}
          <Toast
            title="File Upload"
            description="Your file has been uploaded successfully."
            variant="success"
            action={{
              label: "Download",
              onClick: () => console.log("Download clicked"),
              variant: "default"
            }}
            children="Show Upload Toast"
          />
        </div>
      </div>
    </ToastProviderWrapper>
  );
};

// Toast Size Examples
export const ToastSizeExamples = () => {
  return (
    <ToastProviderWrapper>
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-4">Toast Size Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Small Toast */}
          <Toast
            title="Small Toast"
            description="This is a small toast."
            variant="default"
            size="sm"
            children="Show Small Toast"
          />

          {/* Medium Toast */}
          <Toast
            title="Medium Toast"
            description="This is a medium toast with more content."
            variant="default"
            size="md"
            children="Show Medium Toast"
          />

          {/* Large Toast */}
          <Toast
            title="Large Toast"
            description="This is a large toast with even more content and information."
            variant="default"
            size="lg"
            children="Show Large Toast"
          />
        </div>
      </div>
    </ToastProviderWrapper>
  );
};


// Toast Duration Examples
export const ToastDurationExamples = () => {
  return (
    <ToastProviderWrapper>
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-4">Toast Duration Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Quick Toast */}
          <Toast
            title="Quick Toast"
            description="This toast disappears quickly (2 seconds)."
            variant="info"
            duration={2000}
            children="Show Quick Toast"
          />

          {/* Long Toast */}
          <Toast
            title="Long Toast"
            description="This toast stays for 10 seconds."
            variant="warning"
            duration={10000}
            children="Show Long Toast"
          />

          {/* Persistent Toast */}
          <Toast
            title="Persistent Toast"
            description="This toast will not auto-dismiss."
            variant="success"
            autoDismiss={false}
            children="Show Persistent Toast"
          />

          {/* Custom Duration */}
          <Toast
            title="Custom Duration"
            description="This toast has a custom duration of 7 seconds."
            variant="default"
            duration={7000}
            children="Show Custom Duration Toast"
          />
        </div>
      </div>
    </ToastProviderWrapper>
  );
};

// Toast with Custom Styling Examples
export const ToastCustomStylingExamples = () => {
  return (
    <ToastProviderWrapper>
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-4">Toast with Custom Styling Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Purple Theme */}
          <Toast
            title="Purple Theme"
            description="This toast has a custom purple theme."
            variant="default"
            className="border-purple-300 bg-purple-50 text-purple-800 hover:bg-purple-100"
            children="Show Purple Toast"
          />

          {/* Orange Theme */}
          <Toast
            title="Orange Theme"
            description="This toast has a custom orange theme."
            variant="default"
            className="border-orange-300 bg-orange-50 text-orange-800 hover:bg-orange-100"
            children="Show Orange Toast"
          />

          {/* Teal Theme */}
          <Toast
            title="Teal Theme"
            description="This toast has a custom teal theme."
            variant="default"
            className="border-teal-300 bg-teal-50 text-teal-800 hover:bg-teal-100"
            children="Show Teal Toast"
          />

          {/* Pink Theme */}
          <Toast
            title="Pink Theme"
            description="This toast has a custom pink theme."
            variant="default"
            className="border-pink-300 bg-pink-50 text-pink-800 hover:bg-pink-100"
            children="Show Pink Toast"
          />
        </div>
      </div>
    </ToastProviderWrapper>
  );
};

// Interactive Toast Examples
export const InteractiveToastExamples = () => {
  const [toastCount, setToastCount] = React.useState(0);

  return (
    <ToastProviderWrapper>
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-4">Interactive Toast Examples</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Toast Count: {toastCount}
            </p>
            <Button
              onClick={() => setToastCount(0)}
              variant="outline"
              size="sm"
            >
              Reset Count
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Counter Toast */}
            <Toast
              title="Counter Toast"
              description={`This is toast number ${toastCount + 1}`}
              variant="info"
              onOpenChange={(open) => {
                if (open) {
                  setToastCount(prev => prev + 1);
                }
              }}
              children="Show Counter Toast"
            />

            {/* Dynamic Content Toast */}
            <Toast
              title="Dynamic Content"
              description={`Current time: ${new Date().toLocaleTimeString()}`}
              variant="success"
              children="Show Time Toast"
            />

            {/* Conditional Toast */}
            <Toast
              title={toastCount > 5 ? "Many Toasts!" : "Normal Toast"}
              description={toastCount > 5 ? "You've shown many toasts!" : "This is a normal toast."}
              variant={toastCount > 5 ? "warning" : "default"}
              children="Show Conditional Toast"
            />

            {/* Action with State */}
            <Toast
              title="State Action"
              description="Click the action to increment the counter."
              variant="default"
              action={{
                label: "Increment",
                onClick: () => setToastCount(prev => prev + 1),
                variant: "default"
              }}
              children="Show State Action Toast"
            />
          </div>
        </div>
      </div>
    </ToastProviderWrapper>
  );
};

// All Toast Examples Combined
export const AllToastExamples = () => {
  return (
    <ToastProviderWrapper>
      <div className="space-y-8 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Toast Component Examples</h1>
        
        <BasicToastExamples />
        <ToastWithActionsExamples />
        <ToastSizeExamples />
        <ToastDurationExamples />
        <ToastCustomStylingExamples />
        <InteractiveToastExamples />
      </div>
    </ToastProviderWrapper>
  );
};
