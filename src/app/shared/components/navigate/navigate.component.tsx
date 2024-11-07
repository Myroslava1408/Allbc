import Link from 'next/link'

import React, { FC } from 'react'

import styles from '@/app/modules/layout/elements/header/header.module.scss'
import * as m from '@/libs/localization/paraglide/messages'

const NavigateComponent: FC = () => {
  const links = {
    Rent: m.rent(),
    Sale: m.sale(),
    newConstructions: m.new_constructions(),
    Coworkings: m.coworkings(),
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
