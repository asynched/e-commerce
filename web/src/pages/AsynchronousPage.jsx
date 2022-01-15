import React from 'react'

import { delay } from '@utils/async'

import Async from '@lib/async'
import Loader from '@components/common/Loader'

export default function AsynchronousPage() {
  const personPromise = (async () => {
    await delay(2000)
    return { name: 'Eder', age: 20 }
  })()

  return (
    <Async
      promise={personPromise}
      fallback={<Loader />}
      resolve={person => (
        <div>
          <p>{person.name}</p>
          <p>{person.age}</p>
        </div>
      )}
      reject={() => <div>Couldn't fetch data, try again.</div>}
    />
  )
}
