import type { Meta, StoryObj } from '@storybook/react';
import { ComponentCard } from '.';

const meta: Meta<typeof ComponentCard> = {
  title: 'Element/ComponentCard',
  component: ComponentCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: 'Alerts',
    image: (
      <img
        alt="Alerts"
        src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
        decoding="async"
        data-nimg="fill"
        sizes="100vw"
      />
    ),
  },
};
