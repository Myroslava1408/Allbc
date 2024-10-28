'use client'

import { FC } from 'react'

import { AdditionalService } from '@/app/shared/components/additional-service'
import { imagesMap } from '@/libs/imagesMap'

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
    <section className={`${styles.sectionFifth}  flex flex-col`}>
      <h3 className='flex items-start font-bold'>Додаткові послуги</h3>
      <div className={` ${styles.itemsGrid} gap-6`}>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:p-0 p-2 gap-7 justify-center'>
          {Array.isArray(type1Services) && type1Services.length > 0 ? (
            type1Services.map((block, blockItem) => {
              const className =
                blockItem === type1Services.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              return (
                <AdditionalService block={block.service} key={blockItem} className={className} />
              )
            })
          ) : (
            <p>Немає доступних послуг</p>
          )}
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 lg:p-0 p-2 justify-center'>
          {Array.isArray(type2Services) && type2Services.length > 0 ? (
            type2Services.map((block, index) => (
              <AdditionalService block={block.service} key={index} />
            ))
          ) : (
            <p>Немає доступних послуг</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServicesComponent
