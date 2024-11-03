'use client'
import React, { FC } from 'react'

import OfficeAreaComponent from '@/app/shared/components/office-area/office-area.component'
import styles from '@/app/shared/components/office-areas/office-areas.module.scss'

interface IArea {
  area: string
}

interface IOfficeAreasProps {
  title: string
  areas: IArea[] | { areas: IArea[] } | null
}

const OfficeAreasComponent: FC<Readonly<IOfficeAreasProps>> = ({ title, areas }) => {
  return (
    <div className={styles.officeAreas}>
      <h3 className={styles.officeAreas__title}>{title}</h3>
      <div className={styles.officeAreas__inner}>
        <div className={styles.officeAreas__group}>
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
        </div>
      </div>
    </div>
  )
}
export default OfficeAreasComponent
