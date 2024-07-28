import BookingDescriptionSection from '@/components/booking/booking-description-section';
import BookingMealTypeSection from '@/components/booking/booking-meal-type-section';
import BookingMetadataSection from '@/components/booking/booking-metadata-section';
import BookingRoomTypeSection from '@/components/booking/booking-room-type-section';
import BookingSummary from '@/components/booking/booking-summary';
import clsx from 'clsx';

export default function Page({ searchParams }: { searchParams: Record<string, string> }) {
  const isCollapsed = searchParams['collapsed'] === 'true';

  return (
    <div className='flex gap-5 lg:gap-12 flex-col lg:flex-row'>
      <div className={clsx('rounded-2xl flex-1', 'lg:border lg:border-gray-100 lg:p-8')}>
        <div
          className={clsx(
            'relative rounded-xl',
            'lg:border lg:border-cyan-400 lg:bg-cyan-25 lg:pt-6 lg:pb-8 lg:px-5',
          )}
        >
          <BookingMetadataSection searchParams={searchParams} />

          {!isCollapsed && (
            <div className='space-y-2.5 mt-5'>
              <BookingDescriptionSection />

              <BookingRoomTypeSection roomTypes={['x y', 'a b']} searchParams={searchParams} />

              <BookingMealTypeSection mealTypes={['x y', 'a b']} searchParams={searchParams} />
            </div>
          )}
        </div>
      </div>

      <BookingSummary />
    </div>
  );
}
