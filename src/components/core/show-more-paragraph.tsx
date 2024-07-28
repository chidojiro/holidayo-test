'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';

export type ShowMoreParagraphProps = {
  children?: string;
  className?: string;
};

export default function ShowMoreParagraph({ children, className }: ShowMoreParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const [isTruncated, setIsTruncated] = useState(true);

  return (
    <div className={className}>
      <p ref={ref} className={clsx({ 'line-clamp-2': isTruncated })}>
        {children}
      </p>
      <button
        className='text-cyan-400 font-semibold underline text-sm'
        onClick={() => setIsTruncated((prev) => !prev)}
      >
        {isTruncated ? 'Show more' : 'Show less'}
      </button>
    </div>
  );
}
