'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import BookingRoomTypeOption from './booking-room-type-option';
import { useLayoutEffect } from 'react';

export type BookingRoomTypeSectionProps = {
  roomTypes: string[];
};

const ROOM_TYPE_SEARCH_PARAM_KEY = 'room';

export default function BookingRoomTypeSection({ roomTypes }: BookingRoomTypeSectionProps) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const roomTypeOptions = roomTypes.map((roomType) => ({
    label: roomType,
    value: roomType.replace(' ', '-').toLowerCase(),
  }));

  const selectedRoomType = searchParams.get(ROOM_TYPE_SEARCH_PARAM_KEY) || roomTypeOptions[0].value;

  useLayoutEffect(() => {
    if (!searchParams.has(ROOM_TYPE_SEARCH_PARAM_KEY) && roomTypeOptions.length) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(ROOM_TYPE_SEARCH_PARAM_KEY, roomTypeOptions[0].value);
      router.push('?' + newSearchParams);
    }
  }, [roomTypeOptions, router, searchParams]);

  const handleRoomTypeChange = (roomType: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(ROOM_TYPE_SEARCH_PARAM_KEY, roomType);
    router.push('?' + newSearchParams);
  };

  return (
    <div className='py-5'>
      <h3 className='text-2xl font-medium'>Room type</h3>
      <div className='space-y-2.5 mt-2.5'>
        {roomTypeOptions.map((option) => (
          <BookingRoomTypeOption
            key={option.value}
            roomType={option.label}
            priceDifference={100}
            onClick={() => handleRoomTypeChange(option.value)}
            selected={selectedRoomType === option.value}
          />
        ))}
      </div>
    </div>
  );
}
