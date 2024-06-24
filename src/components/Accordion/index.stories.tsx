import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';

const meta: Meta<typeof Accordion> = {
  title: 'Element/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: [
      {
        value: 'item-1',
        title: 'Is it accessible?',
        description: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        value: 'item-2',
        title: 'Is it styled?',
        description:
          'Yes. It comes with default styles that matches the other components&apos; aesthetic.',
      },
      {
        value: 'item-3',
        title: 'Is it animated?',
        description:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
    variant: 'basic',
  },
};

export const One: Story = {
  args: {
    items: [
      {
        value: 'item-1',
        title: 'Is it accessible?',
        description: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        value: 'item-2',
        title: 'Is it styled?',
        description:
          'Yes. It comes with default styles that matches the other components&apos; aesthetic.',
      },
      {
        value: 'item-3',
        title: 'Is it animated?',
        description:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
    variant: 'one',
  },
};
