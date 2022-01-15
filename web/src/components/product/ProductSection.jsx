import { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'

import { formatPrice } from '@utils/currency'

export default function ProductSection({ product }) {
  const [activeImage, setActiveImage] = useState(0)

  const nextImage = () => {
    setActiveImage(current =>
      current + 1 > product.images.length - 1 ? 0 : current + 1,
    )
  }

  const previousImage = () => {
    setActiveImage(current =>
      current - 1 < 0 ? product.images.length - 1 : current - 1,
    )
  }

  return (
    <div className="relative grid place-items-center bg-purple-600 col-span-2">
      <div className="absolute top-0 left-0">
        <h1 className="py-2 px-4 bg-white text-4xl font-bold tracking-tighter w-min whitespace-nowrap">
          {product.name}
        </h1>
        <h2 className="py-2 px-4 text-xl tracking-tighter bg-white w-min whitespace-nowrap">
          {formatPrice(product.price)}
        </h2>
      </div>
      <img src={product.images[activeImage]} alt={product.name} />
      <div className="absolute bottom-0 left-0 flex w-full">
        <div className="flex">
          {product.images.map((image, idx) => (
            <button onClick={() => setActiveImage(idx)} key={image}>
              <img
                className="w-32 h-32 bg-black bg-opacity-50 transition ease-in-out hover:bg-white hover:bg-opacity-100"
                src={image}
                alt={product.name}
              />
            </button>
          ))}
        </div>
        <div className="flex ml-auto mr-4 mt-auto mb-4 gap-2">
          <button
            aria-label="Previous image"
            onClick={previousImage}
            className="py-4 px-8 border border-white grid place-items-center text-white shadow-lg transition-all ease-in-out hover:bg-black hover:bg-opacity-25"
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <button
            aria-label="Next image"
            onClick={nextImage}
            className="py-4 px-8 border border-white grid place-items-center text-white shadow-lg transition-all ease-in-out hover:bg-black hover:bg-opacity-25"
          >
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
