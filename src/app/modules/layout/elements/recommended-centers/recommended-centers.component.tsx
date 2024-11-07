'use client'

import Link from 'next/link'

import { FC } from 'react'

import BannerRightComponent from '@/app/shared/components/bannerRight/bannerRight.component'
import OfferComponent from '@/app/shared/components/offer/offer.component'
import { BgBanRight } from '@/app/shared/images'
import * as m from '@/libs/localization/paraglide/messages'

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
    return <p>{m.no_offers()}</p>
  }
  return (
    <section className={styles.centers}>
      <div className={styles.centers__titleRow}>
        <h2 className={styles.centers__title}>{m.recommended_bbs()}</h2>
        <Link className={styles.centers__moreLink} href='#'>
          <p className={styles.centers__moreTitle}>{m.see_more()}</p>
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
          title={m.banner_right_offer()}
          buttonText={m.add()}
          onButtonClick={() => alert(m.add())}
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
