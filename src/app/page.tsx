import BookingDescriptionSection from '@/components/booking/booking-description-section';
import BookingMealTypeSection from '@/components/booking/booking-meal-type-section';
import BookingMetadataSection from '@/components/booking/booking-metadata-section';
import BookingRoomTypeSection from '@/components/booking/booking-room-type-section';
import BookingSummary from '@/components/booking/booking-summary';
import clsx from 'clsx';

export default function Page({ searchParams }: { searchParams: Record<string, string> }) {
  const isCollapsed = searchParams['collapsed'] === 'true';

  return (
    <div className='flex gap-12'>
      <div className='rounded-2xl border border-gray-100 p-8 flex-1'>
        <div className='relative rounded-xl border border-cyan-400 bg-cyan-25 pt-6 pb-8 px-5'>
          <div className='flex gap-2 absolute top-2.5 right-5'>
            <div className='rounded-full bg-gray-100 h-6 px-3 w-fit text-sm flex items-center text-gray-600'>
              Hydrotour
            </div>
          </div>

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
