import { FC } from 'react'

import styles from './statistics-block.module.scss'

interface StatisticsBlockProps {
  title: string
  count: number
  subtitle: string
  color: 'green' | 'blue'
}

const StatisticsBlockComponent: FC<StatisticsBlockProps> = ({ title, count, subtitle, color }) => {
  return (
    <div className={`${styles[color + 'Part']} flex`}>
      <div className={styles[color + 'Box']}></div>
      <h2 className={styles[color + 'H2']}>{count}</h2>
      <div className='flex flex-col'>
        <h4>{title}</h4>
        <h4>{subtitle}</h4>
      </div>
    </div>
  )
}

export default StatisticsBlockComponent
