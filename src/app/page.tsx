import BookingDescriptionSection from '@/components/booking/booking-description-section';
import BookingMealTypeSection from '@/components/booking/booking-meal-type-section';
import BookingMetadataSection from '@/components/booking/booking-metadata-section';
import BookingRoomTypeSection from '@/components/booking/booking-room-type-section';
import BookingSummary from '@/components/booking/booking-summary';
import { MEAL_TYPE_SEARCH_PARAM_KEY, ROOM_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import { getBooking } from '@/fetches/booking';
import clsx from 'clsx';
import { kebabCase, uniq } from 'lodash-es';

export default async function Page({ searchParams }: { searchParams: Record<string, string> }) {
  const booking = await getBooking();

  const isCollapsed = searchParams['collapsed'] === 'true';

  const selectedRoomType =
    booking.distinctRoomTypes.find(
      (roomType) => kebabCase(roomType) === searchParams[ROOM_TYPE_SEARCH_PARAM_KEY],
    ) || booking.distinctRoomTypes[0];

  const selectedMealType =
    booking.distinctCatering.find(
      (mealType) => kebabCase(mealType) === searchParams[MEAL_TYPE_SEARCH_PARAM_KEY],
    ) || booking.distinctCatering[0];

  return (
    <div className='flex gap-5 xl:gap-12 flex-col lg:flex-row'>
      <div className={clsx('rounded-2xl flex-1', 'lg:border lg:border-gray-100 lg:p-8 h-fit')}>
        <div
          className={clsx(
            'relative rounded-xl',
            'lg:border lg:border-cyan-400 lg:bg-cyan-25 lg:pt-6 lg:pb-8 lg:px-5',
          )}
        >
          <BookingMetadataSection booking={booking} searchParams={searchParams} />

          {!isCollapsed && (
            <div className='space-y-2.5 mt-5'>
              <BookingDescriptionSection booking={booking} />

              <BookingRoomTypeSection
                booking={booking}
                searchParams={searchParams}
                selectedRoomType={selectedRoomType}
                selectedMealType={selectedMealType}
              />

              <BookingMealTypeSection
                booking={booking}
                searchParams={searchParams}
                selectedRoomType={selectedRoomType}
                selectedMealType={selectedMealType}
              />
            </div>
          )}
        </div>
      </div>

      <BookingSummary
        booking={booking}
        selectedRoomType={selectedRoomType}
        selectedMealType={selectedMealType}
      />
    </div>
  );
}
