'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import BookingMealTypeOption from './booking-meal-type-option';
import { useLayoutEffect } from 'react';

export type BookingMealTypeSectionProps = {
  mealTypes: string[];
};

const MEAL_TYPE_SEARCH_PARAM_KEY = 'meal';

export default function BookingMealTypeSection({ mealTypes }: BookingMealTypeSectionProps) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const mealTypeOptions = mealTypes.map((mealType) => ({
    label: mealType,
    value: mealType.replace(' ', '-').toLowerCase(),
  }));

  const selectedMealType = searchParams.get(MEAL_TYPE_SEARCH_PARAM_KEY) || mealTypeOptions[0].value;

  useLayoutEffect(() => {
    if (!searchParams.has(MEAL_TYPE_SEARCH_PARAM_KEY) && mealTypeOptions.length) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(MEAL_TYPE_SEARCH_PARAM_KEY, mealTypeOptions[0].value);
      router.push('?' + newSearchParams);
    }
  }, [mealTypeOptions, router, searchParams]);

  const handleMealTypeChange = (mealType: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(MEAL_TYPE_SEARCH_PARAM_KEY, mealType);
    router.push('?' + newSearchParams);
  };

  return (
    <div className='py-5'>
      <h3 className='text-2xl font-medium'>Meal type</h3>
      <div className='space-y-2.5 mt-2.5'>
        {mealTypeOptions.map((option) => (
          <BookingMealTypeOption
            key={option.value}
            mealType={option.label}
            priceDifference={100}
            onClick={() => handleMealTypeChange(option.value)}
            selected={selectedMealType === option.value}
          />
        ))}
      </div>
    </div>
  );
}
