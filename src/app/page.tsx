import BookingMealTypeSection from '@/components/booking/booking-meal-type-section';
import BookingMetadataItem from '@/components/booking/booking-metadata-item';
import BookingRoomTypeSection from '@/components/booking/booking-room-type-section';
import BookingSummary from '@/components/booking/booking-summary';
import Button from '@/components/core/button';
import Price from '@/components/core/price';
import ShowMoreParagraph from '@/components/core/show-more-paragraph';
import {
  IconCalendar,
  IconChevronUp,
  IconMeals,
  IconStay,
  IconTransport,
} from '@/components/icons';

export default function Home() {
  return (
    <div className='flex gap-12'>
      <div className='rounded-2xl border border-gray-100 p-8 flex-1'>
        <div className='rounded-xl border border-cyan-400 bg-cyan-25 pt-6 pb-8 px-5'>
          <h2 className='text-xl font-medium'>7 nights / Tuesday - Tuesday</h2>
          <div className='justify-between flex'>
            <div className='grid grid-cols-2 gap-x-5 gap-y-4 mt-4 h-fit'>
              <BookingMetadataItem icon={IconCalendar} label='18.08. 2024 - 26.08. 2024' />
              <BookingMetadataItem
                icon={IconMeals}
                label='All Inclusive'
                subLabel='+3 meal types'
              />
              <BookingMetadataItem icon={IconTransport} label='Bratislava' />
              <BookingMetadataItem icon={IconStay} label='Select from 2 room types' />
            </div>
            <div className='mt-6 flex flex-col items-end'>
              <p className='whitespace-break-spaces text-gray-500 text-xs'>
                From <Price price={1730} /> / per person
              </p>
              <Button className='mt-1'>
                Show less
                <IconChevronUp />
              </Button>
            </div>
          </div>

          <div className='space-y-2.5 mt-5'>
            <div className='py-5'>
              <h3 className='text-2xl font-medium'>Description of term</h3>
              <ShowMoreParagraph className='mt-2.5 text-sm text-gray-600'>
                Hurghada bola založená začiatkom minulého storočia ako rybárska dedina, dnes je
                modernou turistickou oblasťou vo veľkom štýle. Jedná sa o tiahly,
                dvadsaťkilometrových pás ačiatkom minulého storočia ako rybá
              </ShowMoreParagraph>
            </div>

            <BookingRoomTypeSection roomTypes={['x y', 'a b']} />

            <BookingMealTypeSection mealTypes={['x y', 'a b']} />
          </div>
        </div>
      </div>

      <BookingSummary />
    </div>
  );
}
