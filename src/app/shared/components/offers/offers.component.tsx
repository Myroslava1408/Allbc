"use client";

import {FC, ReactNode, useEffect, useState} from 'react'

import styles from './offers.module.scss'

import FilterListComponent from "@/app/shared/components/filter-list/filter-list.component"
import OfferComponent from "@/app/shared/components/offer/offer.component"

interface IPrice {
    amount: number
    price: number
}
interface IOption {
    title: string
    name: string
}
interface IOffer {
    id: number
    title: string
    description: string
    category_id: number
    prices: IPrice[]
    options: IOption[]
}

interface ICategory {
    id: number
    title: string
    category: string
}

interface IOffersProps {
    settings: ReactNode
    offerTypes: ICategory[]
    title: string
    offers: IOffer[]
    categoriesListWithOffers: IOffer[]
}

const OffersComponent: FC<Readonly<IOffersProps>> = ({ settings, offerTypes, title, categoriesListWithOffers,offers }) => {

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [filteredOffers, setFilteredOffers] = useState<IOffer[]>([]);


    useEffect(() => {
        const offersToShow: IOffer[] = [];

        if (selectedCategory === null) {
            const categoryCounts = { 1: 0, 2: 0 };

            for (const offer of categoriesListWithOffers) {
                const { category_id } = offer;

                if (categoryCounts[category_id] < 9) {
                    offersToShow.push(offer);
                    categoryCounts[category_id]++;

                    if (categoryCounts[1] === 9 && categoryCounts[2] === 9) {
                        break;
                    }
                }
            }
        } else {
            offersToShow.push(...categoriesListWithOffers.filter(offer => offer.category_id === selectedCategory));
        }

        setFilteredOffers(offersToShow);
    }, [selectedCategory, categoriesListWithOffers]);
    return (
        <>
            <div className={`flex gap-4 flex-col ${styles.titleRow}`}>
                <span className={styles.popTit}>Популярні оголошення</span>
                <h2>{title}:</h2>
                <FilterListComponent
                    list={offerTypes}
                    onCategorySelect={(categoryId: number) => {
                        setSelectedCategory(categoryId);
                    }}
                />
            </div>
            <div className="flex lg:flex-row flex-col p-2.5 items-center justify-center gap-4">
                <div className="grid gap-2 xl:gap-5 pt-6 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {filteredOffers.length > 0 ? (
                        filteredOffers.slice(0, 9).map((offer, index) => (
                                <OfferComponent key={index} settings={settings} offer={offer} />
                        ))
                    ) : (
                        <p>Немає пропозицій</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default OffersComponent
