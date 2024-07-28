import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex items-center px-5 h-16 md:h-21 border-b border-gray-100 shadow-sm sticky top-0'>
      <Image src='/logo.svg' alt='logo' width={134} height={22} />
    </header>
  );
}
