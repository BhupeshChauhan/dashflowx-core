import { Tabs } from '@/components';

export const DfaxTabs = ({
  caption,
  heading,
  description,
  tabsArray,
  tabsClassName,
  defaultActive,
}: any) => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      {caption}
      {heading}
      {description}
      <Tabs
        tabsArray={tabsArray}
        className={tabsClassName}
        defaultActive={defaultActive}
      />
    </div>
  );
};
