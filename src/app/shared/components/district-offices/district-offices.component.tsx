'use client'
import Link from 'next/link'

import React, { FC } from 'react'

import { getDistrictColumns } from '@/constants/office-space.constants'

import styles from './district-offices.module.scss'

export interface IDistrictOffice {
  districtName: string
  category: string
}

interface IDistrictOfficesProps {
  districts: IDistrictOffice[]
  title: string
}

const DistrictOfficesComponent: FC<Readonly<IDistrictOfficesProps>> = ({ districts, title }) => {
  const columns = getDistrictColumns(districts)

  return (
    <div className={styles.districtOffices}>
      <h3 className={styles.districtOffices__title}>{title}</h3>
      <div className={styles.districtOffices__inner}>
        {Object.entries(columns).length > 0 ? (
          Object.entries(columns).map(([column, districts]) =>
            Array.isArray(districts) && districts.length > 0 ? (
              <ul className={styles.districtOffices__list} key={column}>
                {districts.map((district, index) => (
                  <li key={index}>
                    <Link className={styles.districtOffices__name} href='#'>
                      {district.districtName}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p key={column}>Немає районів у колонці {column}</p>
            ),
          )
        ) : (
          <p>Немає доступних колонок</p>
        )}
      </div>
    </div>
  )
}
export default DistrictOfficesComponent
