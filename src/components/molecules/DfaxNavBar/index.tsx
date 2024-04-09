import { Typography } from '@/components';
import { NavMenu, NavMenuTwo } from '@/components/atoms/NavMenu';
import { Navbar, NavbarTwo } from '@/components/atoms/Navbar';
import { cn } from '@/utils';

interface menuArraysProps {
  active: boolean;
  type: any;
  path: string;
  title: string;
  key: string;
}
interface iDfaxNavBarProps {
  logo: JSX.Element;
  menuArrays: Array<menuArraysProps>;
  actions?: JSX.Element;
  menuIcon?: JSX.Element;
  navClassName?: string;
  navItemClassName?: string;
  variant?: string;
  libraryType?: string;
}

export const DfaxNavBar: React.FC<iDfaxNavBarProps> = ({
  menuArrays,
  actions,
  logo,
  menuIcon,
  navClassName,
  navItemClassName,
  variant,
  libraryType = 'react',
}) => {
  if (variant === 'two') {
    return (
      <NavbarTwo
        logo={logo}
        menuIcon={menuIcon}
        className={navClassName}
        actions={actions}
      >
        <NavMenuTwo className={navItemClassName} actions={actions}>
          {menuArrays.map((menu: menuArraysProps) => (
            <li className="flex items-center justify-center" key={menu.key}>
              {libraryType === 'react' && (
                <Typography
                  className={cn(
                    menu.active
                      ? 'block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                      : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  )}
                  as={menu.type}
                  to={menu.path}
                >
                  {menu.title}
                </Typography>
              )}
              {libraryType === 'next' && (
                <Typography
                  className={cn(
                    menu.active
                      ? 'block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                      : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                  )}
                  as={menu.type}
                  href={menu.path}
                >
                  {menu.title}
                </Typography>
              )}
            </li>
          ))}
        </NavMenuTwo>
      </NavbarTwo>
    );
  }
  return (
    <Navbar logo={logo} menuIcon={menuIcon} className={navClassName}>
      <NavMenu className={navItemClassName}>
        {menuArrays.map((menu: menuArraysProps) => (
          <li className="flex items-center justify-center" key={menu.key}>
            {libraryType === 'react' && (
              <Typography
                className={cn(
                  menu.active
                    ? 'block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                )}
                as={menu.type}
                to={menu.path}
              >
                {menu.title}
              </Typography>
            )}
            {libraryType === 'next' && (
              <Typography
                className={cn(
                  menu.active
                    ? 'block py-2 px-3 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 dark:text-white md:dark:text-blue-500'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                )}
                as={menu.type}
                href={menu.path}
              >
                {menu.title}
              </Typography>
            )}
          </li>
        ))}
        <li>{actions}</li>
      </NavMenu>
    </Navbar>
  );
};
