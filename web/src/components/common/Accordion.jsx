import { useEffect, useRef, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function Accordion({ summary, children }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  const toggleOpen = () => setOpen(open => !open)

  return (
    <div className="my-2 cursor-pointer" onClick={toggleOpen}>
      <div className="text-lg flex items-center gap-2">
        <ChevronRightIcon
          className={`w-4 h-4 transition-all duration-300`}
          style={{
            transform: open ? 'rotate(90deg)' : '',
          }}
        />
        <span>{summary}</span>
      </div>
      <div
        className="ml-6 mt-2 overflow-hidden transition-all duration-500"
        ref={contentRef}
        style={{
          maxHeight: open ? '192px' : 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}
