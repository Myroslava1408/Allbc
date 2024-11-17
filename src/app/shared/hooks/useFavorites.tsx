import { useEffect, useState } from 'react'

interface Offer {
  type: number
  id: number
  title: string
  description: string
  total_offices: number
  address: string
  street: string
  metro_location: string
  metro_time: string
  prices: Array<{ [key: string]: number }>
  options: Array<{ [key: string]: string }>
}

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Offer[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites)
      if (Array.isArray(parsedFavorites)) {
        setFavorites(parsedFavorites)
      }
    }
    setLoading(false)
  }, [])

  const updateFavorites = (id: number) => {
    const updatedFavorites = favorites.filter((offer) => offer.id !== id)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  return { favorites, loading, updateFavorites }
}

export default useFavorites
