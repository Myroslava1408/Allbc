"use client";
import React, { FC, ReactNode } from 'react'
import MetroStationsComponent from "@/app/shared/components/metro-stations/metro-stations.component";


interface IMetroOfficesProps {
    settings: ReactNode
    title: string
    stations: string
}
const MetroOfficesComponent: FC<Readonly<IMetroOfficesProps>> = ({ settings, title, stations }) => {
    return (
        <div className="flex flex-col">
            <h3>{title}</h3>
            <div className="flex flex-col gap-12">
                <MetroStationsComponent settings={settings} stations={stations} />
                <MetroStationsComponent settings={settings} stations={stations} />
            </div>
        </div>
    )
}
export default MetroOfficesComponent