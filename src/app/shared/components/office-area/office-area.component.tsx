'use client'
import Link from 'next/link'

import React, { FC } from 'react'

import { getAreasArray } from '@/constants/office-space.constants'

import styles from './office-area.module.scss'

interface IArea {
  area: string
}

interface IOfficeAreaProps {
  areas: IArea[] | { areas: IArea[] } | null
}

const OfficeAreaComponent: FC<Readonly<IOfficeAreaProps>> = ({ areas }) => {
  const areasArray = getAreasArray(areas)

  if (!areasArray.length) {
    return <p>Немає міст</p>
  }
  return (
    <ul className={styles.listArea}>
      {Array.isArray(areasArray) && areasArray.length > 0 ? (
        areasArray.map((areaItem, index) => (
          <li key={index}>
            <Link className={styles.listArea__name} href='#'>
              {areaItem.area}
            </Link>
          </li>
        ))
      ) : (
        <p>Немає доступних зон</p>
      )}
    </ul>
  )
}
export default OfficeAreaComponent
