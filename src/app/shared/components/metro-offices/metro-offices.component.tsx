"use client";
import React, { FC, ReactNode } from 'react'
import MetroStationsComponent from "@/app/shared/components/metro-stations/metro-stations.component";


interface IMetroStation {
    stationName: string
}

interface IMetroOfficesProps {
    settings: ReactNode
    title: string
    stations: {
        stations: IMetroStation[] |  { stations: IMetroStation[] }
    }
}
const MetroOfficesComponent: FC<Readonly<IMetroOfficesProps>> = ({ settings, title, stations }) => {
    return (
        <div className="flex flex-col">
            <h3>{title}</h3>
            <div className="flex flex-col gap-12">
                <MetroStationsComponent  stations={stations} />
                <MetroStationsComponent  stations={stations} />
            </div>
        </div>
    )
}
export default MetroOfficesComponent