import { cn } from '@/lib/utils';
import {
  CardComp,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './CardComp';

interface iCard {
  className?: string;
  cardHeaderClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  cardContentClassName?: string;
  cardFooterClassName?: string;
  cardTitle: JSX.Element;
  cardDescription: JSX.Element;
  cardContent: JSX.Element;
  cardActions: JSX.Element;
}

function Card({
  className,
  cardHeaderClassName,
  cardTitleClassName,
  cardDescriptionClassName,
  cardContentClassName,
  cardFooterClassName,
  cardTitle,
  cardDescription,
  cardContent,
  cardActions,
}: iCard) {
  return (
    <CardComp className={cn('w-full', className)}>
      <CardHeader className={cardHeaderClassName}>
        <CardTitle className={cardTitleClassName}>{cardTitle}</CardTitle>
        <CardDescription className={cardDescriptionClassName}>
          {cardDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className={cardContentClassName}>{cardContent}</CardContent>
      <CardFooter className={cn('flex justify-between', cardFooterClassName)}>
        {cardActions}
      </CardFooter>
    </CardComp>
  );
}

export {
  Card,
  CardComp,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
