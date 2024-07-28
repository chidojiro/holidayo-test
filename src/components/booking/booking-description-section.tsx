import ShowMoreParagraph from '../core/show-more-paragraph';

export default function BookingDescriptionSection() {
  return (
    <div className='py-5'>
      <h3 className='text-lg lg:text-2xl font-medium'>Description of term</h3>
      <ShowMoreParagraph className='mt-2.5 text-sm text-gray-600'>
        Hurghada bola založená začiatkom minulého storočia ako rybárska dedina, dnes je modernou
        turistickou oblasťou vo veľkom štýle. Jedná sa o tiahly, dvadsaťkilometrových pás ačiatkom
        minulého storočia ako rybá
      </ShowMoreParagraph>
    </div>
  );
}
