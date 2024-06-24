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
}

export const MenuListOne = ({
  menuArrays,
  library,
  type,
  className,
}: iDfxMenuList) => {
  if (library === 'react') {
    return (
      <nav
        className={cn(
          'font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0',
          className
        )}
      >
        {menuArrays.map((menu) => (
          <TypographyComp
            className={cn(
              menu.active
                ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            )}
            as={type}
            to={menu.path}
          >
            {menu.title}
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
              menu.active
                ? 'block py-2 px-3 text-white bg-primary-light rounded md:bg-transparent md:text-primary-light md:p-0 dark:text-white md:dark:text-blue-500'
                : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-light md:p-0 dark:text-white md:dark:hover:text-primary-light dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            )}
            as={type}
            href={menu.path}
          >
            {menu.title}
          </TypographyComp>
        ))}
      </nav>
    );
  }
};
