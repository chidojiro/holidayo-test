import { MEAL_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import clsx from 'clsx';
import { kebabCase } from 'lodash-es';
import Link from 'next/link';
import Price from '../core/price';
import Radio from '../core/radio';
import { IconMeals24 } from '../icons';

export type BookingMealTypeOptionProps = {
  mealType: string;
  priceDifference: number;
  selected: boolean;
  searchParams: Record<string, string>;
};

export default function BookingMealTypeOption({
  selected,
  mealType,
  priceDifference,
  searchParams,
}: BookingMealTypeOptionProps) {
  const newSearchParams = new URLSearchParams(searchParams);

  newSearchParams.set(MEAL_TYPE_SEARCH_PARAM_KEY, kebabCase(mealType));

  return (
    <label className='block'>
      <Link
        scroll={false}
        href={'?' + newSearchParams}
        className={clsx(
          'flex gap-5 justify-between items-center w-full rounded-xl p-2 pl-9 pr-7 min-h-20 bg-white text-left border',
          selected ? 'border-cyan-400' : 'border-gray-300',
        )}
      >
        <div className='flex items-center gap-10'>
          <div className='w-8 h-8 flex items-center justify-center shrink-0'>
            <IconMeals24 className='text-cyan-400 scale-150' />
          </div>
          <div className='max-w-[420px]'>
            <h4 className='font-semibold text-lg'>{mealType}</h4>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <Price price={priceDifference} variant='increase' />
          <Radio checked={selected} />
        </div>
      </Link>
    </label>
  );
}
