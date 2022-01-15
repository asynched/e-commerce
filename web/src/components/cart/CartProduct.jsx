import { XIcon, PlusIcon, MinusIcon } from '@heroicons/react/outline'

import { formatPrice } from '@utils/currency'

export default function CartProduct({
  title,
  image,
  price,
  quantity,
  setQuantity,
}) {
  return (
    <div>
      <div className="mb-4 flex gap-4">
        <img className="bg-purple-600 w-20 h-20" src={image} alt={title} />
        <div className="flex flex-1 justify-between">
          <p className="text-lg">
            <b>{title}</b>
          </p>
          <p>{formatPrice(price)}</p>
        </div>
      </div>
      <div className="flex text-gray-500">
        <button className="mr-4 grid place-items-center text-lg border w-8 h-8">
          <XIcon className="w-4 h-4" />
        </button>
        <input
          className="px-2 border flex-1"
          type="text"
          value={quantity}
          disabled
        />
        <div className="flex items-center">
          <button
            className="grid place-items-center text-lg border w-8 h-8"
            onClick={() => setQuantity(quantity => quantity - 1)}
          >
            <MinusIcon className="w-4 h-4" />
          </button>
          <button
            className="grid place-items-center text-lg border w-8 h-8"
            onClick={() => setQuantity(quantity => quantity + 1)}
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
