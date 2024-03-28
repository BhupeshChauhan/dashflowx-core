import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef, useState } from 'react';

interface iNavbarProps {
  logo?: JSX.Element;
  disabled?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export type BoxProps = ComponentPropsWithRef<'nav'> & iNavbarProps;

export const Navbar = forwardRef<HTMLDivElement, BoxProps>(
  ({ logo, children, ...props }, ref) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenutoggle = () => {
      setOpenMenu(!openMenu);
    };
    return (
      <nav
        className="bg-white border-gray-200 dark:bg-gray-900"
        ref={ref}
        {...props}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {logo}
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleMenutoggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={cn(
              openMenu ? '' : 'hidden ',
              'w-full md:block md:w-auto'
            )}
            id="navbar-default"
          >
            {children}
          </div>
        </div>
      </nav>
    );
  }
);
