import { Button } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { DfaxHero } from '.';

const meta: Meta<typeof DfaxHero> = {
  title: 'Components/DfaxHero',
  component: DfaxHero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VarientOne: Story = {
  args: {
    heroImage: (
      <img
        className="w-full rounded-md"
        src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
        alt="Image Description"
      />
    ),
    actions: (
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Get started
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Contact sales team
        </Button>
      </div>
    ),
    heading: (
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
        Start your journey with <span className="text-blue-600">Preline</span>
      </h1>
    ),
    caption: (
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
        Hand-picked professionals and expertly crafted components, designed for
        any kind of entrepreneur. Hand-picked professionals and expertly crafted
        components, designed for any kind of entrepreneur. Hand-picked
        professionals and expertly crafted components, designed for any kind of
        entrepreneur.
      </p>
    ),
    variant: 'one',
  },
};

export const VarientTwo: Story = {
  args: {
    heroImage: (
      <img
        className="w-full rounded-md"
        src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
        alt="Image Description"
      />
    ),
    actions: (
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Get started
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Contact sales team
        </Button>
      </div>
    ),
    heading: (
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
        Start your journey with <span className="text-blue-600">Preline</span>
      </h1>
    ),
    caption: (
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
        Hand-picked professionals and expertly crafted components, designed for
        any kind of entrepreneur. Hand-picked professionals and expertly crafted
        components, designed for any kind of entrepreneur. Hand-picked
        professionals and expertly crafted components, designed for any kind of
        entrepreneur.
      </p>
    ),
    variant: 'two',
  },
};

export const VarientThree: Story = {
  args: {
    actions: (
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Get started
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Contact sales team
        </Button>
      </div>
    ),
    heading: (
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
        Start your journey with <span className="text-blue-600">Preline</span>
      </h1>
    ),
    caption: (
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
        Hand-picked professionals and expertly crafted components, designed for
        any kind of entrepreneur. Hand-picked professionals and expertly crafted
        components, designed for any kind of entrepreneur. Hand-picked
        professionals and expertly crafted components, designed for any kind of
        entrepreneur.
      </p>
    ),
    variant: 'three',
  },
};

export const VarientFour: Story = {
  args: {
    actions: (
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Get started
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Contact sales team
        </Button>
      </div>
    ),
    heading: (
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
        Start your journey with <span className="text-blue-600">Preline</span>
      </h1>
    ),
    caption: (
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
        Hand-picked professionals and expertly crafted components, designed for
        any kind of entrepreneur. Hand-picked professionals and expertly crafted
        components, designed for any kind of entrepreneur. Hand-picked
        professionals and expertly crafted components, designed for any kind of
        entrepreneur.
      </p>
    ),
    variant: 'four',
  },
};

export const VarientFive: Story = {
  args: {
    actions: (
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Get started
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
        <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Contact sales team
        </Button>
      </div>
    ),
    heading: (
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
        Start your journey with <span className="text-blue-600">Preline</span>
      </h1>
    ),
    caption: (
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
        Hand-picked professionals and expertly crafted components, designed for
        any kind of entrepreneur. Hand-picked professionals and expertly crafted
        components, designed for any kind of entrepreneur. Hand-picked
        professionals and expertly crafted components, designed for any kind of
        entrepreneur.
      </p>
    ),
    form: (
      <form action="#" className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-light-700 sm:w-fit hover:bg-primary-light-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-light-600 dark:hover:bg-primary-light-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    ),
    variant: 'five',
  },
};
