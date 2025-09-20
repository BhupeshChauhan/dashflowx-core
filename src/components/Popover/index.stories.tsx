import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '.';

const meta: Meta<typeof Popover> = {
  title: 'Element/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    popoverTrigger: {
      control: false,
      description: 'Element that triggers the popover',
    },
    popoverContent: {
      control: false,
      description: 'Content to display in the popover',
    },
    triggerClassName: {
      control: 'text',
      description: 'Additional CSS classes for the trigger',
    },
    contentClassName: {
      control: 'text',
      description: 'Additional CSS classes for the content',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of the popover content',
    },
    sideOffset: {
      control: 'number',
      description: 'Distance between trigger and popover content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    popoverTrigger: <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Hover for Popover</button>,
    popoverContent: <div className="space-y-2"><p className="font-semibold">Popover Title</p><p>This is a standalone HTML/CSS popover with white background. Hover over the trigger to see it!</p></div>,
  },
};

export const WithCustomContent: Story = {
  args: {
    popoverTrigger: <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Custom Content</button>,
    popoverContent: (
      <div className="space-y-3">
        <h3 className="font-bold text-lg">Custom Content</h3>
        <p className="text-sm text-gray-600">
          This popover has custom JSX content with a white background.
          No external dependencies, pure HTML/CSS implementation.
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
            Action
          </button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">
            Cancel
          </button>
        </div>
      </div>
    ),
  },
};

export const LongContent: Story = {
  args: {
    popoverTrigger: <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Long Content</button>,
    popoverContent: (
      <div className="space-y-3">
        <h3 className="font-bold text-lg">Long Content Example</h3>
        <p className="text-sm">
          This popover contains longer content to demonstrate how it handles
          multiple paragraphs and complex layouts with the default white background.
        </p>
        <p className="text-sm">
          The standalone implementation ensures good readability and contrast for all content types.
          No ES module dependencies means it works perfectly in Markdoc context.
        </p>
        <div className="border-t pt-2">
          <p className="text-xs text-gray-500">
            Footer content with additional information.
          </p>
        </div>
      </div>
    ),
  },
};

export const WithForm: Story = {
  args: {
    popoverTrigger: <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Form Popover</button>,
    popoverContent: (
      <div className="space-y-3">
        <h3 className="font-semibold">Contact Form</h3>
        <form className="space-y-2">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
          <button 
            type="submit" 
            className="w-full px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    ),
  },
};

export const MarkdocCompatible: Story = {
  args: {
    popoverTrigger: <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded cursor-pointer hover:bg-gray-200">Markdoc Compatible</span>,
    popoverContent: (
      <div className="space-y-2">
        <h4 className="font-semibold text-green-600">✅ Markdoc Compatible</h4>
        <ul className="text-sm space-y-1">
          <li>• No ES module dependencies</li>
          <li>• Pure HTML/CSS implementation</li>
          <li>• Works in CommonJS context</li>
          <li>• Default white background</li>
          <li>• Hover-based activation</li>
        </ul>
      </div>
    ),
  },
};
