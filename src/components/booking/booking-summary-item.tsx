import { IconCalendar, IconProps } from '../icons';

export type BookingSummaryItemProps = {
  icon: React.ComponentType<IconProps>;
  label: React.ReactNode;
};

export default function BookingSummaryItem({ icon: Icon, label }: BookingSummaryItemProps) {
  return (
    <div className='flex items-center gap-3 text-sm font-medium'>
      <Icon className='text-gray-300 shrink-0' />
      <p className='line-clamp-2 capitalize'>{label}</p>
    </div>
  );
}
