import clsx from 'clsx';

export type PriceProps = {
  price: number;
  variant?: 'increase' | 'decrease' | 'discount';
  className?: string;
};

export default function Price({ price, variant, className }: PriceProps) {
  const renderPrefix = () => {
    if (!variant || variant === 'discount' || !price) return null;

    if (variant === 'increase') {
      return <span>+ </span>;
    }

    return <span>- </span>;
  };

  return (
    <span
      className={clsx(
        'text-xl font-medium',
        {
          'text-cyan-400': !variant || variant === 'increase',
          'text-red-500': variant === 'decrease',
          'text-gray-400 line-through': variant === 'discount',
        },
        className,
      )}
    >
      {renderPrefix()}
      {Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      })
        .format(price)
        .replace('.', ' ')}
    </span>
  );
}
