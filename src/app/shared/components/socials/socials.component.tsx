import Image from 'next/image'

import React, { FC } from 'react'

import { icons } from '@/constants/socials.constants'

import styles from './socials.module.scss'

const SocialsComponent: FC = () => {
  return (
    <div className={styles.socials}>
      {icons && typeof icons === 'object' && Object.keys(icons).length > 0 ? (
        Object.entries(icons).map(([icon, iconSrc]) => (
          <button key={icon}>
            <Image src={iconSrc.src} alt='icon' width={32} height={32} />
          </button>
        ))
      ) : (
        <p>Немає доступних іконок</p>
      )}
    </div>
  )
}

export default SocialsComponent
