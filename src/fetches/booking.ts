import { Booking } from '@/types/booking';

export const getBooking = async (): Promise<Booking> => {
  const response = await fetch('https://holidayo.free.beeceptor.com');

  if (!response.ok) {
    throw new Error('Failed to fetch booking');
  }

  return response.json();
};
