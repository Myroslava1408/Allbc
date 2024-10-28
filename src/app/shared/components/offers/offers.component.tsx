'use client'

import { FC, useEffect, useState } from 'react'

import FilterListComponent from '@/app/shared/components/filter-list/filter-list.component'
import OfferComponent from '@/app/shared/components/offer/offer.component'

import styles from './offers.module.scss'

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
  category_id: number
  prices: Array<{ [key: string]: number }>
  options: Array<{ [key: string]: string }>
}

interface ICategory {
  id: number
  title: string
  category: string
}

interface IOffersProps {
  offerTypes: ICategory[]
  title: string
  categoriesListWithOffers: IOffer[]
}

const OffersComponent: FC<Readonly<IOffersProps>> = ({
  offerTypes,
  title,
  categoriesListWithOffers,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [filteredOffers, setFilteredOffers] = useState<IOffer[]>([])

  useEffect(() => {
    const offersToShow: IOffer[] = []
    const categoryCounts: { [key: number]: number } = { 1: 0, 2: 0 }

    if (selectedCategory === null) {
      for (const offer of categoriesListWithOffers) {
        const { category_id } = offer

        if (category_id === 1 || category_id === 2) {
          if (categoryCounts[category_id] < 9) {
            offersToShow.push(offer)
            categoryCounts[category_id]++
          }
          if (categoryCounts[1] === 9 && categoryCounts[2] === 9) {
            break
          }
        }
      }
    } else {
      const filteredByCategory = categoriesListWithOffers.filter(
        (offer) => offer.category_id === selectedCategory,
      )
      if (filteredByCategory.length > 0) {
        offersToShow.push(...filteredByCategory)
      }
    }

    setFilteredOffers(offersToShow)
  }, [selectedCategory, categoriesListWithOffers])
  return (
    <>
      <div className={`flex gap-4 flex-col ${styles.titleRow}`}>
        <span className={styles.popTit}>Популярні оголошення</span>
        <h2>{title}:</h2>
        <FilterListComponent
          list={offerTypes}
          onCategorySelect={(categoryId: number) => {
            setSelectedCategory(categoryId)
          }}
        />
      </div>
      <div className='flex lg:flex-row flex-col p-2.5 items-center justify-center gap-4'>
        <div className='grid gap-2 xl:gap-5 pt-6 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {Array.isArray(filteredOffers) && filteredOffers.length > 0 ? (
            filteredOffers
              .slice(0, 9)
              .map((offer, index) => <OfferComponent key={index} offer={offer} />)
          ) : (
            <p>Немає пропозицій</p>
          )}
        </div>
      </div>
    </>
  )
}

export default OffersComponent
