import clsx from 'clsx';
import { IconProps } from '../icons';

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  variant?: 'primary' | 'secondary';
  icon?: React.ComponentType<IconProps>;
};

export default function Button({
  variant = 'primary',
  type = 'button',
  className,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={clsx(
        {
          'bg-cyan-400 hover:bg-cyan-500 text-white': variant === 'primary',
          'bg-gray-500 text-black': variant === 'secondary',
        },
        'h-9 flex items-center justify-center rounded-full gap-1.5 px-4 transition-colors',
        className,
      )}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
}
