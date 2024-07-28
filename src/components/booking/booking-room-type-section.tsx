import { ROOM_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import BookingRoomTypeOption from './booking-room-type-option';
import { kebabCase } from 'lodash-es';

export type BookingRoomTypeSectionProps = {
  roomTypes: string[];
  searchParams: Record<string, string>;
};

export default function BookingRoomTypeSection({
  roomTypes,
  searchParams,
}: BookingRoomTypeSectionProps) {
  const roomTypeOptions = roomTypes.map((roomType) => ({
    label: roomType,
    value: kebabCase(roomType),
  }));

  const selectedRoomType = searchParams[ROOM_TYPE_SEARCH_PARAM_KEY] || roomTypeOptions[0].value;

  return (
    <div className='py-5'>
      <h3 className='text-2xl font-medium'>Room type</h3>
      <div className='space-y-2.5 mt-2.5'>
        {roomTypeOptions.map((option) => (
          <BookingRoomTypeOption
            key={option.value}
            roomTypeOption={option}
            priceDifference={100}
            searchParams={searchParams}
            selected={selectedRoomType === option.value}
          />
        ))}
      </div>
    </div>
  );
}
