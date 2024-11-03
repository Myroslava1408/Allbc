'use client'
import Link from 'next/link'

import React, { FC } from 'react'

import { getCitiesArray, getCityColumns } from '@/constants/office-space.constants'

import styles from './city-offices.module.scss'

interface ICityOffice {
  cityName: string
}

interface ICityOfficesProps {
  cities: ICityOffice[] | { cities: ICityOffice[] } | null
  title: string
}

const CityOfficesComponent: FC<Readonly<ICityOfficesProps>> = ({ cities, title }) => {
  const citiesArray = getCitiesArray(cities)

  if (!citiesArray.length) {
    return <p>Немає міст</p>
  }

  const columns = getCityColumns(citiesArray)

  return (
    <div className={styles.cityOffices}>
      <h3 className={styles.cityOffices__title}>{title}</h3>
      <div className={styles.cityOffices__inner}>
        {Object.entries(columns).map(([group, groupColumns]) => (
          <div className={styles.cityOffices__group} key={group}>
            {Object.entries(groupColumns).map(([column, columnCities]) => (
              <ul className={styles.cityOffices__list} key={column}>
                {Array.isArray(columnCities) && columnCities.length > 0 ? (
                  columnCities.map((city, index) => (
                    <li key={index}>
                      <Link className={styles.cityOffices__name} href='#'>
                        {city.cityName}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>Немає міст</li>
                )}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default CityOfficesComponent
