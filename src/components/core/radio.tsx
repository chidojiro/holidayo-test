'use client';

import { noop } from 'lodash-es';

export type RadioProps = {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Radio({ value, checked, onChange }: RadioProps) {
  return (
    <label className='rounded-full w-6 h-6 flex items-center justify-center border border-gray-300 p-1 cursor-pointer'>
      <input
        type='radio'
        value={value}
        checked={checked}
        onChange={onChange || noop}
        className='peer w-0 h-0 opacity-0 overflow-hidden'
      />
      <div className='w-full h-full rounded-full bg-cyan-400 opacity-0 peer-checked:opacity-100 transition-opacity'></div>
    </label>
  );
}
