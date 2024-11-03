'use client'
import Link from 'next/link'

import React, { FC } from 'react'

import { getStationArray, getStationColumns } from '@/constants/office-space.constants'

import styles from './metro-stations.module.scss'

interface IMetroStation {
  stationName: string
}

interface IMetroStationsProps {
  stations: {
    stations: IMetroStation[] | { stations: IMetroStation[] }
  }
}

const MetroStationsComponent: FC<Readonly<IMetroStationsProps>> = ({ stations }) => {
  const stationArray = getStationArray(stations)

  if (!stationArray.length) {
    return <p>Немає пропозицій</p>
  }

  const columns = getStationColumns(stationArray)

  return (
    <div className={styles.metroStations}>
      {Object.entries(columns).map(([column, stations]) =>
        Array.isArray(stations) && stations.length > 0 ? (
          <ul className={styles.metroStations__inner} key={column}>
            {stations.map((station, index) => (
              <li key={index}>
                <Link className={styles.metroStations__name} href='#'>
                  {station.stationName}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p key={column}>Станції відсутні в колонці {column}</p>
        ),
      )}
    </div>
  )
}
export default MetroStationsComponent
