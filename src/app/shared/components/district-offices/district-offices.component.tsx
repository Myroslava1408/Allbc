'use client';
import Link from 'next/link';

import React, { FC } from 'react';

interface IDistrictOffice {
  districtName: string;
  category: string;
}

interface IDistrictOfficesProps {
  districts: IDistrictOffice[];
  title: string;
}

const DistrictOfficesComponent: FC<Readonly<IDistrictOfficesProps>> = ({
  districts,
  title,
}) => {
  const columns = {
    firstColumn: Array.isArray(districts) ? districts.slice(0, 5) : [],
    secondColumn: Array.isArray(districts) ? districts.slice(5, 8) : [],
    thirdColumn: Array.isArray(districts) ? districts.slice(8, 13) : [],
  };

  return (
    <div className="flex flex-col">
      <h3>{title}</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {Object.entries(columns).length > 0 ? (
          Object.entries(columns).map(([column, districts]) =>
            Array.isArray(districts) && districts.length > 0 ? (
              <ul className="flex flex-col gap-3" key={column}>
                {districts.map((district, index) => (
                  <li key={index}>
                    <Link href="#">{district.districtName}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p key={column}>Немає районів у колонці {column}</p>
            ),
          )
        ) : (
          <p>Немає доступних колонок</p>
        )}
      </div>
    </div>
  );
};
export default DistrictOfficesComponent;
