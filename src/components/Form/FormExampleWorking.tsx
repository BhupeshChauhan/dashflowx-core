'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './index';
import { Input } from '../Input';
import { Input2 } from '../Input/Input2';
import { TextArea } from '../TextArea';
import { Button } from '../Button';

// Form validation schema using Zod
const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  age: z.number().min(18, 'Must be at least 18 years old').max(120, 'Must be less than 120 years old'),
  bio: z.string().min(10, 'Bio must be at least 10 characters').max(500, 'Bio must be less than 500 characters'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
});

type FormData = z.infer<typeof formSchema>;

// Working Form Example with Optimized Input Components
export const WorkingFormExample = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: 18,
      bio: '',
      website: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">✅ Working Form with Optimized Inputs</h1>
      <p className="text-center text-gray-600 mb-8">
        Form using optimized Input, Input2, and TextArea components with formMode
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              👤 Personal Information
            </h2>
            
            {/* First Name & Last Name (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        formMode={true}
                        placeholder="Enter your first name"
                      />
                    </FormControl>
                    <FormDescription>
                      Your given name as it appears on official documents
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        formMode={true}
                        placeholder="Enter your last name"
                      />
                    </FormControl>
                    <FormDescription>
                      Your family name as it appears on official documents
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      formMode={true}
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </FormControl>
                  <FormDescription>
                    We'll use this email to send you important updates
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone & Age (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input2
                        {...field}
                        formMode={true}
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </FormControl>
                    <FormDescription>
                      Your primary contact number
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        formMode={true}
                        type="number"
                        placeholder="25"
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormDescription>
                      Must be 18 or older
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              ℹ️ Additional Information
            </h2>

            {/* Bio Field */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <TextArea
                      {...field}
                      formMode={true}
                      placeholder="Tell us a bit about yourself..."
                      rows={4}
                    />
                  </FormControl>
                  <FormDescription>
                    Brief description about yourself (10-500 characters)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Website Field */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      formMode={true}
                      type="url"
                      placeholder="https://your-website.com"
                    />
                  </FormControl>
                  <FormDescription>
                    Your personal or professional website
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              className="order-2 sm:order-1"
            >
              Submit Form
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              fullWidth
              className="order-1 sm:order-2"
              onClick={() => form.reset()}
            >
              Reset Form
            </Button>
          </div>

          {/* Form State Debug (Development Only) */}
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">🛠️ Form State (Debug)</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Valid:</strong> {form.formState.isValid ? '✅ Yes' : '❌ No'}
              </p>
              <p>
                <strong>Errors:</strong> {Object.keys(form.formState.errors).length}
              </p>
              <p>
                <strong>Dirty:</strong> {form.formState.isDirty ? '✅ Yes' : '❌ No'}
              </p>
              <p>
                <strong>Submitted:</strong> {form.formState.isSubmitted ? '✅ Yes' : '❌ No'}
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

// Usage Instructions
export const FormUsageInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
      <h2 className="text-lg font-semibold text-blue-800 mb-3">💡 How to Use Optimized Input Components with Forms</h2>
      <div className="text-sm text-blue-700 space-y-2">
        <p><strong>Key Fix Applied:</strong></p>
        <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
          <p className="text-green-800">✅ <strong>Fixed:</strong> Components now render only the raw input element in formMode, making them fully compatible with FormControl's Slot component.</p>
        </div>
        
        <p><strong>Correct Usage Pattern:</strong></p>
        <code className="block bg-blue-100 p-2 rounded text-xs overflow-x-auto">
          {`<FormField control={form.control} name="fieldName" render={({ field }) => (
  <FormItem>
    <FormLabel>Label</FormLabel>
    <FormControl>
      <Input {...field} formMode={true} placeholder="Enter text" />
    </FormControl>
    <FormDescription>Helper text</FormDescription>
    <FormMessage />
  </FormItem>
)} />`}
        </code>
        
        <p><strong>Available Components:</strong></p>
        <ul className="text-xs list-disc list-inside space-y-1">
          <li><code>&lt;Input formMode={true} /&gt;</code> - Standard input with border</li>
          <li><code>&lt;Input2 formMode={true} /&gt;</code> - Input with bottom border only</li>
          <li><code>&lt;TextArea formMode={true} /&gt;</code> - Multi-line textarea</li>
        </ul>
        
        <p><strong>Important Notes:</strong></p>
        <ul className="text-xs list-disc list-inside space-y-1">
          <li>Always use <code>formMode={true}</code> when using with FormControl</li>
          <li>Always spread the field props: <code>{'{...field}'}</code></li>
          <li>Error/success states are handled by FormMessage, not component props</li>
          <li>Components render only the input element in formMode (no containers/labels)</li>
        </ul>
      </div>
    </div>
  );
};

// All Working Examples
export const AllWorkingFormExamples = () => {
  return (
    <div className="space-y-12 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">✅ Fixed Form Examples</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Form examples using optimized Input components that work properly with the Form system
        </p>
      </div>

      {/* Usage Instructions */}
      <FormUsageInstructions />

      {/* Working Form Example */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <WorkingFormExample />
      </div>
    </div>
  );
};
