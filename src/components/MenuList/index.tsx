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
  showText?: boolean;
  showIcon?: boolean;
}

const MenuList = ({
  menuArrays,
  library,
  type,
  variant,
  className,
  showText,
  showIcon,
}: iMenuList) => {
  if (variant === 'basic') {
    return (
      <MenuListComp
        menuArrays={menuArrays}
        library={library}
        type={type}
        className={className}
        showText={showText}
        showIcon={showIcon}
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
        showText={showText}
        showIcon={showIcon}
      />
    );
  }
  return null;
};

export { MenuList, MenuListComp, MenuListOne, type iDfxMenu };
