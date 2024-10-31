import { notFound } from 'next/navigation'

import { loadYamlData } from '@/libs/loadYaml'

interface IOffer {
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
  category_id: number
}

interface IOfferType {
  id: number
  title: string
}

export const getOffersForSale = (limit: number): IOffer[] => {
  try {
    const data = loadYamlData('offers')

    if (data && typeof data === 'object' && 'offers' in data && Array.isArray(data.offers)) {
      const offers: IOffer[] = data.offers
      return Array.from({ length: limit }, () => ({ ...offers[0] }))
    }

    return []
  } catch {
    notFound()
  }
}

export const getOffersForRent = (limit: number): IOffer[] => {
  try {
    const data = loadYamlData('offers')

    if (data && typeof data === 'object' && 'offers' in data && Array.isArray(data.offers)) {
      const offers: IOffer[] = data.offers
      return Array.from({ length: limit }, () => ({ ...offers[0] }))
    }

    return []
  } catch {
    notFound()
  }
}

export const searchOffers = (
  categoryId: number,
  area: number,
  price: number,
  title: string | undefined,
): IOffer[] => {
  try {
    const data = loadYamlData('offers')

    if (data && typeof data === 'object' && 'offers' in data && Array.isArray(data.offers)) {
      const offers: IOffer[] = data.offers

      return offers.filter((offer: IOffer) => {
        const matchesCategory = categoryId ? offer.category_id === categoryId : true
        const matchesTitle = title ? offer.title === title : true
        const matchesArea =
          area && offer.prices[0] ? Object.keys(offer.prices[0]).includes(String(area)) : true
        const matchesPrice =
          price && offer.prices[0]
            ? Object.values(offer.prices[0]).some((val) => Number(val) <= price)
            : true

        return matchesCategory && matchesArea && matchesPrice && matchesTitle
      })
    }

    return []
  } catch {
    notFound()
  }
}

export const getTitlesList = () => {
  try {
    const data = loadYamlData('offers')

    if (data && typeof data === 'object' && 'offers' in data && Array.isArray(data.offers)) {
      const offers: IOffer[] = data.offers
      const titles = new Set<string>()

      offers.forEach((offer: IOffer) => {
        if (offer.title) {
          titles.add(offer.title)
        }
      })

      const sortedTitles = Array.from(titles).sort()

      return sortedTitles.map((title) => ({
        id: title,
        label: title,
      }))
    }

    return []
  } catch {
    notFound()
  }
}

export const getAreasList = () => {
  try {
    const data = loadYamlData('offers')

    if (data && typeof data === 'object' && 'offers' in data && Array.isArray(data.offers)) {
      const offers: IOffer[] = data.offers
      const areas = new Set<string>()

      offers.forEach((offer: IOffer) => {
        if (offer.prices && offer.prices.length > 0 && offer.prices[0]) {
          Object.keys(offer.prices[0]).forEach((area) => {
            areas.add(String(area))
          })
        }
      })

      const sortedAreas = Array.from(areas).sort((a, b) => Number(a) - Number(b))

      return sortedAreas.map((area) => ({
        id: area,
        label: area,
      }))
    }

    return []
  } catch {
    notFound()
  }
}

export const getPricesList = () => {
  try {
    const data = loadYamlData('offers')

    if (data && typeof data === 'object' && 'offers' in data && Array.isArray(data.offers)) {
      const offers: IOffer[] = data.offers
      const prices = new Set<string>()

      offers.forEach((offer: IOffer) => {
        if (offer.prices[0]) {
          Object.values(offer.prices[0]).forEach((price) => {
            prices.add(String(price))
          })
        }
      })

      const sortedPrices = Array.from(prices).sort()

      return sortedPrices.map((price) => ({
        id: price,
        label: price,
      }))
    }

    return []
  } catch {
    notFound()
  }
}

export const getCategoriesListWithOffers = (selectedCategory?: string) => {
  try {
    const categoryData = loadYamlData('offer-types')
    const categoriesTypes: IOfferType[] =
      categoryData &&
      typeof categoryData === 'object' &&
      'types' in categoryData &&
      Array.isArray(categoryData.types)
        ? categoryData.types
        : []

    const data = loadYamlData('offers')

    if (data && typeof data === 'object' && 'offers' in data && Array.isArray(data.offers)) {
      const offers: IOffer[] = data.offers
      const categoriesWithOffers: Array<any> = []
      const addedCategories = new Set()

      offers.forEach((offer: IOffer) => {
        const matchedCategory = categoriesTypes.find(
          (categoryObj: IOfferType) => categoryObj.id === offer.category_id,
        )

        if (matchedCategory && matchedCategory.title) {
          if (!selectedCategory || matchedCategory.title === selectedCategory) {
            categoriesWithOffers.push({
              ...offer,
              category_title: matchedCategory.title,
            })

            if (!addedCategories.has(matchedCategory.title)) {
              addedCategories.add(matchedCategory.title)
            }
          }
        }
      })

      return categoriesWithOffers
    }

    return []
  } catch {
    notFound()
  }
}
