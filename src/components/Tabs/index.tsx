import { cn } from '@/lib/utils';
import { useState } from 'react';
import { TabsComp, TabsContent, TabsList, TabsTrigger } from './TabsComp';

interface iTabs {
  tabsArray: Array<any>;
  buttonClassName?: string;
  defaultActive?: number;
  className?: string;
}
const Tabs = ({
  tabsArray,
  buttonClassName,
  defaultActive,
  className,
}: iTabs) => {
  const [activeIndex, setActiveIndex] = useState(
    defaultActive ? defaultActive : 0
  );

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  if (tabsArray.length === 0) {
    return null;
  }
  return (
    <TabsComp defaultValue="account" className={cn('w-[800px]', className)}>
      <TabsList className="flex items-start justify-start">
        {tabsArray.map((tab: any) => (
          <TabsTrigger
            value="account"
            key={tab.id}
            className={cn(
              'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
              activeIndex === tab.id ? 'text-primary-light' : 'text-gray-500',
              buttonClassName
            )}
            onClick={() => handleClick(tab.id)}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="account" className="w-full mt-5">
        {tabsArray[activeIndex - 1]?.content}
      </TabsContent>
    </TabsComp>
  );
};

export { Tabs, TabsComp, TabsContent, TabsList, TabsTrigger };
