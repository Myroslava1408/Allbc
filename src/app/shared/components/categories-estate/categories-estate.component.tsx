'use client'

import Link from 'next/link'

import { FC, useState } from 'react'

import { imagesMap } from '@/libs/imagesMap'
import * as m from '@/libs/localization/paraglide/messages'

import styles from './categories-estate.module.scss'

type BackgroundKeys = keyof typeof imagesMap

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

interface ICategoriesEstateProps {
  categoryEstate: ICategoryEstate | ICategoryEstate[]
}

const CategoriesEstateComponent: FC<Readonly<ICategoriesEstateProps>> = ({ categoryEstate }) => {
  const estateArray = Array.isArray(categoryEstate) ? categoryEstate : [categoryEstate]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {estateArray.map((estate, index) => {
        const backgroundKey = estate.category.background
        const background = backgroundKey in imagesMap ? imagesMap[backgroundKey] : null

        return (
          <Link href='#' key={index}>
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
              <p
                className={`${styles.itemCategory__titleBlock} ${isHovered ? styles.show : ''}`}
                dangerouslySetInnerHTML={{ __html: estate.category.title_html }}
              />
              <div className={`${styles.itemCategory__hoverContent} ${isHovered ? styles.show : ''}`}>
                <div className={styles.itemCategory__inner}>
                  <div className={styles.itemCategory__group}>
                    <p className='text-white'>{m.rent()}</p>
                    <span className={styles.itemCategory__rentalPrice}>{estate.category.rentalPrice}</span>
                  </div>
                  <div className={styles.itemCategory__group}>
                    <p className='text-white'>{m.sale()}</p>
                    <span className='text-white'>{estate.category.salePrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default CategoriesEstateComponent
