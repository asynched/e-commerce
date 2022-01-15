import { formatPrice } from '@utils/currency'
import { useState } from 'react'
import CartContainer from './CartContainer'
import CartHeader from './CartHeader'
import CartProduct from './CartProduct'
import CheckoutInfo from './CheckoutInfo'

export default function Cart({ toggle }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <CartContainer>
      <CartHeader toggle={toggle} />
      <h1 className="my-4 text-3xl font-bold tracking-tighter">My Cart</h1>
      <CartProduct
        title="Black hat"
        price={80}
        image="https://cdn11.bigcommerce.com/s-qfzerv205w/products/115/images/489/Hat-front-black__72990.1603748583.220.290.png?c=1"
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div className="mt-auto">
        <hr />
        <CheckoutInfo />
        <hr />
        <button className="mt-8 py-4 w-full bg-black uppercase text-white font-bold">
          Proceed to checkout
        </button>
      </div>
    </CartContainer>
  )
}
