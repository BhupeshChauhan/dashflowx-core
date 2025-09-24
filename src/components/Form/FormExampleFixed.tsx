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
import { Button } from '../Button';

// Form validation schema using Zod
const profileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  age: z.number().min(18, 'Must be at least 18 years old').max(120, 'Must be less than 120 years old'),
  bio: z.string().min(10, 'Bio must be at least 10 characters').max(500, 'Bio must be less than 500 characters'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
  newsletter: z.boolean().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

// Working Form Example with Basic Inputs
export const WorkingFormExample = () => {
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: 18,
      bio: '',
      website: '',
      terms: false,
      newsletter: false,
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">✅ Working Form Example</h1>
      <p className="text-center text-gray-600 mb-8">
        A working form example using basic HTML inputs that are compatible with FormControl
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
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your first name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
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
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your last name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
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
                    <input
                      {...field}
                      type="email"
                      placeholder="your.email@example.com"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
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
                      <input
                        {...field}
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
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
                      <input
                        {...field}
                        type="number"
                        placeholder="25"
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
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
                    <textarea
                      {...field}
                      placeholder="Tell us a bit about yourself..."
                      rows={4}
                      className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none"
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
                    <input
                      {...field}
                      type="url"
                      placeholder="https://your-website.com"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
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

          {/* Agreement Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              ✅ Agreements
            </h2>

            {/* Terms Checkbox */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Accept Terms and Conditions *
                    </FormLabel>
                    <FormDescription>
                      You agree to our{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Newsletter Checkbox */}
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Subscribe to Newsletter
                    </FormLabel>
                    <FormDescription>
                      Receive updates about new features and announcements
                    </FormDescription>
                  </div>
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

// Simple Contact Form Example  
export const SimpleContactForm = () => {
  const contactSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Valid email is required'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    alert('Message sent successfully!');
    form.reset();
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">📞 Contact Us</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    placeholder="Your name"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    placeholder="your@email.com"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    placeholder="What's this about?"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Your message..."
                    rows={5}
                    className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="primary" fullWidth>
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

// All Working Form Examples
export const AllWorkingFormExamples = () => {
  return (
    <div className="space-y-12 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">✅ Working Form Examples</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fixed form examples that work properly with the @dashflowx/core Form component system
        </p>
      </div>

      {/* Problem & Solution Explanation */}
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-red-50 to-green-50 border border-gray-200 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">🔧 Problem & Solution</h2>
        <div className="text-sm text-gray-700 space-y-2">
          <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
            <p><strong className="text-red-800">❌ Problem:</strong></p>
            <p className="text-red-700">Custom Input components (Input, Input2, TextArea) were not compatible with FormControl's Slot component from Radix UI. The Slot component requires proper ref forwarding.</p>
          </div>
          <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
            <p><strong className="text-green-800">✅ Solution:</strong></p>
            <p className="text-green-700">Replaced custom inputs with basic HTML input elements that work properly with FormControl and the react-hook-form system.</p>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-800 mb-3">💡 How to Use Forms (Fixed Version)</h2>
        <div className="text-sm text-blue-700 space-y-2">
          <p><strong>Basic Form Setup:</strong></p>
          <code className="block bg-blue-100 p-2 rounded text-xs overflow-x-auto">
            {`const form = useForm({ resolver: zodResolver(schema) });`}
          </code>
          
          <p><strong>Working Form Field Structure:</strong></p>
          <code className="block bg-blue-100 p-2 rounded text-xs overflow-x-auto">
            {`<FormField control={form.control} name="fieldName" render={({ field }) => (
  <FormItem>
    <FormLabel>Label</FormLabel>
    <FormControl>
      <input {...field} type="text" className="form-input-classes" />
    </FormControl>
    <FormDescription>Helper text</FormDescription>
    <FormMessage />
  </FormItem>
)} />`}
          </code>
          
          <p><strong>Key Points:</strong></p>
          <ul className="text-xs list-disc list-inside space-y-1">
            <li>Use basic HTML inputs (input, textarea, select) inside FormControl</li>
            <li>Always spread the field props: {'{...field}'}</li>
            <li>FormControl uses Radix UI Slot - custom components need proper ref forwarding</li>
            <li>Form component is just FormProvider from react-hook-form</li>
          </ul>
        </div>
      </div>

      {/* Working Form Example */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <WorkingFormExample />
      </div>

      {/* Simple Contact Form */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <SimpleContactForm />
      </div>
    </div>
  );
};
