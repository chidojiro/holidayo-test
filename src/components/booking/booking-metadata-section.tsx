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
import { Booking } from '@/types/booking';
import dayjs from 'dayjs';
import Link from 'next/link';

export type BookingMetadataSectionProps = {
  searchParams: Record<string, string>;
  booking: Booking;
};

export default function BookingMetadataSection({
  booking,
  searchParams,
}: BookingMetadataSectionProps) {
  const isCollapsed = searchParams['collapsed'] === 'true';

  const newSearchParams = new URLSearchParams(searchParams);

  if (isCollapsed) {
    newSearchParams.delete('collapsed');
  } else {
    newSearchParams.set('collapsed', String(!isCollapsed));
  }

  const startDate = new Date(booking.products[0].startDate);
  const endDate = new Date(booking.products[0].endDate);

  const nights = dayjs(endDate).diff(dayjs(startDate), 'day');

  const mealTypes = booking.distinctCatering;

  const departureLocation = booking.products[0].transport.departureLocation;

  const minPrice = Math.min(
    ...booking.products.map((product) =>
      Math.round(Number(product.discountedPriceFrom) / (product.adults + product.children)),
    ),
  );

  return (
    <>
      <h2 className='text-base lg:text-xl font-medium flex items-center justify-between'>
        {nights} nights / {dayjs(startDate).format('dddd')} - {dayjs(endDate).format('dddd')}
        <div className='flex gap-2 lg:absolute lg:top-2.5 lg:right-5'>
          <div className='rounded-full bg-gray-100 h-6 px-3 w-fit text-sm flex items-center text-gray-600'>
            {booking.partner}
          </div>
        </div>
      </h2>
      <div className='justify-between flex flex-col sm:flex-row sm:gap-5'>
        <div className='grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-4 mt-4 h-fit'>
          <BookingMetadataItem
            icon={IconCalendar}
            label={
              dayjs(startDate).format('DD.MM.YYYY') + ' - ' + dayjs(endDate).format('DD.MM.YYYY')
            }
          />
          <BookingMetadataItem
            icon={IconMeals}
            label={mealTypes[0]}
            subLabel={mealTypes.length > 1 ? `+${mealTypes.length - 1} meal types` : ''}
          />
          <BookingMetadataItem icon={IconTransport} label={departureLocation} />
          <BookingMetadataItem
            icon={IconStay}
            label={`Select from ${booking.distinctRoomTypes.length} room types`}
          />
        </div>
        <div className='mt-6 flex flex-col sm:items-end'>
          <p className='whitespace-break-spaces text-gray-500 text-xs min-w-44'>
            From <Price price={minPrice} /> / per person
          </p>
          <Link scroll={false} href={'?' + newSearchParams}>
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
