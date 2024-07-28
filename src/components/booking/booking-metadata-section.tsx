import BookingMetadataItem from '@/components/booking/booking-metadata-item';
import Button from '@/components/core/button';
import Price from '@/components/core/price';
import {
  IconCalendar,
  IconChevronUp,
  IconMeals,
  IconStay,
  IconTransport,
} from '@/components/icons';
import Link from 'next/link';

export type BookingMetadataSectionProps = {
  searchParams: Record<string, string>;
};

export default function BookingMetadataSection({ searchParams }: BookingMetadataSectionProps) {
  const isCollapsed = searchParams['collapsed'] === 'true';

  const newSearchParams = new URLSearchParams(searchParams);

  if (isCollapsed) {
    newSearchParams.delete('collapsed');
  } else {
    newSearchParams.set('collapsed', String(!isCollapsed));
  }

  return (
    <>
      <h2 className='text-xl font-medium'>7 nights / Tuesday - Tuesday</h2>
      <div className='justify-between flex'>
        <div className='grid grid-cols-2 gap-x-5 gap-y-4 mt-4 h-fit'>
          <BookingMetadataItem icon={IconCalendar} label='18.08. 2024 - 26.08. 2024' />
          <BookingMetadataItem icon={IconMeals} label='All Inclusive' subLabel='+3 meal types' />
          <BookingMetadataItem icon={IconTransport} label='Bratislava' />
          <BookingMetadataItem icon={IconStay} label='Select from 2 room types' />
        </div>
        <div className='mt-6 flex flex-col items-end'>
          <p className='whitespace-break-spaces text-gray-500 text-xs'>
            From <Price price={1730} /> / per person
          </p>
          <Link href={'?' + newSearchParams}>
            <Button className='mt-1' variant={isCollapsed ? 'secondary' : 'primary'}>
              {isCollapsed ? (
                <>
                  Show more
                  <IconChevronUp className='rotate-180' />
                </>
              ) : (
                <>
                  Show less
                  <IconChevronUp />
                </>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
