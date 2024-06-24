import { MenuListComp } from './variants/Basic';
import { MenuListOne } from './variants/MenuListOne';

interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iMenuList {
  menuArrays: iDfxMenu[];
  library: 'react' | 'next';
  type: any;
  variant: 'basic' | 'one';
  className?: string;
}

const MenuList = ({
  menuArrays,
  library,
  type,
  variant,
  className,
}: iMenuList) => {
  if (variant === 'basic') {
    return (
      <MenuListComp
        menuArrays={menuArrays}
        library={library}
        type={type}
        className={className}
      />
    );
  }
  if (variant === 'one') {
    return (
      <MenuListOne
        menuArrays={menuArrays}
        library={library}
        type={type}
        className={className}
      />
    );
  }
  return null;
};

export { MenuList, MenuListComp, MenuListOne, type iDfxMenu };
