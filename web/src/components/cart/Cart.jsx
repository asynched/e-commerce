import { useState } from 'react'
import CartContainer from './CartContainer'
import CartHeader from './CartHeader'
import CartProduct from './CartProduct'

export default function Cart() {
  const [quantity, setQuantity] = useState(1)

  return (
    <CartContainer>
      <CartHeader />
      <h1 className="my-4 text-3xl font-bold tracking-tighter">My Cart</h1>
      <CartProduct
        title="Black hat"
        price={80}
        image="https://cdn11.bigcommerce.com/s-qfzerv205w/products/115/images/489/Hat-front-black__72990.1603748583.220.290.png?c=1"
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </CartContainer>
  )
}
