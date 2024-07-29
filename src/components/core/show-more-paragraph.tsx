'use client';

import clsx from 'clsx';
import { useState } from 'react';

export type ShowMoreParagraphProps = React.PropsWithChildren & {
  className?: string;
};

export default function ShowMoreParagraph({ children, className }: ShowMoreParagraphProps) {
  const [isTruncated, setIsTruncated] = useState(true);

  return (
    <div className={className}>
      <div className={clsx({ 'line-clamp-2': isTruncated })}>{children}</div>
      <button
        className='text-cyan-400 font-semibold underline text-sm'
        onClick={() => setIsTruncated((prev) => !prev)}
      >
        {isTruncated ? 'Show more' : 'Show less'}
      </button>
    </div>
  );
}
