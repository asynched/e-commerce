import { useState } from 'react'

import Cart from '@components/cart/Cart'
import Footer from '@components/ui/Footer'
import Header from '@components/ui/Header'

export default function BaseLayout({ children }) {
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => setShowCart(show => !show)

  return (
    <main>
      {showCart && <Cart toggle={toggleCart} />}
      <Header toggleCart={toggleCart} />
      {children}
      <Footer />
    </main>
  )
}
