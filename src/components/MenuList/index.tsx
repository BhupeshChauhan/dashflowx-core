import { MenuListComp } from './variants/Basic';
import { MenuListOne } from './variants/MenuListOne';
import { MenuListTwo } from './variants/MenuListTwo';

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
  variant: 'basic' | 'one' | 'two';
  className?: string;
  showText?: boolean;
  showIcon?: boolean;
  tooltipClassName?: string;
  linkClassName?: string;
}

const MenuList = ({
  menuArrays,
  library,
  type,
  variant,
  className,
  showText,
  showIcon,
  tooltipClassName,
  linkClassName
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
        linkClassName={linkClassName}
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
        linkClassName={linkClassName}
      />
    );
  }
  if (variant === 'two') {
    return (
      <MenuListTwo
        menuArrays={menuArrays}
        library={library}
        type={type}
        className={className}
        showText={showText}
        showIcon={showIcon}
        tooltipClassName={tooltipClassName}
        linkClassName={linkClassName}
      />
    );
  }
  return null;
};

export { MenuList, MenuListComp, MenuListOne, type iDfxMenu };
