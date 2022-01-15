import React from 'react'
import { StarIcon } from '@heroicons/react/outline'
import { StarIcon as StarIconFilled } from '@heroicons/react/solid'

export default function Rating({ maxRating = 5, rating }) {
  return (
    <div className="flex gap-1">
      {Array(maxRating)
        .fill(0)
        .map((_, idx) => (
          <React.Fragment key={idx}>
            {idx < rating ? (
              <StarIconFilled className="w-6 h-6" />
            ) : (
              <StarIcon className="w-6 h-6" />
            )}
          </React.Fragment>
        ))}
    </div>
  )
}
