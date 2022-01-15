import { XIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/outline'

import AvatarBadge from '@components/common/AvatarBadge'

export default function CartHeader() {
  return (
    <header className="text-sm flex items-center justify-between">
      <div className="flex items-center gap-2">
        <XIcon className="w-6 h-6" />
        <span>Close</span>
      </div>
      <div className="flex items-center gap-2">
        <ShoppingBagIcon className="w-6 h-6" />
        <HeartIcon className="w-6 h-6" />
        <AvatarBadge />
      </div>
    </header>
  )
}
