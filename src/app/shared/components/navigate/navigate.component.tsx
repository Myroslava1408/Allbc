import Link from 'next/link'

import React, { FC } from 'react'

import styles from '@/app/modules/layout/elements/header/header.module.scss'

const NavigateComponent: FC = () => {
  const links = {
    Rent: 'Оренда',
    Sale: 'Продаж',
    newConstructions: 'Новобудови',
    Coworkings: 'Коворкінги',
  }

  return (
    <>
      {Object.entries(links).map(([link, linkName]) => (
        <li key={link}>
          <Link className={styles.header__colorIcon} href='#'>
            {linkName}
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavigateComponent
