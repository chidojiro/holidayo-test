import { Booking } from '@/types/booking';
import BookingMealTypeOption from './booking-meal-type-option';

export type BookingMealTypeSectionProps = {
  searchParams: Record<string, string>;
  booking: Booking;
  selectedRoomType: string;
  selectedMealType: string;
};

export default function BookingMealTypeSection({
  searchParams,
  booking,
  selectedRoomType,
  selectedMealType,
}: BookingMealTypeSectionProps) {
  const mealTypes = booking.distinctCatering;

  const baseRoomTypeDifferences = Object.entries(booking.differences)
    .filter(([key]) => key.startsWith(selectedRoomType))
    .map(
      ([key, value]) =>
        [key.replace(selectedRoomType + '-', ''), parseInt(value)] as [string, number],
    );

  const minDifference = Math.min(...baseRoomTypeDifferences.map(([, value]) => value));

  const roomTypeDifferences = Object.fromEntries(
    baseRoomTypeDifferences.map(([key, value]) => [key, value - minDifference]),
  );

  return (
    <div className='py-5'>
      <h3 className='text-lg lg:text-2xl font-medium'>Meal type</h3>
      <div className='space-y-2.5 mt-2.5'>
        {mealTypes.map((meanType) => (
          <BookingMealTypeOption
            key={meanType}
            mealType={meanType}
            priceDifference={roomTypeDifferences[meanType]}
            searchParams={searchParams}
            selected={selectedMealType === meanType}
          />
        ))}
      </div>
    </div>
  );
}
