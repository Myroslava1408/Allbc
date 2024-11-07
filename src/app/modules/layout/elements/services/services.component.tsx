'use client'

import { FC } from 'react'

import { AdditionalService } from '@/app/shared/components/additional-service'
import { imagesMap } from '@/libs/imagesMap'
import * as m from '@/libs/localization/paraglide/messages'

import styles from './services.module.scss'

type BackgroundKeys = keyof typeof imagesMap

interface IBlock {
  type: number
  title: string
  background: BackgroundKeys
}
interface IService extends IBlock {
  type: number
}
interface IAdditionalService {
  service: IService
}
interface IServicesProps {
  additionalServices: IAdditionalService[]
}

const ServicesComponent: FC<Readonly<IServicesProps>> = ({ additionalServices }) => {
  const type1Services = additionalServices.filter((item) => item.service.type === 1)
  const type2Services = additionalServices.filter((item) => item.service.type === 2)

  return (
    <section className={styles.services}>
      <h3 className={styles.services__title}>{m.additional_services()}</h3>
      <div className={styles.services__itemsGrid}>
        <div className={styles.services__servicesTable}>
          {Array.isArray(type1Services) && type1Services.length > 0 ? (
            type1Services.map((block, blockItem) => {
              const className =
                blockItem === type1Services.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              return (
                <AdditionalService block={block.service} key={blockItem} className={className} />
              )
            })
          ) : (
            <p>{m.no_services()}</p>
          )}
        </div>
        <div className={styles.services__rowBottom}>
          {Array.isArray(type2Services) && type2Services.length > 0 ? (
            type2Services.map((block, index) => (
              <AdditionalService block={block.service} key={index} />
            ))
          ) : (
            <p>{m.no_services()}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServicesComponent
