import clsx from 'clsx';

export type MainContentProps = React.PropsWithChildren & {
  className?: string;
};

export default function MainContent({ children, className }: MainContentProps) {
  return (
    <main className={clsx('max-w-[1408px] mx-auto p-5 lg:pt-10 pb-10', className)}>{children}</main>
  );
}
