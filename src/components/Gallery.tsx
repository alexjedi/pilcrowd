const products = [
  {
    id: 1,
    text: 'It is sometimes an appropriate response to reality to go insane.',
    name: 'VALIS — Philip K. Dick',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    text: 'The true measure of a man is not his intelligence or how high he rises in this freak establishment. No, the true measure of a man is this: how quickly can he respond to the needs of others and how much of himself he can give.',
    name: 'VALIS — Philip K. Dick',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt:
      'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    text: 'Maybe each human being lives in a unique world, a private world different from those inhabited and experienced by all other humans. . . If reality differs from person to person, can we speak of reality singular, or shouldnt we really be talking about plural realities? And if there are plural realities, are some more true more real than others',
    name: 'VALIS — Philip K. Dick',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    text: 'Im not much but Im all I have.',
    name: 'A Scanner Darkly — Philip K. Dick',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 5,
    text: 'My schedule for today lists a six-hour self-accusatory depression.',
    name: 'Do Androids Dream of Electric Sheep? — Philip K. Dick',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 6,
    text: 'My schedule for today lists a six-hour self-accusatory depression.',
    name: 'Do Androids Dream of Electric Sheep? — Philip K. Dick',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Gallery() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-[900px]:grid-cols-4 max-[600px]:grid-cols-3 max-[300px]:grid-cols-2 mx-auto mb-10 w-full max-w-6xl grid grid-cols-5 gap-4 space-y-4 pb-10">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-100 group-hover:opacity-75 p-6 italic">
                <p className="text-gray-800">{product.text}</p>
              </div>
              <div className="px-2 space-y-1">
                <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
                <p className="italic text-gray-500">{product.availability}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
