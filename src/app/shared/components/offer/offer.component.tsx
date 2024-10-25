"use client";

import { FC, ReactNode } from 'react'

import styles from './offer.module.scss'
import {CartPhoto} from "@/app/shared/images"
import Link from "next/link"

interface  IOffer {
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
interface IOfferProps {
    offer: IOffer
}

const OfferComponent:FC<Readonly<IOfferProps>> = ({offer}) => {

    const formatNumber = (num: number) => {
        if (isNaN(num)) return '';
        if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + 'm';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k';
        }
        return num.toString();
    };

    return (
            <div className={`${styles.cart} flex-col flex`}>
            <div
                className={`${styles.photoPart} flex flex-col`}
                style={{
                    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.5), rgba(18, 18, 18, 0.5)), url(${CartPhoto.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }}
            >
                <div className="flex items-center p-4 justify-between">
                    <div className={styles.idBlock}>
                        <p>ID {offer.id}</p>
                    </div>
                    <Link href="#">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z"
                                fill="white"/>
                        </svg>
                    </Link>
                </div>
                <div className="flex justify-between p-3 pt-24">
                    <div className="flex flex-col">
                        <Link href="#">
                            <h5>{offer.title}</h5>
                        </Link>
                        <h6>{offer.description}</h6>
                    </div>
                    <div className={`${styles.blockNumb} flex flex-col`}>
                        <p className="text-white">{offer.total_offices}</p>
                        <span className="text-white">офісів</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.textPart} flex flex-col gap-2 p-7`}>
                <div className="flex gap-2 items-center">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 12.932L9.3 9.63198C9.9526 8.97931 10.397 8.14779 10.577 7.24256C10.7571 6.33733 10.6646 5.39904 10.3114 4.54635C9.95817 3.69366 9.36003 2.96485 8.59261 2.45209C7.82519 1.93933 6.92296 1.66565 6 1.66565C5.07704 1.66565 4.17481 1.93933 3.40739 2.45209C2.63997 2.96485 2.04183 3.69366 1.68861 4.54635C1.33539 5.39904 1.24294 6.33733 1.42297 7.24256C1.603 8.14779 2.04741 8.97931 2.7 9.63198L6 12.932ZM6 14.8173L1.75734 10.5746C0.918228 9.73553 0.346791 8.66643 0.115286 7.50255C-0.11622 6.33866 0.00260456 5.13227 0.456732 4.03591C0.91086 2.93956 1.6799 2.00249 2.66659 1.34321C3.65328 0.683923 4.81332 0.332031 6 0.332031C7.18669 0.332031 8.34672 0.683923 9.33342 1.34321C10.3201 2.00249 11.0891 2.93956 11.5433 4.03591C11.9974 5.13227 12.1162 6.33866 11.8847 7.50255C11.6532 8.66643 11.0818 9.73553 10.2427 10.5746L6 14.8173ZM6 7.66531C6.35362 7.66531 6.69276 7.52484 6.94281 7.27479C7.19286 7.02474 7.33334 6.6856 7.33334 6.33198C7.33334 5.97836 7.19286 5.63922 6.94281 5.38917C6.69276 5.13912 6.35362 4.99865 6 4.99865C5.64638 4.99865 5.30724 5.13912 5.05719 5.38917C4.80715 5.63922 4.66667 5.97836 4.66667 6.33198C4.66667 6.6856 4.80715 7.02474 5.05719 7.27479C5.30724 7.52484 5.64638 7.66531 6 7.66531ZM6 8.99865C5.29276 8.99865 4.61448 8.71769 4.11438 8.2176C3.61429 7.7175 3.33334 7.03922 3.33334 6.33198C3.33334 5.62474 3.61429 4.94646 4.11438 4.44636C4.61448 3.94626 5.29276 3.66531 6 3.66531C6.70725 3.66531 7.38552 3.94626 7.88562 4.44636C8.38572 4.94646 8.66667 5.62474 8.66667 6.33198C8.66667 7.03922 8.38572 7.7175 7.88562 8.2176C7.38552 8.71769 6.70725 8.99865 6 8.99865Z"
                            fill="#2A3842"/>
                    </svg>
                    <div className="flex flex-col">
                        <p>{offer.address}</p>
                        <span className="text-xs">{offer.street}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex gap-2">
                        <svg className="relative right-0.5" width="16" height="16" viewBox="0 0 16 16"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_41_2151)">
                                <path
                                    d="M8.00065 14.6654C4.31865 14.6654 1.33398 11.6807 1.33398 7.9987C1.33398 4.3167 4.31865 1.33203 8.00065 1.33203C11.6827 1.33203 14.6673 4.3167 14.6673 7.9987C14.6673 11.6807 11.6827 14.6654 8.00065 14.6654ZM8.00065 13.332C9.41514 13.332 10.7717 12.7701 11.7719 11.7699C12.7721 10.7697 13.334 9.41319 13.334 7.9987C13.334 6.58421 12.7721 5.22766 11.7719 4.22746C10.7717 3.22727 9.41514 2.66536 8.00065 2.66536C6.58616 2.66536 5.22961 3.22727 4.22941 4.22746C3.22922 5.22766 2.66732 6.58421 2.66732 7.9987C2.66732 9.41319 3.22922 10.7697 4.22941 11.7699C5.22961 12.7701 6.58616 13.332 8.00065 13.332Z"
                                    fill="#05ADE5"/>
                                <path
                                    d="M5.19922 5.33203V10.1805H6.4871V7.35855H6.52498L7.60452 10.1426H8.38104L9.46058 7.37749H9.49846V10.1805H10.7863V5.33203H9.14808L8.02119 8.07824H7.96437L6.83748 5.33203H5.19922Z"
                                    fill="#05ADE5"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_41_2151">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p>{offer.metro_location}</p>
                    </div>
                    <div className="flex gap-0.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.078 5.808L7.21466 4.256C7.45452 4.08047 7.74626 3.99034 8.04333 4C8.40567 4.00904 8.75619 4.13074 9.04616 4.34819C9.33613 4.56564 9.55115 4.86803 9.66133 5.21333C9.78533 5.602 9.89866 5.86467 10.0013 6.00133C10.3115 6.4152 10.7139 6.75107 11.1766 6.98229C11.6393 7.2135 12.1494 7.3337 12.6667 7.33333V8.66667C11.9782 8.66742 11.2981 8.51552 10.6754 8.22191C10.0527 7.9283 9.50279 7.50028 9.06533 6.96867L8.60066 9.60533L9.97466 10.7587L11.4567 14.8307L10.2033 15.2867L8.84333 11.5507L6.58333 9.654C6.39786 9.50424 6.25594 9.30748 6.17234 9.08424C6.08874 8.86099 6.06652 8.61942 6.10799 8.38467L6.44733 6.46133L5.996 6.78933L4.578 8.74133L3.49933 7.95733L5.06666 5.8L5.078 5.808ZM8.99999 3.66667C8.64637 3.66667 8.30723 3.52619 8.05719 3.27614C7.80714 3.02609 7.66666 2.68696 7.66666 2.33333C7.66666 1.97971 7.80714 1.64057 8.05719 1.39052C8.30723 1.14048 8.64637 1 8.99999 1C9.35362 1 9.69275 1.14048 9.9428 1.39052C10.1929 1.64057 10.3333 1.97971 10.3333 2.33333C10.3333 2.68696 10.1929 3.02609 9.9428 3.27614C9.69275 3.52619 9.35362 3.66667 8.99999 3.66667ZM7.01866 12.454L4.876 15.0073L3.85466 14.1507L5.83866 11.7867L6.33599 10.3333L7.52999 11.3333L7.01866 12.454Z"
                                fill="#51B4E8"/>
                        </svg>
                        <p>≈{offer.metro_time}</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className="flex gap-4 items-center">
                    {Array.isArray(offer.prices) && offer.prices.length > 0 ? (
                        Object.entries(offer.prices[0]).map(([meters, price]) => {
                            const numericPrice = Number(price);
                            return (
                                <div className="flex flex-col numbM" key={meters}>
                                     <span className="font-bold meters">
                                    {meters} м<sup>2</sup>
                                </span>
                                    <p>{formatNumber(numericPrice)} ₽</p>
                                </div>
                            );
                        })
                    ) : (
                        <div>No price information available</div>
                    )}
                </div>
                <div className="flex gap-2 items-center">
                    {Array.isArray(offer.options) && offer.options.length > 0 ? (
                        offer.options.map((option) =>
                            typeof option === 'object' && option !== null ? (
                                Object.entries(option).map(([text, color]) => (
                                    <div key={text} className={`${styles['item' + color]} flex`}>
                                        <h5 className={styles['tit' + color]}>{text}</h5>
                                    </div>
                                ))
                            ) : null
                        )
                    ) : (
                        <p>Немає доступних опцій</p>
                    )}

                </div>
            </div>
        </div>
    )
}
export default OfferComponent
