import { useEffect, useState } from 'react'

/**
 * @template PromiseType
 * @typedef AsyncComponentOptionsType
 * @property { Promise<PromiseType> } promise
 * @property { import('react').FC } fallback
 * @property { (data: PromiseType) => import('react').FC } resolve
 * @property { (error?: Error) => import('react').FC } reject
 */

/**
 * @template PromiseType
 * @param { AsyncComponentOptionsType<PromiseType> } options
 * @returns
 */
export default function Async({ promise, fallback, resolve, reject }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    promise.then(setData).catch(setError)
  }, [])

  if (error) {
    return reject(error)
  }

  if (data) {
    return resolve(data)
  }

  return fallback
}
