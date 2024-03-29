import { Button } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { DfaxNavBar } from '.';
import logo from '../../../assets/react.svg';

const meta: Meta<typeof DfaxNavBar> = {
  title: 'Components/DfaxNavBar',
  component: DfaxNavBar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const VarientOne: Story = {
  args: {
    logo: (
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Dashflow X
        </span>
      </a>
    ),
    menuArrays: [
      {
        key: '1',
        title: 'Home',
        path: '/',
        active: true,
        type: 'a',
      },
      {
        key: '2',
        title: 'About',
        path: '/',
        active: false,
        type: 'a',
      },
      {
        key: '3',
        title: 'Services',
        path: '/',
        active: false,
        type: 'a',
      },
    ],
    actions: (
      <>
        <Button
          color="primary"
          size="md"
          variant="solid"
          className="mr-2 rounded-full"
        >
          Sign In
        </Button>

        <Button size="md" variant="outline" className="rounded-full">
          Sign Up
        </Button>
      </>
    ),
  },
};

export const VarientTwo: Story = {
  args: {
    logo: (
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Dashflow X
        </span>
      </a>
    ),
    menuArrays: [
      {
        key: '1',
        title: 'Home',
        path: '/',
        active: true,
        type: 'a',
      },
      {
        key: '2',
        title: 'About',
        path: '/',
        active: false,
        type: 'a',
      },
      {
        key: '3',
        title: 'Services',
        path: '/',
        active: false,
        type: 'a',
      },
    ],
    actions: (
      <>
        <Button
          color="primary"
          size="md"
          variant="solid"
          className="mr-2 rounded-full"
        >
          Sign In
        </Button>

        <Button size="md" variant="outline" className="rounded-full">
          Sign Up
        </Button>
      </>
    ),
    variant: 'two',
  },
};
