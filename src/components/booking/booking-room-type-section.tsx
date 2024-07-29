import { MEAL_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import { Booking } from '@/types/booking';
import { kebabCase, uniq } from 'lodash-es';
import BookingRoomTypeOption from './booking-room-type-option';

export type BookingRoomTypeSectionProps = {
  searchParams: Record<string, string>;
  booking: Booking;
  selectedRoomType: string;
  selectedMealType: string;
};

export default function BookingRoomTypeSection({
  searchParams,
  booking,
  selectedRoomType,
  selectedMealType,
}: BookingRoomTypeSectionProps) {
  const baseRoomTypeDifferences = Object.entries(booking.differences)
    .filter(([key]) => key.endsWith(selectedMealType))
    .map(
      ([key, value]) =>
        [key.replace('-' + selectedMealType, ''), parseInt(value)] as [string, number],
    );

  const minDifference = Math.min(...baseRoomTypeDifferences.map(([, value]) => value));

  const roomTypeDifferences = Object.fromEntries(
    baseRoomTypeDifferences.map(([key, value]) => [key, value - minDifference]),
  );

  return (
    <div className='py-5'>
      <h3 className='text-lg lg:text-2xl font-medium'>Room type</h3>
      <div className='space-y-2.5 mt-2.5'>
        {booking.distinctRoomTypes.map((roomType) => (
          <BookingRoomTypeOption
            key={roomType}
            roomType={roomType}
            priceDifference={roomTypeDifferences[roomType]}
            searchParams={searchParams}
            selected={selectedRoomType === roomType}
          />
        ))}
      </div>
    </div>
  );
}
