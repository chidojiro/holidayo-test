import clsx from 'clsx';
import Radio from '../core/radio';
import Price from '../core/price';
import { IconMeals } from '../icons';

export type BookingMealTypeOptionProps = {
  mealType: string;
  priceDifference: number;
  selected: boolean;
  onClick: () => void;
};

export default function BookingMealTypeOption({
  selected,
  mealType,
  priceDifference,
  onClick,
}: BookingMealTypeOptionProps) {
  return (
    <button
      type='button'
      onClick={onClick}
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
          <h4 className='font-semibold text-lg'>{mealType}</h4>
        </div>
      </div>
      <div className='flex items-center gap-7'>
        <Price price={priceDifference} variant='increase' />
        <Radio checked={selected} />
      </div>
    </button>
  );
}
