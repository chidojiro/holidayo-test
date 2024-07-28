import clsx from 'clsx';
import Image from 'next/image';
import Radio from '../core/radio';
import Price from '../core/price';

export type BookingRoomTypeOptionProps = {
  roomType: string;
  priceDifference: number;
  selected: boolean;
  onClick: () => void;
};

export default function BookingRoomTypeOption({
  selected,
  roomType,
  priceDifference,
  onClick,
}: BookingRoomTypeOptionProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(
        'flex justify-between items-center w-full rounded-xl p-2 pr-7 min-h-28 bg-white text-left border',
        selected ? 'border-cyan-400' : 'border-transparent',
      )}
    >
      <div className='flex items-center gap-7'>
        <div className='relative w-27 rounded-md h-23 overflow-hidden'>
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
          <h4 className='font-semibold text-lg'>{roomType}</h4>
          <p className='mt-1 text-xs'>
            v prízemných budovách • situované v záhrade • s výhľadom do záhrady alebo na bazén •
            kúpeľňa so sprchou •{' '}
            <button type='button' className='text-cyan-400 font-semibold underline'>
              Show more
            </button>
          </p>
        </div>
      </div>
      <div className='flex items-center gap-7'>
        <Price price={priceDifference} variant='increase' />
        <Radio checked={selected} />
      </div>
    </button>
  );
}
