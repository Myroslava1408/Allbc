'use client'
import Link from 'next/link'

import React, { FC } from 'react'

interface ICityOffice {
  cityName: string
}

interface ICityOfficesProps {
  cities: ICityOffice[] | { cities: ICityOffice[] } | null
  title: string
}

const CityOfficesComponent: FC<Readonly<ICityOfficesProps>> = ({ cities, title }) => {
  const citiesArray = Array.isArray(cities)
    ? cities
    : cities && Array.isArray(cities.cities)
      ? cities.cities
      : []

  if (!citiesArray.length) {
    return <p>Немає міст</p>
  }

  const columns = {
    top: {
      firstColumn: citiesArray.slice(0, 5),
      secondColumn: citiesArray.slice(5, 10),
      thirdColumn: citiesArray.slice(10, 15),
      fourthColumn: citiesArray.slice(15, 20),
      fifthColumn: citiesArray.slice(20, 25),
      sixthColumn: citiesArray.slice(25, 30),
    },
    bottom: {
      seventhColumn: citiesArray.slice(30, 35),
      eighthColumn: citiesArray.slice(35, 36),
    },
  }

  return (
    <div className='flex flex-col'>
      <h3>{title}</h3>
      <div className='flex flex-col gap-12'>
        {Object.entries(columns).map(([group, groupColumns]) => (
          <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-20' key={group}>
            {Object.entries(groupColumns).map(([column, columnCities]) => (
              <ul className='flex flex-col gap-3' key={column}>
                {Array.isArray(columnCities) && columnCities.length > 0 ? (
                  columnCities.map((city, index) => (
                    <li key={index}>
                      <Link href='#'>{city.cityName}</Link>
                    </li>
                  ))
                ) : (
                  <li>Немає міст</li>
                )}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default CityOfficesComponent
