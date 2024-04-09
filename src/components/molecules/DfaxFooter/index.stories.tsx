import type { Meta, StoryObj } from '@storybook/react';
import { DfaxFooter } from '.';

const meta: Meta<typeof DfaxFooter> = {
  title: 'Components/DfaxFooter',
  component: DfaxFooter,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FooterOne: Story = {
  args: {
    copyRight: (
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          DashFlowX
        </a>
        . All Rights Reserved.
      </span>
    ),
    actions: [
      {
        id: 1,
        label: (
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        ),
      },
      {
        id: 2,
        label: (
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        ),
      },
      {
        id: 3,
        label: (
          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        ),
      },
      {
        id: 4,
        label: (
          <a href="#" className="hover:underline me-4 md:me-6">
            Contact
          </a>
        ),
      },
    ],
    variant: 'one',
  },
};
