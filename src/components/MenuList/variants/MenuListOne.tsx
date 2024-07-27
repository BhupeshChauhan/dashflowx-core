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

export const MenuListOne = ({
  menuArrays,
  library,
  type,
  className,
  showText = true,
  showIcon = true,
  tooltipClassName,
  linkClassName
}: iDfxMenuList) => {
  if (library === 'react') {
    return (
      <nav
        className={cn(
          'font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0',
          className
        )}
      >
        {menuArrays.map((menu) => {
          if(!showText){
            return (
              <Tooltip 
                  tooltipContent={<span className={'mx-4 font-medium'}>{menu.title}</span>} 
                  tooltipTrigger={<TypographyComp
                    className={cn(
                      'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700', linkClassName
                    )}
                    as={type}
                    to={menu.path}
                  >
                    {showIcon && menu.menuIcon}
                  </TypographyComp>} 
                  side="right" 
                  className={cn("ml-8", tooltipClassName)}
                /> 
            )
          }
          if(showText){
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
            )
          }
        })}
      </nav>
    );
  }
  if (library === 'next') {
    return (
      <nav className={cn(
        'font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0',
        className
      )}>
        {menuArrays.map((menu) => {
          if(!showText){
            return (
              <Tooltip 
                  tooltipContent={<span className={'mx-4 font-medium'}>{menu.title}</span>} 
                  tooltipTrigger={<TypographyComp
                    className={cn(
                      'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700', linkClassName
                    )}
                    as={type}
                    href={menu.path}
                  >
                    {showIcon && menu.menuIcon}
                  </TypographyComp>} 
                  side="right" 
                  className={cn("ml-8", tooltipClassName)}
                /> 
            )
          }
          if(showText){
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
            )
          }
        })}
      </nav>
    );
  }
};
