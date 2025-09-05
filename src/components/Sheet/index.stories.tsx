import type { Meta, StoryObj } from '@storybook/react';
import { 
  DynamicSheet, 
  InfoSheet, 
  SettingsSheet, 
  ConfirmationSheet
} from '.';

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
