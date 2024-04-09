import { Tabs } from '@/components';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iTabsArrayProps {
  id: number;
  title: string;
  content: JSX.Element;
}

interface iDfaxTabsProps {
  description: string;
  tabsArray: Array<iTabsArrayProps>;
  heading: JSX.Element;
  caption: JSX.Element;
  tabsClassName: string;
  defaultActive: number;
  buttonClassName: string;
}

export type DfaxTabsProps = ComponentPropsWithRef<'div'> & iDfaxTabsProps;

export const DfaxTabs = forwardRef<HTMLDivElement, DfaxTabsProps>(
  (
    {
      description,
      className,
      tabsArray,
      heading,
      caption,
      tabsClassName,
      defaultActive,
      buttonClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
        ref={ref}
        {...props}
      >
        {caption}
        {heading}
        {description}
        <Tabs
          tabsArray={tabsArray}
          className={tabsClassName}
          defaultActive={defaultActive}
          buttonClassName={buttonClassName}
        />
      </div>
    );
  }
);
