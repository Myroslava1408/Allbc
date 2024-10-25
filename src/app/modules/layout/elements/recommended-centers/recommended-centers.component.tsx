"use client";

import { FC, ReactNode } from 'react'
import Link from 'next/link'

import styles from './recommended-centers.module.scss'
import {BgBanRight} from "@/app/shared/images"

import BannerRightComponent from "@/app/shared/components/bannerRight/bannerRight.component"
import OfferComponent from "@/app/shared/components/offer/offer.component"

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
    settings: ReactNode
    offers: {
        offers: IOffer[] |  { offers: IOffer[] }
    };
}

const RecommendedCentersComponent: FC<Readonly<IRecommendedCentersProps>> = ({ settings, offers }) => {

    const offersArray = Array.isArray(offers.offers)
        ? offers.offers
        : Array.isArray(offers.offers.offers)
        ? offers.offers.offers
        : [];

    if (!offersArray.length) {
        return <p>Немає пропозицій</p>;
    }
    return (
        <section className={`${styles.sectionThird} flex flex-col`}>
            <div className={`${styles.titleRow} flex md:flex-row flex-col`}>
                <h2>Рекомендовані БЦ</h2>
                <Link className="flex gap-2 items-center" href="#">
                    <p>Подивитися ще</p>
                    <div className={styles.numbBlue}>
                        <span>20</span>
                    </div>
                </Link>
            </div>
            <div className="flex lg:flex-row flex-col p-2.5 lg:p-0 items-center justify-between">
                <div className="grid gap-2 xl:gap-5 pt-6 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {offersArray.slice(0, 3).map((item: IOffer) => {
                        return (
                            <div key={item.id}>
                                <OfferComponent offer={item} />
                            </div>
                        );
                    })}
                </div>
                <BannerRightComponent
                    title="Тут може бути  Ваш офіс"
                    buttonText="Додати офіс"
                    onButtonClick={() => console.log('Додати офіс')}
                    containerClassName={styles.officeItem}
                    titleClassName={styles.titH}
                    buttonClassName={styles.btnOrange}
                    style={{ '--bg-image': `url(${BgBanRight.src})` }}
                />
            </div>
        </section>
    )
}

export default RecommendedCentersComponent
