import { Booking } from '@/types/booking';
import ShowMoreParagraph from '../core/show-more-paragraph';

export type BookingDescriptionSectionProps = {
  booking: Booking;
};

export default function BookingDescriptionSection({ booking }: BookingDescriptionSectionProps) {
  return (
    <div className='py-5'>
      <h3 className='text-lg lg:text-2xl font-medium'>Description of term</h3>
      <ShowMoreParagraph className='mt-2.5 text-sm text-gray-600'>
        <p dangerouslySetInnerHTML={{ __html: booking.description }} />
      </ShowMoreParagraph>
    </div>
  );
}
