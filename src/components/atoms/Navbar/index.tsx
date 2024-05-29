import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef, useState } from 'react';
import { Button } from '../Button';

interface iNavbarProps {
  logo?: JSX.Element;
  menuIcon?: JSX.Element;
  actions?: JSX.Element;
  style?: any;
}

export type BoxProps = ComponentPropsWithRef<'nav'> & iNavbarProps;

export const Navbar = forwardRef<HTMLDivElement, BoxProps>(
  ({ logo, className, menuIcon, style, children, ...props }, ref) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenutoggle = () => {
      setOpenMenu(!openMenu);
    };
    return (
      <nav
        className={cn('fixed top-0 left-0 w-full z-10', className)}
        ref={ref}
        style={style}
        {...props}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {logo}
          <Button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleMenutoggle}
          >
            <span className="sr-only">Open main menu</span>
            {menuIcon ? (
              menuIcon
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </Button>
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

export const NavbarTwo = forwardRef<HTMLDivElement, BoxProps>(
  ({ logo, className, menuIcon, children, style, actions, ...props }, ref) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenutoggle = () => {
      setOpenMenu(!openMenu);
    };
    return (
      <nav
        className={cn('fixed top-0 left-0 w-full z-10', className)}
        ref={ref}
        style={style}
        {...props}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
          <div className="mr-16">{logo}</div>
          <Button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleMenutoggle}
          >
            <span className="sr-only">Open main menu</span>
            {menuIcon ? (
              menuIcon
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </Button>
          <div
            className={cn(
              openMenu ? '' : 'hidden ',
              'w-full md:block md:w-auto'
            )}
            id="navbar-default"
          >
            {children}
          </div>
          <div className="flex-1 hidden md:flex items-center justify-end">
            <div>{actions}</div>
          </div>
        </div>
      </nav>
    );
  }
);

export const NavbarThree = forwardRef<HTMLDivElement, BoxProps>(
  ({ logo, className, menuIcon, children, actions, style, ...props }, ref) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenutoggle = () => {
      setOpenMenu(!openMenu);
    };
    return (
      <nav
        className={cn('fixed top-0 left-0 w-full z-10', className)}
        ref={ref}
        {...props}
        style={style}
      >
        <div className="flex flex-wrap items-center mx-auto p-4">
          <div className="mr-16">{logo}</div>
          <Button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleMenutoggle}
          >
            <span className="sr-only">Open main menu</span>
            {menuIcon ? (
              menuIcon
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </Button>
          <div
            className={cn(
              openMenu ? '' : 'hidden ',
              'w-full md:block md:w-auto'
            )}
            id="navbar-default"
          >
            {children}
          </div>
          <div className="flex-1 hidden md:flex items-center justify-end">
            <div>{actions}</div>
          </div>
        </div>
      </nav>
    );
  }
);
