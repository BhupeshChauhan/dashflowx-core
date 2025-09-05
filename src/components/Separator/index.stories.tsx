import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '.';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'muted', 'destructive', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    className: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    color: 'default',
    variant: 'solid',
    size: 'md',
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    color: 'default',
    variant: 'solid',
    size: 'md',
  },
  render: (args) => (
    <div className="w-64 p-4">
      <div className="space-y-4">
        <div className="text-sm text-gray-600">Content above</div>
        <Separator {...args} />
        <div className="text-sm text-gray-600">Content below</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    color: 'default',
    variant: 'solid',
    size: 'md',
  },
  render: (args) => (
    <div className="h-32 p-4">
      <div className="flex h-full items-center space-x-4">
        <div className="text-sm text-gray-600">Left</div>
        <Separator {...args} />
        <div className="text-sm text-gray-600">Right</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div className="space-y-2">
        <div className="text-sm font-medium">Default</div>
        <Separator color="default" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Primary</div>
        <Separator color="primary" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Secondary</div>
        <Separator color="secondary" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Accent</div>
        <Separator color="accent" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Muted</div>
        <Separator color="muted" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Destructive</div>
        <Separator color="destructive" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Success</div>
        <Separator color="success" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Warning</div>
        <Separator color="warning" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div className="space-y-2">
        <div className="text-sm font-medium">Solid</div>
        <Separator variant="solid" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Dashed</div>
        <Separator variant="dashed" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Dotted</div>
        <Separator variant="dotted" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div className="space-y-2">
        <div className="text-sm font-medium">Small</div>
        <Separator size="sm" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Medium</div>
        <Separator size="md" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Large</div>
        <Separator size="lg" />
      </div>
    </div>
  ),
};

export const VerticalSizes: Story = {
  render: () => (
    <div className="h-32 space-x-4 flex items-center">
      <div className="space-y-2 flex flex-col items-center">
        <div className="text-xs font-medium">Small</div>
        <Separator orientation="vertical" size="sm" />
      </div>
      <div className="space-y-2 flex flex-col items-center">
        <div className="text-xs font-medium">Medium</div>
        <Separator orientation="vertical" size="md" />
      </div>
      <div className="space-y-2 flex flex-col items-center">
        <div className="text-xs font-medium">Large</div>
        <Separator orientation="vertical" size="lg" />
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    orientation: 'horizontal',
    color: 'primary',
    variant: 'dashed',
    size: 'lg',
    className: 'my-8',
  },
  render: (args) => (
    <div className="w-64 p-4">
      <div className="space-y-4">
        <div className="text-sm text-gray-600">Content above</div>
        <Separator {...args} />
        <div className="text-sm text-gray-600">Content below</div>
      </div>
    </div>
  ),
};

export const LayoutExample: Story = {
  render: () => (
    <div className="w-80 h-48 border rounded-lg p-4">
      <div className="h-full flex flex-col">
        <div className="text-sm font-medium mb-2">Header</div>
        <Separator className="mb-4" />
        
        <div className="flex-1 flex">
          <div className="flex-1 text-sm text-gray-600">Main Content</div>
          <Separator orientation="vertical" className="mx-4" />
          <div className="flex-1 text-sm text-gray-600">Sidebar</div>
        </div>
        
        <Separator className="mt-4" />
        <div className="text-sm font-medium mt-2">Footer</div>
      </div>
    </div>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Separators</h3>
        <div className="space-y-4">
          {(['default', 'primary', 'secondary', 'accent', 'muted', 'destructive', 'success', 'warning'] as const).map(color => (
            <div key={color} className="space-y-2">
              <div className="text-sm font-medium capitalize">{color}</div>
              <div className="space-y-1">
                {(['solid', 'dashed', 'dotted'] as const).map(variant => (
                  <div key={variant} className="flex items-center space-x-4">
                    <span className="text-xs w-12 capitalize">{variant}</span>
                    <Separator 
                      orientation="horizontal" 
                      color={color} 
                      variant={variant} 
                      size="md" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Vertical Separators</h3>
        <div className="flex space-x-8">
          {(['default', 'primary', 'secondary', 'accent'] as const).map(color => (
            <div key={color} className="space-y-2">
              <div className="text-sm font-medium capitalize">{color}</div>
              <div className="space-y-1">
                {(['solid', 'dashed', 'dotted'] as const).map(variant => (
                  <div key={variant} className="flex items-center space-x-2 h-8">
                    <span className="text-xs w-12 capitalize">{variant}</span>
                    <Separator 
                      orientation="vertical" 
                      color={color} 
                      variant={variant} 
                      size="md" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
