import { cn } from '@/lib/utils';
import { TypographyComp as Typography } from '../Typography/TypographyComp';
import {
  NavbarComp,
  NavbarThree,
  NavbarTwo,
  NavMenu,
  NavMenuTwo,
} from './NavbarComp';

interface menuArraysProps {
  active: boolean;
  type: any;
  path: string;
  title: string;
  key: string;
}
interface iNavBarProps {
  logo: JSX.Element;
  menuArrays?: Array<menuArraysProps>;
  actions?: JSX.Element;
  menuIcon?: JSX.Element;
  navClassName?: string;
  navItemClassName?: string;
  variant?: string;
  libraryType?: string;
  style?: any;
}

const NavBar: React.FC<iNavBarProps> = ({
  menuArrays,
  actions,
  logo,
  menuIcon,
  navClassName,
  navItemClassName,
  variant,
  style,
  libraryType = 'react',
}) => {
  if (variant === 'two') {
    return (
      <NavbarTwo
        logo={logo}
        menuIcon={menuIcon}
        className={navClassName}
        actions={actions}
        style={style}
        hideMenuIcon={menuArrays && menuArrays?.length > 0 ? false : true}
      >
        <NavMenuTwo className={navItemClassName} actions={actions}>
          {menuArrays &&
            menuArrays.map((menu: menuArraysProps) => (
              <li className="flex items-center justify-center" key={menu.key}>
                {libraryType === 'react' && (
                  <Typography
                    className={cn(
                      menu.active
                        ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                        : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
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
                        ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                        : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
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
  if (variant === 'three') {
    return (
      <NavbarThree
        logo={logo}
        menuIcon={menuIcon}
        className={navClassName}
        actions={actions}
        style={style}
        hideMenuIcon={menuArrays && menuArrays?.length > 0 ? false : true}
      >
        {menuArrays && (
          <NavMenuTwo className={navItemClassName} actions={actions}>
            {menuArrays.map((menu: menuArraysProps) => (
              <li className="flex items-center justify-center" key={menu.key}>
                {libraryType === 'react' && (
                  <Typography
                    className={cn(
                      menu.active
                        ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                        : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
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
                        ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                        : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
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
        )}
      </NavbarThree>
    );
  }
  return (
    <NavbarComp
      logo={logo}
      menuIcon={menuIcon}
      className={navClassName}
      style={style}
      hideMenuIcon={menuArrays && menuArrays?.length > 0 ? false : true}
    >
      <NavMenu className={navItemClassName}>
        {menuArrays &&
          menuArrays.map((menu: menuArraysProps) => (
            <li className="flex items-center justify-center" key={menu.key}>
              {libraryType === 'react' && (
                <Typography
                  className={cn(
                    menu.active
                      ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                      : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
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
                      ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                      : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
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
    </NavbarComp>
  );
};

export { NavBar, NavbarComp, NavbarThree, NavbarTwo, NavMenu, NavMenuTwo };
