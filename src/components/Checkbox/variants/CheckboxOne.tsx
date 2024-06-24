import { cn } from '@/lib/utils';
import { Label } from '../../Label';
import { CheckboxComp } from '../CheckboxComp';

interface iCheckbox {
  value: any;
  onChange: any;
  label: string;
  checked: boolean;
  className?: string;
  labelClassName?: string;
  checkboxClassName?: string;
  id?: string;
}

export const CheckboxOne = ({
  value,
  onChange,
  label,
  checked,
  checkboxClassName,
  className,
  labelClassName,
  id,
}: iCheckbox) => {
  return (
    <div className={cn('flex flex-col space-x-2', className)}>
      <CheckboxComp
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
        className={checkboxClassName}
      />

      <Label htmlFor={id} className={labelClassName}>
        {label}
      </Label>
    </div>
  );
};
