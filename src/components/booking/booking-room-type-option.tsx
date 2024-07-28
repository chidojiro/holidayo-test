import { ROOM_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import { Option } from '@/types/form';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Price from '../core/price';
import Radio from '../core/radio';

export type BookingRoomTypeOptionProps = {
  roomTypeOption: Option;
  priceDifference: number;
  selected: boolean;
  searchParams: Record<string, string>;
};

export default function BookingRoomTypeOption({
  selected,
  roomTypeOption,
  priceDifference,
  searchParams,
}: BookingRoomTypeOptionProps) {
  const newSearchParams = new URLSearchParams(searchParams);

  newSearchParams.set(ROOM_TYPE_SEARCH_PARAM_KEY, roomTypeOption.value);

  return (
    <Link
      href={'?' + newSearchParams}
      className={clsx(
        'flex gap-5 justify-between items-center w-full rounded-xl p-2 pr-7 min-h-28 bg-white text-left border',
        selected ? 'border-cyan-400' : 'border-gray-300',
      )}
    >
      <div className='flex items-center gap-7'>
        <div className='relative w-27 rounded-md h-23 overflow-hidden shrink-0'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Endicott_College_Stoneridge_Hall_empty_dorm_room.jpg/1920px-Endicott_College_Stoneridge_Hall_empty_dorm_room.jpg'
            alt=''
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='max-w-[420px]'>
          <h4 className='font-semibold text-lg'>{roomTypeOption.label}</h4>
          <p className='mt-1 text-xs hidden xl:block'>
            v prízemných budovách • situované v záhrade • s výhľadom do záhrady alebo na bazén •
            kúpeľňa so sprchou •{' '}
            <button type='button' className='text-cyan-400 font-semibold underline'>
              Show more
            </button>
          </p>
          <button type='button' className='mt-1 text-left text-cyan-400 text-[10px] md:text-sm'>
            Room description
          </button>
        </div>
      </div>
      <div className='flex items-center gap-7'>
        <Price price={priceDifference} variant='increase' />
        <Radio checked={selected} />
      </div>
    </Link>
  );
}
