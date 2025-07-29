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
  navClassName?: string;
  }

export const MenuListOne = ({
  menuArrays,
  library,
  type,
  className,
  showText = true,
  showIcon = true,
  tooltipClassName,
  navClassName,
  }: iDfxMenuList) => {
  if (library === 'react') {
    return (
      <nav className={cn('flex', navClassName)}>
        {menuArrays.map((menu) => {
          if(!showText){
            return (
              <Tooltip 
                  tooltipContent={<span className={'mx-4 font-medium whitespace-nowrap' }>{menu.title}</span>} 
                  tooltipTrigger={<TypographyComp
                    className={cn(
                      menu.active
                        ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light'
                        : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0',
                        className
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
                    ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light'
                    : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0',
                    className
                )}
                as={type}
                to={menu.path}
              >
                {showIcon && menu.menuIcon}
                <span className={'font-medium whitespace-nowrap	ml-2'}>{menu.title}</span>
              </TypographyComp>
            )
          }
        })}
      </nav>
    );
  }
  if (library === 'next') {
    return (
      <nav className={cn('flex', navClassName)}>
        {menuArrays.map((menu) => {
          if(!showText){
            return (
              <Tooltip 
                  tooltipContent={<span className={'mx-4 font-medium whitespace-nowrap'}>{menu.title}</span>} 
                  tooltipTrigger={<TypographyComp
                    className={cn(
                      menu.active
                        ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent'
                        : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0',
                        className
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
                    ? 'flex py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light'
                    : 'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-primary-light md:p-0',
                    className
                )}
                as={type}
                href={menu.path}
              >
                {showIcon && menu.menuIcon}
                <span className={'font-medium whitespace-nowrap	ml-2'}>{menu.title}</span>
              </TypographyComp>
            )
          }
        })}
      </nav>
    );
  }
};
