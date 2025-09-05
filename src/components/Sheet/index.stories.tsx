import type { Meta, StoryObj } from '@storybook/react';
import { 
  DynamicSheet, 
  InfoSheet, 
  SettingsSheet, 
  ConfirmationSheet
} from '.';
import { Button } from '../Button';

const meta: Meta<typeof DynamicSheet> = {
  title: 'Components/Sheet',
  component: DynamicSheet,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    config: {
      control: 'object',
    },
    open: {
      control: 'boolean',
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
    config: {
      id: 'default',
      title: 'Default Sheet',
      description: 'This is a default sheet configuration.',
      side: 'right',
      size: 'md',
      content: (
        <div className="py-4">
          <p className="text-sm text-gray-600">
            This is the default sheet content. You can put any React content here.
          </p>
        </div>
      ),
      actions: [
        {
          id: 'ok',
          label: 'OK',
          variant: 'primary',
          type: 'button',
          closeOnClick: true,
        },
      ],
    },
  },
};

export const InfoSheetExample: Story = {
  render: () => <InfoSheet />,
};

export const SettingsSheetExample: Story = {
  render: () => <SettingsSheet />,
};

export const ConfirmationSheetExample: Story = {
  render: () => <ConfirmationSheet />,
};

export const BackgroundColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Background Colors</h3>
        <div className="flex gap-2 flex-wrap">
          {(['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'emerald', 'teal', 'cyan'] as const).map(color => (
            <DynamicSheet
              key={color}
              config={{
                id: color,
                title: `${color.charAt(0).toUpperCase() + color.slice(1)} Background`,
                description: `This sheet has a ${color} background color.`,
                side: 'right',
                size: 'md',
                backgroundColor: color,
                backgroundIntensity: '50',
                content: (
                  <div className="py-4">
                    <p className="text-sm text-gray-600">
                      This sheet uses the {color}-50 background color.
                    </p>
                  </div>
                ),
                actions: [
                  { id: 'close', label: 'Close', variant: 'outline', type: 'button', closeOnClick: true },
                ],
              }}
              trigger={<Button variant="outline">{color.charAt(0).toUpperCase() + color.slice(1)}</Button>}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const BackgroundIntensities: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Background Intensities</h3>
        <div className="flex gap-2 flex-wrap">
          {(['50', '100', '200', '300', '400', '500'] as const).map(intensity => (
            <DynamicSheet
              key={intensity}
              config={{
                id: intensity,
                title: `Blue ${intensity}`,
                description: `This sheet has blue-${intensity} background.`,
                side: 'right',
                size: 'md',
                backgroundColor: 'blue',
                backgroundIntensity: intensity,
                content: (
                  <div className="py-4">
                    <p className="text-sm text-gray-600">
                      This sheet uses blue-{intensity} background.
                    </p>
                  </div>
                ),
                actions: [
                  { id: 'close', label: 'Close', variant: 'outline', type: 'button', closeOnClick: true },
                ],
              }}
              trigger={<Button variant="outline">Blue {intensity}</Button>}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const SpecialBackgrounds: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Special Backgrounds</h3>
        <div className="flex gap-2 flex-wrap">
          <DynamicSheet
            config={{
              id: 'transparent',
              title: 'Transparent',
              description: 'This sheet has a transparent background.',
              side: 'right',
              size: 'md',
              backgroundColor: 'transparent',
              content: (
                <div className="py-4">
                  <p className="text-sm text-gray-600">
                    This sheet has a transparent background.
                  </p>
                </div>
              ),
              actions: [
                { id: 'close', label: 'Close', variant: 'outline', type: 'button', closeOnClick: true },
              ],
            }}
            trigger={<Button variant="outline">Transparent</Button>}
          />
          
          <DynamicSheet
            config={{
              id: 'glass',
              title: 'Glass Effect',
              description: 'This sheet has a glass morphism effect.',
              side: 'right',
              size: 'md',
              backgroundColor: 'glass',
              content: (
                <div className="py-4">
                  <p className="text-sm text-gray-600">
                    This sheet has a glass morphism effect with backdrop blur.
                  </p>
                </div>
              ),
              actions: [
                { id: 'close', label: 'Close', variant: 'outline', type: 'button', closeOnClick: true },
              ],
            }}
            trigger={<Button variant="outline">Glass</Button>}
          />
          
          <DynamicSheet
            config={{
              id: 'gradient',
              title: 'Gradient',
              description: 'This sheet has a gradient background.',
              side: 'right',
              size: 'md',
              backgroundColor: 'gradient',
              content: (
                <div className="py-4">
                  <p className="text-sm text-gray-600">
                    This sheet has a beautiful gradient background.
                  </p>
                </div>
              ),
              actions: [
                { id: 'close', label: 'Close', variant: 'outline', type: 'button', closeOnClick: true },
              ],
            }}
            trigger={<Button variant="outline">Gradient</Button>}
          />
        </div>
      </div>
    </div>
  ),
};

export const CustomBackgroundColor: Story = {
  args: {
    config: {
      id: 'custom-bg',
      title: 'Custom Background',
      description: 'This sheet has a custom background color.',
      side: 'right',
      size: 'md',
      customBgColor: '#f0f9ff',
      content: (
        <div className="py-4">
          <p className="text-sm text-gray-600">
            This sheet uses a custom background color: #f0f9ff
          </p>
        </div>
      ),
      actions: [
        {
          id: 'ok',
          label: 'OK',
          variant: 'primary',
          type: 'button',
          closeOnClick: true,
        },
      ],
    },
  },
};
