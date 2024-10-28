'use client';
import Link from 'next/link';

import React, { FC } from 'react';

interface IMetroStation {
  stationName: string;
}

interface IMetroStationsProps {
  stations: {
    stations: IMetroStation[] | { stations: IMetroStation[] };
  };
}

const MetroStationsComponent: FC<Readonly<IMetroStationsProps>> = ({
  stations,
}) => {
  const stationArray = Array.isArray(stations.stations)
    ? stations.stations
    : Array.isArray(stations.stations.stations)
      ? stations.stations.stations
      : [];

  if (!stationArray.length) {
    return <p>Немає пропозицій</p>;
  }

  const columns = {
    firstColumn: Array.isArray(stationArray) ? stationArray.slice(0, 5) : [],
    secondColumn: Array.isArray(stationArray) ? stationArray.slice(5, 10) : [],
    thirdColumn: Array.isArray(stationArray) ? stationArray.slice(10, 15) : [],
    fourthColumn: Array.isArray(stationArray) ? stationArray.slice(15, 20) : [],
    fifthColumn: Array.isArray(stationArray) ? stationArray.slice(20, 25) : [],
    sixthColumn: Array.isArray(stationArray) ? stationArray.slice(25, 30) : [],
  };

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-20">
      {Object.entries(columns).map(([column, stations]) =>
        Array.isArray(stations) && stations.length > 0 ? (
          <ul className="flex flex-col gap-3" key={column}>
            {stations.map((station, index) => (
              <li key={index}>
                <Link href="#">{station.stationName}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p key={column}>Станції відсутні в колонці {column}</p>
        ),
      )}
    </div>
  );
};
export default MetroStationsComponent;
