"use client";
import React, { FC, ReactNode } from 'react'
import styles from './office-space.module.scss'

import DistrictOfficesComponent from "@/app/shared/components/district-offices/district-offices.component"
import MetroOfficesComponent from "@/app/shared/components/metro-offices/metro-offices.component"
import CityOfficesComponent from "@/app/shared/components/city-offices/city-offices.component"
import OfficeAreasComponent from "@/app/shared/components/office-areas/office-areas.component"

interface IOfficeSpaceProps {
    settings: ReactNode
    districtsForSale: string
    districtsForRent: string
    stations: string
    cities: string
    areas: string
}

const OfficeSpaceComponent: FC<Readonly<IOfficeSpaceProps>> = ({ settings, districtsForSale, districtsForRent, stations, cities, areas }) => {
    return (
        <section className={`flex flex-col ${styles.OfficeProperty}`}>
            <div className={`flex flex-col gap-12 ${styles.PropertyWrap}`}>
                <DistrictOfficesComponent settings={settings} districts={districtsForSale} title={'Продаж офісу по районаx:'} />
                <MetroOfficesComponent settings={settings} title={'Оренда офісу біля метро:'} stations={stations} />
                <CityOfficesComponent settings={settings} cities={cities} title={'Оренда офісу по містах:'} />
                <DistrictOfficesComponent settings={settings} districts={districtsForRent} title={'Оренда офісу по районаx:'} />
                <OfficeAreasComponent settings={settings} title={'Оренда офісу по площі:'} areas={areas} />
            </div>
        </section>
    )
}
export default OfficeSpaceComponent
