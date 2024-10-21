"use client";
import React, { FC } from 'react'
import Link from "next/link";

interface ICityOffice {
    cityName: string
}

interface ICityOfficesProps {
    cities: ICityOffice[]
    title: string
}

const CityOfficesComponent: FC<Readonly<ICityOfficesProps>> = ({ cities,title }) => {
    const columns = {
        top: {
            firstColumn: cities.cities.slice(0, 5),
            secondColumn: cities.cities.slice(5, 10),
            thirdColumn: cities.cities.slice(10, 15),
            fourthColumn: cities.cities.slice(15, 20),
            fifthColumn: cities.cities.slice(20, 25),
            sixthColumn: cities.cities.slice(25, 30),
        },
        bottom: {
            seventhColumn: cities.cities.slice(30, 35),
            eighthColumn: cities.cities.slice(35, 36),
        },
    };

    return (
        <div className="flex flex-col">
            <h3>{title}</h3>
            <div className="flex flex-col gap-12">
                {Object.entries(columns).map(([group, groupColumns]) => (
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-20" key={group}>
                        {Object.entries(groupColumns).map(([column, cities]) => (
                            <ul className="flex flex-col gap-3" key={column}>
                                {cities.map((city, index) => (
                                    <li key={index}>
                                        <Link href="#">
                                            {city.cityName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CityOfficesComponent
