import { MEAL_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import clsx from 'clsx';
import Link from 'next/link';
import Price from '../core/price';
import Radio from '../core/radio';
import { IconMeals } from '../icons';
import { Option } from '@/types/form';

export type BookingMealTypeOptionProps = {
  mealTypeOption: Option;
  priceDifference: number;
  selected: boolean;
  searchParams: Record<string, string>;
};

export default function BookingMealTypeOption({
  selected,
  mealTypeOption,
  priceDifference,
  searchParams,
}: BookingMealTypeOptionProps) {
  const newSearchParams = new URLSearchParams(searchParams);

  newSearchParams.set(MEAL_TYPE_SEARCH_PARAM_KEY, mealTypeOption.value);

  return (
    <Link
      href={'?' + newSearchParams}
      className={clsx(
        'flex justify-between items-center w-full rounded-xl p-2 pl-9 pr-7 min-h-28 bg-white text-left border',
        selected ? 'border-cyan-400' : 'border-transparent',
      )}
    >
      <div className='flex items-center gap-10'>
        <div className='w-8 h-8 flex items-center justify-center'>
          <IconMeals className='text-cyan-400 scale-150' />
        </div>
        <div className='max-w-[420px]'>
          <h4 className='font-semibold text-lg'>{mealTypeOption.label}</h4>
        </div>
      </div>
      <div className='flex items-center gap-7'>
        <Price price={priceDifference} variant='increase' />
        <Radio checked={selected} />
      </div>
    </Link>
  );
}
