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
  showText?: boolean;
  showIcon?: boolean;
  tooltipClassName?: string;
  className?: string;
}

export const MenuListComp = ({
  menuArrays,
  library,
  type,
  showText = true,
  showIcon = true,
  tooltipClassName,
  className,
}: iDfxMenuList) => {
  if (library === 'react') {
    return (
      <nav className='flex'>
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
                        ? 'flex items-center px-4 py-2 mt-5 text-primary-light border-primary-light transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                        : 'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
                      className
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
                    ? 'flex items-center px-4 py-2 mt-5 text-primary-light border-primary-light transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    : 'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
                  className
                )}
                as={type}
                to={menu.path}
              >
                {showIcon && menu.menuIcon}
                <span className={'font-medium ml-2'}>{menu.title}</span>
              </TypographyComp>
            );
          }
        })}
      </nav>
    );
  }
  if (library === 'next') {
    return (
      <nav className='flex'>
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
                        ? 'flex items-center px-4 py-2 mt-5 text-primary-light border-primary-light transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                        : 'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
                      className
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
                    ? 'flex items-center px-4 py-2 mt-5 text-primary-light border-primary-light transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    : 'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
                  className
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