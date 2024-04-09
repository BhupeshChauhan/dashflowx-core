import { ComponentPropsWithRef, forwardRef } from 'react';
import { Typography } from '../Typography';

interface iComponentCardProps {
  label: string;
  image: JSX.Element;
}

export type ComponentCardProps = ComponentPropsWithRef<'div'> &
  iComponentCardProps;

export const ComponentCard = forwardRef<HTMLDivElement, ComponentCardProps>(
  ({ image, label, ...props }, ref) => {
    return (
      <Typography
        className="dark:hover:shadow-lg-light h-64 rounded-lg border border-gray-100 bg-white hover:border-white hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
        ref={ref}
        {...props}
      >
        <div className="p-10 flex items-center justify-between rounded-t-md border-b border-gray-200 bg-gray-50 px-5 py-2.5 dark:border-gray-700 dark:bg-gray-800">
          <span className="text-base font-medium text-gray-900 dark:text-white">
            {label}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            <svg
              className="h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              ></path>
            </svg>
          </span>
        </div>
        <div className="flex h-52 items-center justify-center">
          <div className="relative h-4/6 w-56 overflow-hidden">
            <span>{image}</span>
          </div>
        </div>
      </Typography>
    );
  }
);
