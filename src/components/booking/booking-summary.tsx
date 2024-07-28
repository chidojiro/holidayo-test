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

export type BookingSummaryProps = {
  //
};

export default function BookingSummary({}: BookingSummaryProps) {
  return (
    <div className='rounded-3xl py-8 px-10 border border-gray-200 max-w-[444px] flex-1 shadow-sm h-fit'>
      <h3 className='text-center text-3xl font-medium'>Booking summary</h3>

      <div className='rounded-[20px] border border-gray-200 mt-8'>
        <div className='h-20 px-5 grid grid-cols-2 gap-2 border-b border-gray-200'>
          <BookingSummaryItem
            icon={IconCalendar24}
            label={
              <>
                <span>13.09.2023</span>
                <br />
                <span>27.09.2023</span>
              </>
            }
          />
          <BookingSummaryItem icon={IconMoon24} label='14 nights' />
        </div>
        <div className='h-20 px-5 grid grid-cols-2 gap-2 border-b border-gray-200'>
          <BookingSummaryItem icon={IconUsers24} label='2 dospelí, 1 dieťa' />
          <BookingSummaryItem icon={IconStay24} label='2+0 Premium izba Club Rotana' />
        </div>
        <div className='h-20 px-5 grid grid-cols-2 gap-2'>
          <BookingSummaryItem icon={IconTransport24} label='Bratislava' />
          <BookingSummaryItem icon={IconMeals24} label='All Inclusive' />
        </div>
      </div>

      <div className='space-y-3 mt-8 pb-3 border-b border-gray-300'>
        <div
          className='flex justify-between text-gray-500'
          style={{ filter: 'drop-shadow(0px 4px 4px #00000040)' }}
        >
          <p>Cost per adult</p>
          <Price price={1620} className='!text-gray-500 !text-base' />
        </div>
        <div
          className='flex justify-between text-gray-500'
          style={{ filter: 'drop-shadow(0px 4px 4px #00000040)' }}
        >
          <p>Cost per child under 5 years</p>
          <Price price={800} className='!text-gray-500 !text-base' />
        </div>
        <div className='flex justify-between text-red-500'>
          <p>Discount</p>
          <Price price={800} variant='decrease' className='!text-base' />
        </div>
      </div>

      <div className='mt-3 flex justify-between'>
        <p className='font-medium'>Cost for all passangers</p>
        <div className='flex gap-2.5'>
          <Price price={800} className='!text-base' />
        </div>
      </div>

      <Button className='mt-8 w-full !h-14'>
        Continue with selected
        <IconChevronUp className='rotate-90' />
      </Button>
    </div>
  );
}
