'use client'

import Link from 'next/link'

import { FC } from 'react'

import BannerRightComponent from '@/app/shared/components/bannerRight/bannerRight.component'
import OfferComponent from '@/app/shared/components/offer/offer.component'
import { BgBanRight } from '@/app/shared/images'

import styles from './recommended-centers.module.scss'

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
}

interface IRecommendedCentersProps {
  offers: {
    offers: IOffer[] | { offers: IOffer[] }
  }
}

const RecommendedCentersComponent: FC<Readonly<IRecommendedCentersProps>> = ({ offers }) => {
  const offersArray = Array.isArray(offers.offers)
    ? offers.offers
    : Array.isArray(offers.offers.offers)
      ? offers.offers.offers
      : []

  if (!offersArray.length) {
    return <p>Немає пропозицій</p>
  }
  return (
    <section className={styles.centers}>
      <div className={styles.centers__titleRow}>
        <h2 className={styles.centers__title}>Рекомендовані БЦ</h2>
        <Link className={styles.centers__moreLink} href='#'>
          <p className={styles.centers__moreTitle}>Подивитися ще</p>
          <div className={styles.centers__numbBlue}>
            <span className={styles.centers__blueSpan}>20</span>
          </div>
        </Link>
      </div>
      <div className={styles.centers__inner}>
        <div className={styles.centers__tableOffers}>
          {offersArray.slice(0, 3).map((item: IOffer) => {
            return (
              <div key={item.id}>
                <OfferComponent offer={item} />
              </div>
            )
          })}
        </div>
        <BannerRightComponent
          title='Тут може бути  Ваш офіс'
          buttonText='Додати офіс'
          onButtonClick={() => alert('Додати офіс')}
          containerClassName={styles.officeItem}
          titleClassName={styles.officeItem__titH}
          buttonClassName={styles.officeItem__btnOrange}
          style={{ '--bg-image': `url(${BgBanRight.src})` }}
        />
      </div>
    </section>
  )
}

export default RecommendedCentersComponent
