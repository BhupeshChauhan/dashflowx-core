import * as React from 'react';
import { Toaster } from './index';
import { Button } from '../Button';

// Basic Toaster Examples
export const BasicToasterExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Basic Toaster Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Default Toaster */}
        <Toaster
          title="Default Toaster"
          description="This is a default toaster message."
          variant="default"
          children="Show Default Toaster"
        />

        {/* Success Toaster */}
        <Toaster
          title="Success!"
          description="Your action was completed successfully."
          variant="success"
          children="Show Success Toaster"
        />

        {/* Error Toaster */}
        <Toaster
          title="Error!"
          description="Something went wrong. Please try again."
          variant="destructive"
          children="Show Error Toaster"
        />

        {/* Warning Toaster */}
        <Toaster
          title="Warning!"
          description="Please check your input before proceeding."
          variant="warning"
          children="Show Warning Toaster"
        />

        {/* Info Toaster */}
        <Toaster
          title="Information"
          description="Here is some useful information for you."
          variant="info"
          children="Show Info Toaster"
        />
      </div>
    </div>
  );
};

// Toaster with Actions Examples
export const ToasterWithActionsExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Toaster with Actions Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Toaster with Undo Action */}
        <Toaster
          title="Scheduled: Catch up"
          description="Friday, February 10, 2023 at 5:57 PM"
          variant="default"
          action={{
            label: "Undo",
            onClick: () => console.log("Undo clicked"),
            variant: "default"
          }}
          children="Show Toaster with Undo"
        />

        {/* Toaster with Destructive Action */}
        <Toaster
          title="Delete Item"
          description="This action cannot be undone."
          variant="destructive"
          action={{
            label: "Delete",
            onClick: () => console.log("Delete clicked"),
            variant: "destructive"
          }}
          children="Show Delete Toaster"
        />

        {/* Toaster with Custom Action */}
        <Toaster
          title="New Message"
          description="You have received a new message from John."
          variant="info"
          action={{
            label: "View",
            onClick: () => console.log("View clicked"),
            variant: "default"
          }}
          children="Show Message Toaster"
        />

        {/* Toaster with Multiple Actions */}
        <Toaster
          title="File Upload"
          description="Your file has been uploaded successfully."
          variant="success"
          action={{
            label: "Download",
            onClick: () => console.log("Download clicked"),
            variant: "default"
          }}
          children="Show Upload Toaster"
        />
      </div>
    </div>
  );
};

// Toaster Size Examples
export const ToasterSizeExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Toaster Size Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Small Toaster */}
        <Toaster
          title="Small Toaster"
          description="This is a small toaster."
          variant="default"
          size="sm"
          children="Show Small Toaster"
        />

        {/* Medium Toaster */}
        <Toaster
          title="Medium Toaster"
          description="This is a medium toaster with more content."
          variant="default"
          size="md"
          children="Show Medium Toaster"
        />

        {/* Large Toaster */}
        <Toaster
          title="Large Toaster"
          description="This is a large toaster with even more content and information."
          variant="default"
          size="lg"
          children="Show Large Toaster"
        />
      </div>
    </div>
  );
};

// Toaster Duration Examples
export const ToasterDurationExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Toaster Duration Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Quick Toaster */}
        <Toaster
          title="Quick Toaster"
          description="This toaster disappears quickly (2 seconds)."
          variant="info"
          duration={2000}
          children="Show Quick Toaster"
        />

        {/* Long Toaster */}
        <Toaster
          title="Long Toaster"
          description="This toaster stays for 10 seconds."
          variant="warning"
          duration={10000}
          children="Show Long Toaster"
        />

        {/* Persistent Toaster */}
        <Toaster
          title="Persistent Toaster"
          description="This toaster will not auto-dismiss."
          variant="success"
          autoDismiss={false}
          children="Show Persistent Toaster"
        />

        {/* Custom Duration */}
        <Toaster
          title="Custom Duration"
          description="This toaster has a custom duration of 7 seconds."
          variant="default"
          duration={7000}
          children="Show Custom Duration Toaster"
        />
      </div>
    </div>
  );
};

// Toaster with Custom Styling Examples
export const ToasterCustomStylingExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Toaster with Custom Styling Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Purple Theme */}
        <Toaster
          title="Purple Theme"
          description="This toaster has a custom purple theme."
          variant="default"
          className="border-purple-300 bg-purple-50 text-purple-800 hover:bg-purple-100"
          children="Show Purple Toaster"
        />

        {/* Orange Theme */}
        <Toaster
          title="Orange Theme"
          description="This toaster has a custom orange theme."
          variant="default"
          className="border-orange-300 bg-orange-50 text-orange-800 hover:bg-orange-100"
          children="Show Orange Toaster"
        />

        {/* Teal Theme */}
        <Toaster
          title="Teal Theme"
          description="This toaster has a custom teal theme."
          variant="default"
          className="border-teal-300 bg-teal-50 text-teal-800 hover:bg-teal-100"
          children="Show Teal Toaster"
        />

        {/* Pink Theme */}
        <Toaster
          title="Pink Theme"
          description="This toaster has a custom pink theme."
          variant="default"
          className="border-pink-300 bg-pink-50 text-pink-800 hover:bg-pink-100"
          children="Show Pink Toaster"
        />
      </div>
    </div>
  );
};

// Toaster with Background Color Examples
export const ToasterBackgroundColorExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Toaster with Background Color Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Purple Background */}
        <Toaster
          title="Purple Background"
          description="This toaster has a purple background."
          variant="default"
          bgColor="purple"
          bgIntensity="50"
          children="Show Purple Toaster"
        />

        {/* Teal Background */}
        <Toaster
          title="Teal Background"
          description="This toaster has a teal background."
          variant="default"
          bgColor="teal"
          bgIntensity="100"
          children="Show Teal Toaster"
        />

        {/* Orange Background */}
        <Toaster
          title="Orange Background"
          description="This toaster has an orange background."
          variant="default"
          bgColor="orange"
          bgIntensity="200"
          children="Show Orange Toaster"
        />

        {/* Pink Background */}
        <Toaster
          title="Pink Background"
          description="This toaster has a pink background."
          variant="default"
          bgColor="pink"
          bgIntensity="50"
          children="Show Pink Toaster"
        />

        {/* Indigo Background */}
        <Toaster
          title="Indigo Background"
          description="This toaster has an indigo background."
          variant="default"
          bgColor="indigo"
          bgIntensity="100"
          children="Show Indigo Toaster"
        />

        {/* Emerald Background */}
        <Toaster
          title="Emerald Background"
          description="This toaster has an emerald background."
          variant="default"
          bgColor="emerald"
          bgIntensity="200"
          children="Show Emerald Toaster"
        />

        {/* Rose Background */}
        <Toaster
          title="Rose Background"
          description="This toaster has a rose background."
          variant="default"
          bgColor="rose"
          bgIntensity="50"
          children="Show Rose Toaster"
        />

        {/* Sky Background */}
        <Toaster
          title="Sky Background"
          description="This toaster has a sky background."
          variant="default"
          bgColor="sky"
          bgIntensity="100"
          children="Show Sky Toaster"
        />

        {/* Amber Background */}
        <Toaster
          title="Amber Background"
          description="This toaster has an amber background."
          variant="default"
          bgColor="amber"
          bgIntensity="200"
          children="Show Amber Toaster"
        />
      </div>
    </div>
  );
};

// Toaster Visibility Examples
export const ToasterVisibilityExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Toaster Visibility Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* With Toaster Component */}
        <Toaster
          title="With Toaster"
          description="This shows the toaster component and button."
          variant="default"
          showToaster={true}
          children="Show With Toaster"
        />

        {/* Without Toaster Component */}
        <Toaster
          title="Without Toaster"
          description="This shows only the button, no toaster component."
          variant="default"
          showToaster={false}
          children="Show Without Toaster"
        />

        {/* Hidden Toaster */}
        <Toaster
          title="Hidden Toaster"
          description="This toaster component is hidden but button works."
          variant="info"
          showToaster={false}
          children="Show Hidden Toaster"
        />

        {/* Visible Toaster */}
        <Toaster
          title="Visible Toaster"
          description="This toaster component is visible and functional."
          variant="success"
          showToaster={true}
          children="Show Visible Toaster"
        />
      </div>
    </div>
  );
};

// Interactive Toaster Examples
export const InteractiveToasterExamples = () => {
  const [toasterCount, setToasterCount] = React.useState(0);

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Interactive Toaster Examples</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">
            Toaster Count: {toasterCount}
          </p>
          <Button
            onClick={() => setToasterCount(0)}
            variant="outline"
            size="sm"
          >
            Reset Count
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Counter Toaster */}
          <Toaster
            title="Counter Toaster"
            description={`This is toaster number ${toasterCount + 1}`}
            variant="info"
            onOpenChange={(open) => {
              if (open) {
                setToasterCount(prev => prev + 1);
              }
            }}
            children="Show Counter Toaster"
          />

          {/* Dynamic Content Toaster */}
          <Toaster
            title="Dynamic Content"
            description={`Current time: ${new Date().toLocaleTimeString()}`}
            variant="success"
            children="Show Time Toaster"
          />

          {/* Conditional Toaster */}
          <Toaster
            title={toasterCount > 5 ? "Many Toasters!" : "Normal Toaster"}
            description={toasterCount > 5 ? "You've shown many toasters!" : "This is a normal toaster."}
            variant={toasterCount > 5 ? "warning" : "default"}
            children="Show Conditional Toaster"
          />

          {/* Action with State */}
          <Toaster
            title="State Action"
            description="Click the action to increment the counter."
            variant="default"
            action={{
              label: "Increment",
              onClick: () => setToasterCount(prev => prev + 1),
              variant: "default"
            }}
            children="Show State Action Toaster"
          />
        </div>
      </div>
    </div>
  );
};

// Real-world Toaster Examples
export const RealWorldToasterExamples = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold mb-4">Real-world Toaster Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email Notification */}
        <Toaster
          title="New Email"
          description="You have received a new email from john@example.com"
          variant="info"
          action={{
            label: "View",
            onClick: () => console.log("View email clicked"),
            variant: "default"
          }}
          children="Show Email Notification"
        />

        {/* File Upload Success */}
        <Toaster
          title="Upload Complete"
          description="Your file 'document.pdf' has been uploaded successfully."
          variant="success"
          action={{
            label: "Open",
            onClick: () => console.log("Open file clicked"),
            variant: "default"
          }}
          children="Show Upload Success"
        />

        {/* Form Validation Error */}
        <Toaster
          title="Validation Error"
          description="Please fill in all required fields before submitting."
          variant="destructive"
          action={{
            label: "Fix",
            onClick: () => console.log("Fix form clicked"),
            variant: "destructive"
          }}
          children="Show Validation Error"
        />

        {/* System Maintenance */}
        <Toaster
          title="System Maintenance"
          description="Scheduled maintenance will begin at 2:00 AM EST."
          variant="warning"
          autoDismiss={false}
          children="Show Maintenance Notice"
        />

        {/* Password Reset */}
        <Toaster
          title="Password Reset"
          description="A password reset link has been sent to your email."
          variant="success"
          action={{
            label: "Check Email",
            onClick: () => console.log("Check email clicked"),
            variant: "default"
          }}
          children="Show Password Reset"
        />

        {/* Payment Success */}
        <Toaster
          title="Payment Successful"
          description="Your payment of $29.99 has been processed successfully."
          variant="success"
          action={{
            label: "View Receipt",
            onClick: () => console.log("View receipt clicked"),
            variant: "default"
          }}
          children="Show Payment Success"
        />
      </div>
    </div>
  );
};

// All Toaster Examples Combined
export const AllToasterExamples = () => {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Toaster Component Examples</h1>
      
        <BasicToasterExamples />
        <ToasterWithActionsExamples />
        <ToasterSizeExamples />
        <ToasterDurationExamples />
        <ToasterCustomStylingExamples />
        <ToasterBackgroundColorExamples />
        <ToasterVisibilityExamples />
        <InteractiveToasterExamples />
        <RealWorldToasterExamples />
    </div>
  );
};
