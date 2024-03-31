import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef, useState } from 'react';
import { Button } from '../Button';

interface iTabsArrayProps {
  id: number;
  title: string;
  content: JSX.Element;
}

interface iTabsProps {
  defaultActive?: number;
  tabsArray: Array<iTabsArrayProps>;
}

export type TabsProps = ComponentPropsWithRef<'div'> & iTabsProps;

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ tabsArray, className, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState(
      props.defaultActive ? props.defaultActive : 0
    );

    const handleClick = (index: number) => {
      setActiveIndex(index);
    };

    return (
      <>
        <div
          ref={ref}
          className={cn(
            'text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700',
            className
          )}
          {...props}
        >
          <ul className="flex flex-wrap -mb-px">
            {tabsArray.map((tab) => (
              <li className="me-2" key={tab.id}>
                <Button
                  variant="ghost"
                  color="none"
                  onClick={() => handleClick(tab.id)}
                  className={cn(
                    'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                    activeIndex === tab.id
                      ? 'text-primary-500'
                      : 'text-gray-500'
                  )}
                >
                  {tab.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div key={activeIndex}>{tabsArray[activeIndex - 1]?.content}</div>
      </>
    );
  }
);
