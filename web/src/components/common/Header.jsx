import React from 'react'
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import Logo from '@assets/logo.svg'
import AvatarBadge from './AvatarBadge'

export default function Header() {
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
        <ShoppingBagIcon className="h-6 w-6" />
        <HeartIcon className="h-6 w-6" />
        <AvatarBadge />
      </div>
    </header>
  )
}
