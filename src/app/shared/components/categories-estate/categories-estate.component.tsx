"use client";

import Link from "next/link"
import styles from './categories-estate.module.scss'
import { imagesMap } from "@/libs/imagesMap"
import { FC, ReactNode, useState } from "react"

interface ICategoryEstate {
    id: number
    title: string
    title_html: string
    background: string
    rentalPrice: number
    salePrice: number
}

interface ICategoriesEstateProps {
    settings: ReactNode
    categoryEstate: ICategoryEstate
}

const CategoriesEstateComponent: FC<Readonly<ICategoriesEstateProps>> = ({ categoryEstate, settings }) => {
    const background = imagesMap[categoryEstate.background];
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href="#">
            <div
                className={styles.itemCategory}
                style={{
                    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.5), rgba(18, 18, 18, 0.5)), url(${background.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <p className={`text-white ${styles.titleBlock} ${isHovered ? styles.show : ''}`} dangerouslySetInnerHTML={{ __html: categoryEstate.title_html }} />
                <div className={`${styles.hoverContent} ${isHovered ? styles.show : ''}`}>
                    <div className="flex items-left justify-center gap-6 pt-28 max-w-44">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-white">Оренда</p>
                            <span className="text-white pl-2">{categoryEstate.rentalPrice}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-white">Продаж</p>
                            <span className="text-white">{categoryEstate.salePrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CategoriesEstateComponent
