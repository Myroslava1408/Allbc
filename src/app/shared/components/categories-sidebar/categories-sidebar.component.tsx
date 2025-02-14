'use client'

import Link from 'next/link'

import React, { FC, useEffect, useState } from 'react'

import {
  additionalAmount,
  defaultAmount,
  initialVisibleItems,
} from '@/constants/categories-sidebar.constants'
import * as m from '@/libs/localization/paraglide/messages'

import styles from './categories-sidebar.module.scss'

interface ICategory {
  nameCategory: string
  amount: number
  category: string
}

interface ICategoriesSidebarProps {
  titleHeader: string
  categories: ICategory[]
}

const CategoriesSidebarComponent: FC<Readonly<ICategoriesSidebarProps>> = ({
  titleHeader,
  categories,
}) => {
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems)
  const [isExpanded, setIsExpanded] = useState(false)
  const [displayedCategories, setDisplayedCategories] = useState<ICategory[]>([])

  const getRandomItems = (items: ICategory[], count: number) => {
    if (!Array.isArray(items)) {
      return []
    }

    const shuffled = items.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  useEffect(() => {
    setDisplayedCategories(getRandomItems(categories, visibleItems))
  }, [categories, visibleItems])

  const toggleItems = () => {
    if (isExpanded) {
      setVisibleItems(defaultAmount)
    } else {
      setVisibleItems((prev) => prev + additionalAmount)
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={styles.listOffice}>
      <p className={styles.listOffice__titleHeader}>{titleHeader}</p>
      <ul className={styles.listOffice__list}>
        {Array.isArray(displayedCategories) && displayedCategories.length > 0 ? (
          displayedCategories.map((category, index) => (
            <li key={index}>
              <div className={styles.listOffice__listUl}>
                <Link className={styles.listOffice__link} href='#'>
                  {category.nameCategory}
                </Link>
                <div className={styles.listOffice__numbBlue}>
                  <span className={styles.listOffice__amount}>{category.amount}</span>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>{m.no_categories()}</p>
        )}
      </ul>
      <div className={styles.listOffice__moreBlock}>
        <button className={styles.listOffice__moreBtn} onClick={toggleItems}>
          <p className={styles.listOffice__moreText}>{isExpanded ? m.hide() : m.more()}</p>
          <svg
            width='10'
            height='6'
            viewBox='0 0 10 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}
          >
            <path
              d='M4.99999 3.78145L8.29999 0.481445L9.24266 1.42411L4.99999 5.66678L0.757324 1.42411L1.69999 0.481445L4.99999 3.78145Z'
              fill='#005E7D'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CategoriesSidebarComponent
