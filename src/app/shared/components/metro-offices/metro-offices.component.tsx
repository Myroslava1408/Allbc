'use client'
import React, { FC } from 'react'

import MetroStationsComponent from '@/app/shared/components/metro-stations/metro-stations.component'

import styles from './metro-offices.module.scss'

interface IMetroStation {
  stationName: string
}

interface IMetroOfficesProps {
  title: string
  stations: {
    stations: IMetroStation[] | { stations: IMetroStation[] }
  }
}
const MetroOfficesComponent: FC<Readonly<IMetroOfficesProps>> = ({ title, stations }) => {
  return (
    <div className={styles.metroOffices}>
      <h3 className={styles.metroOffices__title}>{title}</h3>
      <div className={styles.metroOffices__inner}>
        <MetroStationsComponent stations={stations} />
        <MetroStationsComponent stations={stations} />
      </div>
    </div>
  )
}
export default MetroOfficesComponent
