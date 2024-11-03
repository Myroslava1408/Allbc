'use client'
import React, { FC, ReactNode } from 'react'

import CityOfficesComponent from '@/app/shared/components/city-offices/city-offices.component'
import DistrictOfficesComponent from '@/app/shared/components/district-offices/district-offices.component'
import MetroOfficesComponent from '@/app/shared/components/metro-offices/metro-offices.component'
import OfficeAreasComponent from '@/app/shared/components/office-areas/office-areas.component'

import styles from './office-space.module.scss'

interface IDistrictOffice {
  districtName: string
  category: string
}
interface IArea {
  area: string
}

interface ICityOffice {
  cityName: string
}

interface IMetroStation {
  stationName: string
}

interface IOfficeSpaceProps {
  settings: ReactNode
  districtsForSale: IDistrictOffice[]
  districtsForRent: IDistrictOffice[]
  stations: {
    stations: IMetroStation[] | { stations: IMetroStation[] }
  }
  cities: ICityOffice[] | { cities: ICityOffice[] } | null
  areas: IArea[] | { areas: IArea[] } | null
}

const OfficeSpaceComponent: FC<Readonly<IOfficeSpaceProps>> = ({
  districtsForSale,
  districtsForRent,
  stations,
  cities,
  areas,
}) => {
  return (
    <section className={styles.officeSpace}>
      <div className={styles.officeSpace__wrap}>
        <DistrictOfficesComponent districts={districtsForSale} title={'Продаж офісу по районаx:'} />
        <MetroOfficesComponent title={'Оренда офісу біля метро:'} stations={stations} />
        <CityOfficesComponent cities={cities} title={'Оренда офісу по містах:'} />
        <DistrictOfficesComponent districts={districtsForRent} title={'Оренда офісу по районаx:'} />
        <OfficeAreasComponent title={'Оренда офісу по площі:'} areas={areas} />
      </div>
    </section>
  )
}
export default OfficeSpaceComponent
