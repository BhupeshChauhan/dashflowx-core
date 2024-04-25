import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef, useState } from 'react';
import { NavMenuThree } from '../../atoms/NavMenu';
import { Typography } from '../../atoms/Typography';

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
  menuArrays?: Array<menuArraysProps>;
  libraryType?: string;
  varient?: string;
  sideBarClassName?: string;
  navClassName?: string;
  navTitleClassName?: string;
  type?: string;
  elements?: JSX.Element;
  expandIcon?: JSX.Element;
}

export type SideBarProps = ComponentPropsWithRef<'div'> & iSideBarProps;

export const DfaxSideBar = forwardRef<HTMLDivElement, SideBarProps>(
  (
    {
      menuArrays,
      navItemClassName,
      navTitleClassName,
      navClassName,
      varient = 'left',
      libraryType = 'react',
      sideBarClassName,
      type,
      elements,
      expandIcon,
      ...props
    },
    ref
  ) => {
    const [displayText, setDisplayText] = useState('');
    const [expandCol, setExpandCol] = useState(false);
    const handleMouseOver = (index: any) => {
      setDisplayText(index);
    };
    const handleMouseOut = () => {
      setDisplayText('');
    };
    const HandleExpandCol = () => {
      setExpandCol((prev) => !prev);
    };
    if (type === 'icons') {
      return (
        <aside
          id="default-sidebar"
          className={cn(
            'fixed top-0 h-[calc(100vh-80px)] transition-transform -translate-x-full sm:translate-x-0',
            varient === 'left' ? 'left-0' : '',
            varient === 'right' ? 'right-0' : ''
          )}
          aria-label="Sidebar"
          ref={ref}
          {...props}
        >
          <div
            className={cn(
              'flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800',
              sideBarClassName
            )}
          >
            <NavMenuThree className={navItemClassName}>
              {menuArrays &&
                menuArrays.map((menu: menuArraysProps) => (
                  <li
                    className={cn(
                      'flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group',
                      menu.type === 'heading' ? '' : 'hover:bg-gray-100'
                    )}
                    key={menu.key}
                    onMouseOver={() => handleMouseOver(menu.key)}
                    onMouseOut={handleMouseOut}
                  >
                    {libraryType === 'react' ? (
                      <>
                        <Typography
                          as={menu.type}
                          to={menu.path}
                          className="flex items-center justify-start"
                        >
                          <span className="flex">
                            <span>{menu.menuIcon}</span>
                          </span>
                          <div
                            className={cn(
                              expandCol
                                ? menu.active
                                  ? 'block ml-2 py-2 px-3 w-60 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                                  : 'block ml-2 py-2 px-3 w-60 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                : displayText === menu.key
                                  ? 'w-fit absolute left-14 block text-primary-500 bg-white p-1 rounded-lg border-2'
                                  : 'w-fit absolute left-14 hidden bg-white p-1 rounded-lg border-2'
                            )}
                          >
                            {menu.title}
                          </div>
                        </Typography>
                      </>
                    ) : (
                      libraryType === 'next' && (
                        <>
                          <Typography
                            as={menu.type}
                            href={menu.path}
                            className="flex items-center justify-start"
                          >
                            <span className="flex">
                              <span>{menu.menuIcon}</span>
                            </span>
                            <div
                              className={cn(
                                expandCol
                                  ? menu.active
                                    ? 'block ml-2 py-2 px-3 w-64 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                                    : 'block ml-2 py-2 px-3 w-64 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                  : displayText === menu.key
                                    ? 'w-fit absolute left-14 block text-primary-500 bg-white p-1 rounded-lg border-2'
                                    : 'w-fit absolute left-14 hidden bg-white p-1 rounded-lg border-2'
                              )}
                            >
                              {menu.title}
                            </div>
                          </Typography>
                        </>
                      )
                    )}
                  </li>
                ))}
            </NavMenuThree>
          </div>
          <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-2 text-gray-900 rounded-lg group hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            {expandIcon && (
              <button
                onClick={HandleExpandCol}
                className={cn(
                  'flex items-center justify-center ml-2 w-full py-2 px-3 text-gray-900 rounded ',
                  expandCol ? 'rotate-180 duration-75' : 'duration-75'
                )}
              >
                {expandIcon}
              </button>
            )}
          </div>
        </aside>
      );
    }
    if (type === 'basic') {
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
            {menuArrays &&
              menuArrays.map((menu: menuArraysProps) => (
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
