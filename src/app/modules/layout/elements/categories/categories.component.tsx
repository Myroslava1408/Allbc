"use client";

import React, { FC, ReactNode } from 'react'
import styles from './categories.module.scss'
import CategoriesEstateComponent from "@/app/shared/components/categories-estate/categories-estate.component"
import CategoriesSidebarComponent from "@/app/shared/components/categories-sidebar/categories-sidebar.component"

interface ICategory {
    nameCategory: string
    amount: number
    category: string
}
interface ICategoryEstate {
    id: number;
    title: string;
    title_html: string;
    background: string;
    rentalPrice: number;
    salePrice: number;
}

interface ICategoriesProps {
    settings: ReactNode
    categoryEstate: ICategoryEstate[]
    categoriesOffersForSale: ICategory[]
    categoriesOffersForRent: ICategory[]
}

const CategoriesComponent: FC<Readonly<ICategoriesProps>> = ({ settings, categoryEstate = [], categoriesOffersForRent = [], categoriesOffersForSale = [] }) => {
    return (
        <section className={`${styles.categories} flex lg:flex-row flex-col gap-5 p-2.5`}>
            <div className={`${styles.itemsTable} grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5`}>
                {Array.isArray(categoryEstate) && categoryEstate.length > 0 ? (
                    categoryEstate.map((item, index) => (
                        <CategoriesEstateComponent key={index} settings={settings} categoryEstate={item} />
                    ))
                ) : (
                    <p>No categories available</p>
                )}
            </div>
            <div className={`${styles.lists} flex gap-3 flex-col`}>
                <CategoriesSidebarComponent  titleHeader={'Оренда'} categories={categoriesOffersForRent} />
                <CategoriesSidebarComponent  titleHeader={'Продаж'} categories={categoriesOffersForSale} />
            </div>
        </section>
)
}
export default CategoriesComponent
