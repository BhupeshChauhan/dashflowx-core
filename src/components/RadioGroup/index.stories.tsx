import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '.';

const meta: Meta<typeof RadioGroup> = {
  title: 'Element/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: [
      {
        id: 'comfortable',
        title: 'Comfortable',
        value: 'comfortable',
      },
      {
        id: 'business',
        title: 'Business',
        value: 'business',
      },
      {
        id: 'premium',
        title: 'Premium',
        value: 'premium',
      },
    ],
    defaultValue: 'comfortable',
  },
};
