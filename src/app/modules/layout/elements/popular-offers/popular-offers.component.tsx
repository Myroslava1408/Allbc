'use client'

import React, { FC } from 'react'

import BannerRightComponent from '@/app/shared/components/bannerRight/bannerRight.component'
import OffersComponent from '@/app/shared/components/offers/offers.component'
import ParticipantsSidebarComponent from '@/app/shared/components/participants-sidebar/participants-sidebar.component'
import { iconSrc, NewsBan } from '@/app/shared/images'
import { imagesMap } from '@/libs/imagesMap'
import * as m from '@/libs/localization/paraglide/messages'

import styles from './popular-offers.module.scss'

interface IOffer {
  type: number
  id: number
  title: string
  description: string
  total_offices: number
  category_id: number
  address: string
  street: string
  metro_location: string
  metro_time: string
  prices: Array<{ [key: string]: number }>
  options: Array<{ [key: string]: string }>
}
interface ICategory {
  id: number
  title: string
  category: string
}
interface IOwner {
  nameParticipant: string
  apartments: number
  housing: number
  image: keyof typeof imagesMap
  category: 'owner'
}
interface IBroker {
  nameParticipant: string
  proposals: number
  image: keyof typeof imagesMap
  category: 'broker'
}
interface IBuilder {
  nameParticipant: string
  proposals: string
  image: keyof typeof imagesMap
  category: 'builder'
}

interface IPopularOffersProps {
  offerTypesForSale: ICategory[]
  offerTypesForRent: ICategory[]
  offersForSale: IOffer[]
  offersForRent: IOffer[]
  builders: IBuilder[]
  owners: IOwner[]
  brokers: IBroker[]
  categoriesListWithOffers: IOffer[]
}

const PopularOffersComponent: FC<Readonly<IPopularOffersProps>> = ({
  offerTypesForSale,
  offerTypesForRent,
  offersForSale,
  offersForRent,
  builders,
  brokers,
  owners,
  categoriesListWithOffers,
}) => {
  return (
    <section className={styles.offers}>
      <div className={styles.offers__inner}>
        <div className={styles.offers__block}>
          <OffersComponent
            title={m.sale()}
            offerTypes={offerTypesForSale}
            offers={offersForSale}
            categoriesListWithOffers={categoriesListWithOffers}
            defaultCategoryId={4}
          />
          <OffersComponent
            title={m.rent()}
            offerTypes={offerTypesForRent}
            offers={offersForRent}
            categoriesListWithOffers={categoriesListWithOffers}
            defaultCategoryId={1}
          />
        </div>
        <div className={styles.offers__blockParticipants}>
          <div className={styles.offers__blockRight}>
            <div className={styles.offers__paticipantsRight}>
              <ParticipantsSidebarComponent
                nameHeader={m.brokers()}
                classNameButton={styles.offers__greenBtn}
                svgColor={'white'}
                participants={brokers}
              />
              <button className={styles.offers__orderBtn}>{m.consultation()}</button>
            </div>
            <ParticipantsSidebarComponent
              nameHeader={m.builders()}
              classNameButton={styles.offers__blueBtn}
              svgColor={'black'}
              participants={builders}
            />
            <ParticipantsSidebarComponent
              nameHeader={m.owners()}
              classNameButton={styles.offers__pinkBtn}
              svgColor={'black'}
              participants={owners}
            />
          </div>
          <BannerRightComponent
            title={m.news()}
            subtitle={m.events()}
            inputPlaceholder='Email'
            buttonText={m.subscribe()}
            inputClassName={styles.offers__inputNews}
            secondButtonText={m.telegram()}
            iconSrc={typeof iconSrc === 'string' ? iconSrc : iconSrc.src}
            onButtonClick={() => alert(m.subscribe())}
            containerClassName={styles.offers__newsItem}
            titleClassName={styles.offers__titH}
            buttonClassName={styles.offers__subscribeBtn}
            secondButtonClassName={styles.offers__designationBtn}
            style={{ '--bg-img': `url(${NewsBan.src})` }}
          />
        </div>
      </div>
    </section>
  )
}
export default PopularOffersComponent
