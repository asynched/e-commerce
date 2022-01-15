import { Link } from 'react-router-dom'
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/outline'

import AvatarBadge from '@components/common/AvatarBadge'
import Logo from '@assets/logo.svg'

export default function Header({ toggleCart }) {
  return (
    <header className="sticky top-0 z-10 p-4 flex items-center justify-between border-b bg-white">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo" />
        <Link to="/">All</Link>
        <Link to="/">Apparel</Link>
        <Link to="/">Shop all</Link>
      </div>
      <div className="border py-1 px-2 w-1/2">
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className="flex gap-4">
        <button onClick={toggleCart}>
          <ShoppingBagIcon className="h-6 w-6" />
        </button>
        <HeartIcon className="h-6 w-6" />
        <AvatarBadge />
      </div>
    </header>
  )
}
