import { useState, useEffect } from 'react'

/**
 * カスタムフック: fetch
 * @module Utils/Hooks/useFetch
 */
const useFetch = <T>(url: string, config?: object) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState<T>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, config)
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, setData, isLoading, error }
}

export default useFetch
