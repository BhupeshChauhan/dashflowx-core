import { CheckboxComp } from './CheckboxComp';
import { CheckboxBasic } from './variants/CheckboxBasic';
import { CheckboxOne } from './variants/CheckboxOne';
interface iCheckbox {
  value: any;
  onChange: any;
  label: string;
  checked: boolean;
  variant?: 'basic' | 'one';
}
function Checkbox({ value, onChange, label, checked, variant }: iCheckbox) {
  if (variant === 'basic') {
    return (
      <CheckboxBasic
        value={value}
        onChange={onChange}
        label={label}
        checked={checked}
      />
    );
  }
  if (variant === 'one') {
    return (
      <CheckboxOne
        value={value}
        onChange={onChange}
        label={label}
        checked={checked}
      />
    );
  }
  return null;
}

export { Checkbox, CheckboxComp };
