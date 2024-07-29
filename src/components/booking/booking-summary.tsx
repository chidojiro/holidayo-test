import { Booking } from '@/types/booking';
import Button from '../core/button';
import Price from '../core/price';
import {
  IconCalendar24,
  IconChevronUp,
  IconMeals24,
  IconMoon24,
  IconStay24,
  IconTransport24,
  IconUsers24,
} from '../icons';
import BookingSummaryItem from './booking-summary-item';
import dayjs from 'dayjs';

export type BookingSummaryProps = {
  booking: Booking;
  selectedRoomType: string;
  selectedMealType: string;
};

export default function BookingSummary({
  booking,
  selectedRoomType,
  selectedMealType,
}: BookingSummaryProps) {
  const startDate = new Date(booking.products[0].startDate);
  const endDate = new Date(booking.products[0].endDate);

  const nights = dayjs(endDate).diff(dayjs(startDate), 'day');

  const departureLocation = booking.products[0].transport.departureLocation;

  const selectedProduct = booking.products.find(
    (product) => product.roomType === selectedRoomType && product.catering === selectedMealType,
  )!;

  const perAdultAddon = selectedProduct.addons.find((addon) => addon.id === 'per-adult');
  const perChildAddon = selectedProduct.addons.find((addon) => addon.id === 'per-child');

  return (
    <div className='rounded-3xl py-8 px-10 border flex-1 shadow-sm h-fit border-cyan-400 bg-cyan-25 lg:bg-white lg:border-gray-200 lg:max-w-[400px] xl:max-w-[444px]'>
      <h3 className='text-center text-xl lg:text-3xl font-medium'>Booking summary</h3>

      <div className='rounded-[20px] border border-gray-200 mt-8 bg-white'>
        <div className='h-20 px-5 grid grid-cols-2 gap-2 border-b border-gray-200'>
          <BookingSummaryItem
            icon={IconCalendar24}
            label={
              <>
                <span>{dayjs(startDate).format('DD.MM.YYYY')}</span>
                <br />
                <span>{dayjs(endDate).format('DD.MM.YYYY')}</span>
              </>
            }
          />
          <BookingSummaryItem icon={IconMoon24} label={`${nights} nights`} />
        </div>
        <div className='h-20 px-5 grid grid-cols-2 gap-2 border-b border-gray-200'>
          <BookingSummaryItem icon={IconUsers24} label='2 dospelí, 1 dieťa' />
          <BookingSummaryItem icon={IconStay24} label={selectedRoomType} />
        </div>
        <div className='h-20 px-5 grid grid-cols-2 gap-2'>
          <BookingSummaryItem icon={IconTransport24} label={departureLocation} />
          <BookingSummaryItem icon={IconMeals24} label={selectedMealType} />
        </div>
      </div>

      <div className='space-y-3 mt-8 pb-3 border-b border-gray-300'>
        <div
          className='flex justify-between text-gray-500'
          style={{ filter: 'drop-shadow(0px 4px 4px #00000040)' }}
        >
          <p>Cost per adult</p>
          <Price
            price={
              perAdultAddon ? Math.round(Number(perAdultAddon.price) / perAdultAddon.count) : 0
            }
            className='!text-gray-500 !text-base'
          />
        </div>
        <div
          className='flex justify-between text-gray-500'
          style={{ filter: 'drop-shadow(0px 4px 4px #00000040)' }}
        >
          <p>Cost per child under 5 years</p>
          <Price
            price={
              perChildAddon ? Math.round(Number(perChildAddon.price) / perChildAddon.count) : 0
            }
            className='!text-gray-500 !text-base'
          />
        </div>
        <div className='flex justify-between text-red-500'>
          <p>Discount</p>
          <Price
            price={
              Math.round(Number(selectedProduct.priceFrom) / 1000) -
              Number(selectedProduct.discountedPriceFrom)
            }
            variant='decrease'
            className='!text-base'
          />
        </div>
      </div>

      <div className='mt-3 flex justify-between'>
        <p className='font-medium'>Cost for all passangers</p>
        <div className='flex gap-2.5'>
          <Price price={Number(selectedProduct.discountedPriceFrom)} className='!text-base' />
        </div>
      </div>

      <Button className='mt-8 w-full !h-14'>
        Continue with selected
        <IconChevronUp className='rotate-90' />
      </Button>
    </div>
  );
}
