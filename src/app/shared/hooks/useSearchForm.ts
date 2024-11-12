import { useRouter } from 'next/navigation'

import { useState } from 'react'

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

export const useSearchForm = (offers: Offer[], onSearch: (filteredOffers: Offer[]) => void) => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const [isFormVisible, setIsFormVisible] = useState(false)

  const onSubmitHand = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault()

    const filteredOffers = Array.isArray(offers)
      ? offers.filter((offer) => offer.title.toLowerCase().includes(searchInput.toLowerCase()))
      : []
    onSearch(filteredOffers)

    const queryString = `title=${encodeURIComponent(searchInput)}`
    return router.push(`/search?${queryString}`)
  }

  const handleInputChange = (event: React.SyntheticEvent, value: string | null) => {
    setSearchInput(value || '')
  }

  const handleIconButtonClick = () => {
    if (isFormVisible) {
      onSubmitHand()
    } else {
      setIsFormVisible(true)
    }
  }

  return {
    searchInput,
    isFormVisible,
    onSubmitHand,
    handleInputChange,
    handleIconButtonClick,
    setIsFormVisible,
  }
}
