"use client";

import React, { FC, ReactNode } from 'react'
import styles from './popular-offers.module.scss'
import OffersComponent from "@/app/shared/components/offers/offers.component"
import ParticipantsSidebarComponent from "@/app/shared/components/participants-sidebar/participants-sidebar.component"
import BannerRightComponent from "@/app/shared/components/bannerRight/bannerRight.component"
import {iconSrc, NewsBan} from "@/app/shared/images"
import {imagesMap} from "@/libs/imagesMap";

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
    settings: ReactNode
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
   settings, offerTypesForSale, offerTypesForRent, offersForSale, offersForRent, builders, brokers, owners, categoriesListWithOffers
}) => {
    return (
        <section className={`${styles.offers} flex flex-col`}>
            <div className="flex lg:flex-row items-baseline flex-col justify-between">
                <div className="flex m-auto flex-col">
                    <OffersComponent
                        settings={settings}
                        title={'Продаж'}
                        offerTypes={offerTypesForSale}
                        offers={offersForSale}
                        categoriesListWithOffers={categoriesListWithOffers}
                    />
                    <OffersComponent
                        settings={settings}
                        title={'Оренда'}
                        offerTypes={offerTypesForRent}
                        offers={offersForRent}
                        categoriesListWithOffers={categoriesListWithOffers}
                    />
                </div>
                <div className={`${styles.blockParticipants} flex items-center flex-col`}>
                    <div className={`${styles.blockRight} grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1 m-auto`}>
                        <div className={"flex flex-col"}>
                        <ParticipantsSidebarComponent
                            nameHeader={'Брокери'}
                            classNameButton={styles.greenBtn}
                            svgColor={'white'}
                            participants={brokers}
                        />
                        <button className={`${styles.orderBtn} text-white mb-5`}>
                            Замовити консультацію
                        </button>
                        </div>
                        <ParticipantsSidebarComponent
                            nameHeader={'Забудовники'}
                            classNameButton={styles.blueBtn}
                            svgColor={'black'}
                            participants={builders}
                        />
                        <ParticipantsSidebarComponent
                            nameHeader={'Власники'}
                            classNameButton={styles.pinkBtn}
                            svgColor={'black'}
                            participants={owners}
                        />
                    </div>
                    <BannerRightComponent
                        title="Subscribe on news & updates"
                        subtitle="Always be in the center of events"
                        inputPlaceholder="Email"
                        buttonText="Підписатися"
                        inputClassName={styles.inputNews}
                        secondButtonText="Призначити чат-бота Telegram"
                        iconSrc={typeof iconSrc === 'string' ? iconSrc : iconSrc.src}
                        onButtonClick={() => console.log('Підписатися')}
                        containerClassName={styles.newsItem}
                        titleClassName={styles.titH}
                        buttonClassName={styles.subscribeBtn}
                        secondButtonClassName={styles.designationBtn}
                        style={{ '--bg-img': `url(${NewsBan.src})` }}
                    />
                </div>
            </div>
        </section>
    )
}
export default PopularOffersComponent
