import { useState } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import { StarIcon as StarIconFilled } from '@heroicons/react/solid'

import { formatPrice } from '@utils/currency'

import BaseLayout from '@layouts/BaseLayout'
import Rating from '@components/common/Rating'
import Accordion from '@components/common/Accordion'
import ProductSection from '@components/product/ProductSection'

export default function ProductPage() {
  const product = {
    name: 'Black hat',
    price: 80,
    description: `The Next.js beanie has arrived! This embroidered beauty has a snug fit that ensures you're going to feel cozy and warm whatever you're doing.\n• 60% cotton, 40% acrylic\n• Breathable cotton blend\n• Form-fitting shape\n• One size fits most`,
    reviews: {
      amount: 36,
      rating: 4,
    },
    details: {
      about:
        'This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19.',
      care: 'This is a limited edition production run. Printing starts when the drop ends.',
    },
    images: [
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F489%2FHat-front-black__72990.1603748583.png&w=640&q=85',
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F490%2FHat-back-black__57260.1602591509.png&w=640&q=85',
      'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F494%2FHat-left-black__51142.1602591510.png&w=640&q=85',
    ],
  }

  return (
    <BaseLayout>
      <div className="grid grid-cols-3">
        <ProductSection product={product} />
        <div className="py-8 px-6 flex flex-col flex-1">
          <div className="whitespace-pre-wrap">
            <p>{product.description}</p>
          </div>
          <div className="mb-2 mt-16 flex items-center justify-between">
            <Rating rating={product.reviews.rating} />
            <p>{product.reviews.amount} reviews</p>
          </div>
          <button className="mb-4 py-4 bg-black text-white font-bold uppercase">
            Add to cart
          </button>
          <Accordion summary="Care" height={72}>
            <div>{product.details.care}</div>
          </Accordion>
          <Accordion summary="Details" height={72}>
            <div>{product.details.about}</div>
          </Accordion>
        </div>
      </div>
    </BaseLayout>
  )
}
