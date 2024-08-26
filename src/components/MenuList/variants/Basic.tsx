import { Tooltip } from '@/components';
import { TypographyComp } from '@/components/Typography';
import { cn } from '@/lib/utils';

export interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iDfxMenuList {
  menuArrays: iDfxMenu[];
  library: 'react' | 'next';
  type: any;
  className?: string;
  showText?: boolean;
  showIcon?: boolean;
  tooltipClassName?: string;
  linkClassName?: string;
}

export const MenuListComp = ({
  menuArrays,
  library,
  type,
  className,
  showText = true,
  showIcon = true,
  tooltipClassName,
  linkClassName,
}: iDfxMenuList) => {
  if (library === 'react') {
    return (
      <nav className={cn(className)}>
        {menuArrays.map((menu) => {
          if (!showText) {
            return (
              <Tooltip
                tooltipContent={
                  <span className={'mx-4 font-medium whitespace-nowrap'}>
                    {menu.title}
                  </span>
                }
                tooltipTrigger={
                  <TypographyComp
                    className={cn(
                      menu.active
                        ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                        : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
                      linkClassName
                    )}
                    as={type}
                    to={menu.path}
                  >
                    {showIcon && menu.menuIcon}
                  </TypographyComp>
                }
                side="right"
                className={cn('ml-8', tooltipClassName)}
              />
            );
          }
          if (showText) {
            return (
              <TypographyComp
                className={cn(
                  menu.active
                    ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                    : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
                  linkClassName
                )}
                as={type}
                to={menu.path}
              >
                {showIcon && menu.menuIcon}
                <span className={'font-medium'}>{menu.title}</span>
              </TypographyComp>
            );
          }
        })}
      </nav>
    );
  }
  if (library === 'next') {
    return (
      <nav className={cn(className)}>
        {menuArrays.map((menu) => {
          if (!showText) {
            return (
              <Tooltip
                tooltipContent={
                  <span className={'mx-4 font-medium whitespace-nowrap'}>
                    {menu.title}
                  </span>
                }
                tooltipTrigger={
                  <TypographyComp
                    className={cn(
                      menu.active
                        ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                        : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
                      linkClassName
                    )}
                    as={type}
                    href={menu.path}
                  >
                    {showIcon && menu.menuIcon}
                  </TypographyComp>
                }
                side="right"
                className={cn('absolute top-0 left-0 ml-8', tooltipClassName)}
              />
            );
          }
          if (showText) {
            return (
              <TypographyComp
                className={cn(
                  menu.active
                    ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                    : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
                  linkClassName
                )}
                as={type}
                href={menu.path}
              >
                {showIcon && menu.menuIcon}
                <span className={'font-medium'}>{menu.title}</span>
              </TypographyComp>
            );
          }
        })}
      </nav>
    );
  }
};
