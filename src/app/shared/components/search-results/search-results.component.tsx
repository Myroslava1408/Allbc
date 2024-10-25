"use client";

import React, {ReactNode} from 'react'
import OfferComponent from "@/app/shared/components/offer/offer.component"

interface Price {
    [key: string]: number
}

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
    settings: ReactNode
}

const SearchResultsComponent: React.FC<SearchResultsProps> = ({ offers, settings }) => {
    return (
        <div className={"flex p-8 flex-col  justify-between items-center m-auto max-w-screen-xl"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-left p-5"}>Результати пошуку</h1>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"}>
                {offers.length > 0 ? (
                    offers.map((offer, index) => (
                        <div className={"flex flex-col"} key={index}>
                            <OfferComponent  offer={offer}/>
                        </div>
                    ))
                ) : (
                    <p>Немає пропозицій за вашими критеріями</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsComponent
