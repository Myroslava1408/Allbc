import { useEffect, useState } from 'react'

interface Offer {
  id: number
  title: string
}

const useFavorite = (offer: Offer) => {
  const [isFavorited, setIsFavorited] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const isInFavorites = favorites.some((fav: Offer) => fav.id === offer.id)
    setIsFavorited(isInFavorites)
  }, [offer.id])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (isFavorited) {
      const updatedFavorites = favorites.filter((fav: Offer) => fav.id !== offer.id)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setIsFavorited(false)
    } else {
      favorites.push(offer)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      setIsFavorited(true)
    }

    setOpenSnackbar(true)
  }

  const closeSnackbar = () => {
    setOpenSnackbar(false)
  }

  return { isFavorited, openSnackbar, toggleFavorite, closeSnackbar }
}

export default useFavorite
