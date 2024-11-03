'use client'
import Link from 'next/link'

import React, { FC } from 'react'

import styles from './options.module.scss'

interface IOptionBlock {
  option: string
  category: string
}
interface IOptionsProps {
  title: string
  options: IOptionBlock[]
}

const OptionsComponent: FC<Readonly<IOptionsProps>> = ({ title, options }) => {
  return (
    <div className={styles.options}>
      <span className={styles.options__title}>{title}</span>
      <ul className={styles.options__list}>
        {options.map((optionName, index) => (
          <li key={index}>
            <Link className={styles.options__option} href='#'>
              {optionName.option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default OptionsComponent
