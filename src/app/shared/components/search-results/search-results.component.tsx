'use client'

import React from 'react'

import OfferComponent from '@/app/shared/components/offer/offer.component'
import * as m from '@/libs/localization/paraglide/messages'

import styles from './search-results.module.scss'

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

interface SearchResultsProps {
  offers: Offer[]
}

const SearchResultsComponent: React.FC<SearchResultsProps> = ({ offers }) => {
  return (
    <div className={styles.results}>
      <div className={styles.results__inner}>
        <h1 className={styles.results__title}>{m.results()}</h1>
      </div>
      <div className={styles.results__group}>
        {offers.length > 0 ? (
          offers.map((offer, index) => (
            <div key={index}>
              <OfferComponent offer={offer} />
            </div>
          ))
        ) : (
          <p>{m.no_offers_criteria()}</p>
        )}
      </div>
    </div>
  )
}

export default SearchResultsComponent
