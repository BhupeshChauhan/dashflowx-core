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
  tooltipClassName?: string;
}

const MenuList = ({
  menuArrays,
  library,
  type,
  variant,
  className,
  showText,
  showIcon,
  tooltipClassName
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
        tooltipClassName={tooltipClassName}
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
        tooltipClassName={tooltipClassName}
      />
    );
  }
  return null;
};

export { MenuList, MenuListComp, MenuListOne, type iDfxMenu };
