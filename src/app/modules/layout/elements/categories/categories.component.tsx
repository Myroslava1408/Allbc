'use client'

import React, { FC } from 'react'

import CategoriesEstateComponent from '@/app/shared/components/categories-estate/categories-estate.component'
import CategoriesSidebarComponent from '@/app/shared/components/categories-sidebar/categories-sidebar.component'
import { imagesMap } from '@/libs/imagesMap'

import styles from './categories.module.scss'

type BackgroundKeys = keyof typeof imagesMap
interface ICategoryOffer {
  nameCategory: string
  amount: number
  category: string
}
interface ICategory {
  id: number
  title: string
  title_html: string
  background: BackgroundKeys
  rentalPrice: string
  salePrice: string
}
interface ICategoryEstate {
  category: ICategory
}

interface ICategoriesProps {
  categoryEstate: ICategoryEstate[]
  categoriesOffersForSale: ICategoryOffer[]
  categoriesOffersForRent: ICategoryOffer[]
}

const CategoriesComponent: FC<Readonly<ICategoriesProps>> = ({
  categoryEstate = [],
  categoriesOffersForRent = [],
  categoriesOffersForSale = [],
}) => {
  return (
    <section className={styles.categories}>
      <div className={styles.categories__itemsTable}>
        {Array.isArray(categoryEstate) ? (
          categoryEstate.length > 0 ? (
            categoryEstate.map((item, index) => (
              <CategoriesEstateComponent key={index} categoryEstate={item} />
            ))
          ) : (
            <p>No categories available</p>
          )
        ) : (
          <p>Error: categoryEstate is not an array</p>
        )}
      </div>
      <div className={styles.categories__lists}>
        <CategoriesSidebarComponent titleHeader={'Оренда'} categories={categoriesOffersForRent} />
        <CategoriesSidebarComponent titleHeader={'Продаж'} categories={categoriesOffersForSale} />
      </div>
    </section>
  )
}
export default CategoriesComponent
