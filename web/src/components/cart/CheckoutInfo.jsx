import { formatPrice } from '@utils/currency'

export default function CheckoutInfo() {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <p>Subtotal: </p>
        <span>{formatPrice(100)}</span>
      </div>
      <div className="flex items-center justify-between">
        <p>Taxes: </p>
        <span>Calculated at checkout</span>
      </div>
      <div className="flex items-center justify-between">
        <p>Shipping:</p>
        <span>
          <b>FREE</b>
        </span>
      </div>
    </div>
  )
}
