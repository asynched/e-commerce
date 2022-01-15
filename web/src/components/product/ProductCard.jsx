import { formatPrice } from '@utils/currency'

export default function ProductCard({ image, title, price, background }) {
  return (
    <div
      className={`max-w-full relative grid place-items-center ${background}`}
    >
      <div className="absolute top-0 left-0">
        <h1 className="py-2 px-4 max-w-prose bg-white text-4xl font-bold tracking-tighter">
          {title}
        </h1>
        <p className="mt-1 p-2 px-4 max-w-fit bg-white">{formatPrice(price)}</p>
      </div>
      <img
        className="max-w-sm transition duration-300 ease-in-out transform hover:scale-110"
        src={image}
        alt={title}
      />
    </div>
  )
}
