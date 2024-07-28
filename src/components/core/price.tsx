import clsx from 'clsx';

export type PriceProps = {
  price: number;
  variant?: 'increase' | 'decrease' | 'discount';
};

export default function Price({ price, variant }: PriceProps) {
  const renderVariant = () => {
    if (!variant || variant === 'discount') return null;

    if (variant === 'increase') {
      return <span>+ </span>;
    }

    return <span>- </span>;
  };

  return (
    <span
      className={clsx('text-xl font-medium', {
        'text-cyan-400': !variant || variant === 'increase',
        'text-red-500': variant === 'decrease',
        'text-gray-400 line-through': variant === 'discount',
      })}
    >
      {renderVariant()}
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
