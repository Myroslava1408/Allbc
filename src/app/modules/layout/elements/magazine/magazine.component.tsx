'use client'
import { FC } from 'react'

import ArticlesComponent from '@/app/shared/components/articles/articles.component'
import { Man } from '@/app/shared/images'

import styles from './magazine.module.scss'

const MagazineComponent: FC = () => {
  return (
    <section className={styles.magazine}>
      <h3 className={styles.magazine__title}>Журнал</h3>
      <div className={styles.magazine__rowTitles}>
        <p className={styles.magazine__subtitle}>Статті</p>
        <button className={styles.magazine__blueBtn}>
          Всі статті
          <svg
            width='15'
            height='9'
            viewBox='0 0 15 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.0417 1.66675L13.875 4.50008M13.875 4.50008L11.0417 7.33341M13.875 4.50008H1.125'
              stroke='black'
              strokeWidth='1.41667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
      <div className={styles.magazine__inner}>
        <div className={styles.magazine__magazineBlock} style={{ background: `url(${Man.src})` }}>
          <h5 className={styles.magazine__name}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h5>
        </div>
        <div className={styles.magazine__list}>
          <ArticlesComponent />
          <ArticlesComponent />
        </div>
      </div>
    </section>
  )
}
export default MagazineComponent
