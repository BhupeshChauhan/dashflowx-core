import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { NavMenuThree } from '../NavMenu';
import { Typography } from '../Typography';

interface menuArraysProps {
  active?: boolean;
  type: any;
  path?: string;
  title: string;
  key: string;
  menuIcon?: JSX.Element;
  menutype?: string;
}

interface iSideBarProps {
  actions?: JSX.Element;
  navItemClassName?: string;
  menuArrays: Array<menuArraysProps>;
  libraryType?: string;
  varient?: string;
  sideBarClassName?: string;
  navClassName?: string;
  navTitleClassName?: string;
}
interface iBasicSideBarProps {
  elements?: JSX.Element;
  navItemClassName?: string;
  sideBarClassName?: string;
  varient?: string;
}
export type SideBarProps = ComponentPropsWithRef<'div'> & iSideBarProps;

export type BasicSideBarProps = ComponentPropsWithRef<'div'> &
  iBasicSideBarProps;

export const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  (
    {
      menuArrays,
      navItemClassName,
      navTitleClassName,
      navClassName,
      varient = 'left',
      libraryType = 'react',
      sideBarClassName,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        id="default-sidebar"
        className={cn(
          'fixed top-0 w-64 h-[calc(100vh-70px)] transition-transform -translate-x-full sm:translate-x-0',
          varient === 'left' ? 'left-0' : '',
          varient === 'right' ? 'right-0' : ''
        )}
        aria-label="Sidebar"
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800',
            sideBarClassName
          )}
        >
          <NavMenuThree className={navItemClassName}>
            {menuArrays.map((menu: menuArraysProps) => (
              <li
                className={cn(
                  'flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group',
                  menu.type === 'heading' ? '' : 'hover:bg-gray-100'
                )}
                key={menu.key}
              >
                {menu.type === 'heading' ? (
                  <>
                    <span className={cn(menu.menuIcon ? 'mr-3' : '')}>
                      {menu.menuIcon}
                    </span>
                    <Typography
                      className={cn(
                        'block text-sm rounded md:bg-transparent font-bold',
                        navTitleClassName
                      )}
                      as={'h1'}
                    >
                      {menu.title}
                    </Typography>
                  </>
                ) : libraryType === 'react' ? (
                  <>
                    <span className={cn(menu.menuIcon ? 'mr-3' : '')}>
                      {menu.menuIcon}
                    </span>
                    <Typography
                      className={cn(
                        menu.active
                          ? 'block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                          : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
                        navClassName
                      )}
                      as={menu.type}
                      to={menu.path}
                    >
                      {menu.title}
                    </Typography>
                  </>
                ) : (
                  libraryType === 'next' && (
                    <>
                      <span className={cn(menu.menuIcon ? 'mr-3' : '')}>
                        {menu.menuIcon}
                      </span>
                      <Typography
                        className={cn(
                          menu.active
                            ? 'block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                            : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
                          navClassName
                        )}
                        as={menu.type}
                        href={menu.path}
                      >
                        {menu.title}
                      </Typography>
                    </>
                  )
                )}
              </li>
            ))}
          </NavMenuThree>
        </div>
      </aside>
    );
  }
);

export const BasicSideBar = forwardRef<HTMLDivElement, BasicSideBarProps>(
  (
    {
      elements,
      navItemClassName,
      varient = 'left',
      sideBarClassName,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        id="default-sidebar"
        className={cn(
          'fixed top-0 w-64 h-[calc(100vh-70px)] transition-transform -translate-x-full sm:translate-x-0',
          varient === 'left' ? 'left-0' : '',
          varient === 'right' ? 'right-0' : ''
        )}
        aria-label="Sidebar"
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800',
            sideBarClassName
          )}
        >
          {elements}
        </div>
      </aside>
    );
  }
);
