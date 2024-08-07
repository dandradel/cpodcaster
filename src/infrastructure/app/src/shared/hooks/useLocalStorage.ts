/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

const useLocalStorage = (storageKey: string, fallbackState: any) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey) as string) ?? fallbackState,
  )

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value, storageKey])

  return [value, setValue]
}

export default useLocalStorage
