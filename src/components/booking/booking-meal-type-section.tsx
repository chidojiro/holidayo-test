import { MEAL_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import { kebabCase } from 'lodash-es';
import BookingMealTypeOption from './booking-meal-type-option';

export type BookingMealTypeSectionProps = {
  mealTypes: string[];
  searchParams: Record<string, string>;
};

export default function BookingMealTypeSection({
  mealTypes,
  searchParams,
}: BookingMealTypeSectionProps) {
  const mealTypeOptions = mealTypes.map((mealType) => ({
    label: mealType,
    value: kebabCase(mealType),
  }));

  const selectedMealType = searchParams[MEAL_TYPE_SEARCH_PARAM_KEY] || mealTypeOptions[0].value;

  return (
    <div className='py-5'>
      <h3 className='text-2xl font-medium'>Meal type</h3>
      <div className='space-y-2.5 mt-2.5'>
        {mealTypeOptions.map((option) => (
          <BookingMealTypeOption
            key={option.value}
            mealTypeOption={option}
            priceDifference={100}
            searchParams={searchParams}
            selected={selectedMealType === option.value}
          />
        ))}
      </div>
    </div>
  );
}
