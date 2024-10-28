import Link from 'next/link';

import React, { FC } from 'react';

const NavigateComponent: FC = () => {
  const links = {
    Rent: 'Оренда',
    Sale: 'Продаж',
    newConstructions: 'Новобудови',
    Coworkings: 'Коворкінги',
  };

  return (
    <>
      {Object.entries(links).map(([link, linkName]) => (
        <li key={link}>
          <Link className="text-white" href="#">
            {linkName}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavigateComponent;
