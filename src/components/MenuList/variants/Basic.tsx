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
}

export const MenuListComp = ({
  menuArrays,
  library,
  type,
  className,
  showText = true,
  showIcon = true,
}: iDfxMenuList) => {
  if (library === 'react') {
    return (
      <nav className={cn(className)}>
        {menuArrays.map((menu) => (
          <TypographyComp
            className={cn(
              'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
            )}
            as={type}
            to={menu.path}
          >
            {showIcon && menu.menuIcon}

            {showText && (
              <span className={'mx-4 font-medium'}>{menu.title}</span>
            )}
          </TypographyComp>
        ))}
      </nav>
    );
  }
  if (library === 'next') {
    return (
      <nav>
        {menuArrays.map((menu) => (
          <TypographyComp
            className={cn(
              'flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
            )}
            as={type}
            href={menu.path}
          >
            {showIcon && menu.menuIcon}

            {showText && (
              <span className={'mx-4 font-medium'}>{menu.title}</span>
            )}
          </TypographyComp>
        ))}
      </nav>
    );
  }
};
