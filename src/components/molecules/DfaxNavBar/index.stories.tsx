import type { Meta, StoryObj } from '@storybook/react';
import { DfaxNavBar } from '.';

const meta: Meta<typeof DfaxNavBar> = {
  title: 'Components/DfaxNavBar',
  component: DfaxNavBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    logo: (
      <>
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </>
    ),
  },
};
