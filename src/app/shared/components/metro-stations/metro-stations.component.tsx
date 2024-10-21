"use client";
import React, { FC, ReactNode } from 'react'
import Link from "next/link"

interface IMetroStation {
    stationName: string
}

interface IMetroStationsProps {
    stations: IMetroStation[]
}

const MetroStationsComponent: FC<Readonly<IMetroStationsProps>> = ({ stations }) => {
    const columns = {
        firstColumn: stations.stations.slice(0, 5),
        secondColumn: stations.stations.slice(5, 10),
        thirdColumn: stations.stations.slice(10, 15),
        fourthColumn: stations.stations.slice(15, 20),
        fifthColumn: stations.stations.slice(20, 25),
        sixthColumn: stations.stations.slice(25, 30),
    };

    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-20">
            {Object.entries(columns).map(([column, stations]) => (
                <ul className="flex flex-col gap-3" key={column}>
                    {stations.map((station, index) => (
                        <li key={index}>
                            <Link href="#">
                                {station.stationName}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}
export default MetroStationsComponent
