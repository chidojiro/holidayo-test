import clsx from 'clsx';
import { IconProps } from '../icons';

export type BookingMetadataItemProps = {
  icon: React.ComponentType<IconProps>;
  label: string;
  subLabel?: string;
  className?: string;
};

export default function BookingMetadataItem({
  icon: Icon,
  label,
  subLabel,
  className,
}: BookingMetadataItemProps) {
  return (
    <div className={clsx('flex items-center gap-2.5', className)}>
      <div className='rounded-full w-7 h-7 flex items-center justify-center bg-cyan-100'>
        <Icon />
      </div>

      <p className='text-sm'>
        {label}
        {subLabel && <span className='text-gray-400 ml-1.5'>{subLabel}</span>}
      </p>
    </div>
  );
}
