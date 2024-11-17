'use client'
import { Spinner } from '@nextui-org/react'

import OfferComponent from '@/app/shared/components/offer/offer.component'
import useFavorites from '@/app/shared/hooks/useFavorites'
import * as m from '@/libs/localization/paraglide/messages'

import styles from './wishlist.module.scss'

const WishlistComponent = () => {
  const { favorites, loading, updateFavorites } = useFavorites()

  const handleFavoriteClick = (id: number) => {
    updateFavorites(id)
  }

  return (
    <div className={styles.wishlist}>
      <h2>{m.list_favorite()}</h2>
      {loading ? (
        <div className={styles.wishlist__inner}>
          <Spinner />
        </div>
      ) : favorites.length === 0 ? (
        <h2>{m.list_empty()}</h2>
      ) : (
        <div className={styles.wishlist__group}>
          {favorites.map((offer) => (
            <OfferComponent key={offer.id} offer={offer} onFavoriteClick={handleFavoriteClick} />
          ))}
        </div>
      )}
    </div>
  )
}

export default WishlistComponent
