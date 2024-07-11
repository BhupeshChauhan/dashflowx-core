import {
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../DropDownMenu/DropdownMenuComp';
import {
  BreadcrumbComp,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './BreadcrumbComp';

interface iBreadcrumbItemChild {
  title: string | JSX.Element;
  href?: string;
}
interface iBreadcrumbItem {
  id: string;
  type: 'item' | 'dropdown';
  title: string | JSX.Element;
  href?: string;
  children?: iBreadcrumbItemChild[];
  separator?: boolean;
}
interface iBreadcrumb {
  breadcrumbList: iBreadcrumbItem[];
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}
const Breadcrumb = ({
  breadcrumbList,
  className,
  listClassName,
  itemClassName,
  activeItemClassName
}: iBreadcrumb) => {
  return (
    <BreadcrumbComp className={className}>
      <BreadcrumbList className={listClassName}>
        {breadcrumbList.map((breadcrumb, index) => {
          return (
            <>
              {breadcrumbList.length - 1 === index && (
                <BreadcrumbItem className={activeItemClassName} key={breadcrumb.id}>
                  <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                </BreadcrumbItem>
              )}
              {breadcrumbList.length - 1 !== index &&
                breadcrumb.type === 'item' && (
                  <BreadcrumbItem className={itemClassName} key={breadcrumb.id}>
                    <BreadcrumbLink href={breadcrumb.href}>
                      {breadcrumb.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              {breadcrumb.type === 'dropdown' && (
                <BreadcrumbItem className={itemClassName} key={breadcrumb.id}>
                  <DropdownMenuComp>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {breadcrumb?.children?.map((child) => (
                        <DropdownMenuItem className={itemClassName}>
                          {child.title}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenuComp>
                </BreadcrumbItem>
              )}
              {breadcrumb.separator && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbComp>
  );
};

export {
  Breadcrumb,
  BreadcrumbComp,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
