import React from 'react'

export default function Hero({ title, content }) {
  return (
    <div className="py-16 flex gap-4 justify-center bg-black text-white">
      <h1 className="text-6xl font-bold tracking-tighter max-w-sm text-right">
        {title}
      </h1>
      <p className="mt-2 text-xl max-w-sm">{content}</p>
    </div>
  )
}
