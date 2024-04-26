import type { Meta, StoryObj } from '@storybook/react';
import { DfaxTabs } from '.';

const meta: Meta<typeof DfaxTabs> = {
  title: 'Components/DfaxTabs',
  component: DfaxTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: (
      <a
        href="#"
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        role="alert"
      >
        <span className="text-xs bg-primary-light-600 rounded-full text-white px-4 py-1.5 mr-3">
          New
        </span>{' '}
        <span className="text-sm font-medium">
          Flowbite is out! See what's new
        </span>
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    ),
    heading: (
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        We invest in the world’s potential
      </h1>
    ),
    description: (
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
    ),
    tabsArray: [
      {
        id: 1,
        title: 'Market',
        content: <div>Market</div>,
      },
      {
        id: 2,
        title: 'Market',
        content: <div>Market</div>,
      },
    ],
    defaultActive: 1,
  },
};
