'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Autocomplete } from '@mui/material'

import { FC, FormEvent, useEffect, useState } from 'react'

import HeaderComponent from '@/app/modules/layout/elements/header/header.component'
import StatisticsBlockComponent from '@/app/shared/components/statistics-block/statistics-block.component'
import { Banner, Emblem } from '@/app/shared/images'
import { CustomTextField, DefaultOption, QueryStringTemplate } from '@/constants/banner.constants'

import styles from './banner.module.scss'

interface IOption {
  id: string | null
  label: string
}
interface Offer {
  type: number
  id: number
  title: string
  description: string
  total_offices: number
  address: string
  street: string
  metro_location: string
  metro_time: string
  prices: Array<{ [key: string]: number }>
  options: Array<{ [key: string]: string }>
}

interface IBannerProps {
  areasList: IOption[]
  pricesList: IOption[]
  categoriesList: IOption[]
  titlesList: IOption[]
  offers: Offer[]
}

const BannerComponent: FC<Readonly<IBannerProps>> = ({
  areasList,
  pricesList,
  categoriesList,
  offers,
  titlesList,
}) => {
  const router = useRouter()

  const [filteredOffers, setFilteredOffers] = useState<Offer[]>(offers)

  const [selectedCategory, setSelectedCategory] = useState<IOption | null>(DefaultOption)
  const [selectedArea, setSelectedArea] = useState<IOption | null>(DefaultOption)
  const [selectedPrice, setSelectedPrice] = useState<IOption | null>(DefaultOption)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const queryString = QueryStringTemplate.replace('{categoryId}', selectedCategory?.id || '')
      .replace('{area}', selectedArea?.id || '')
      .replace('{price}', selectedPrice?.id || '')

    return router.push(`/search?${queryString}`)
  }
  const handleSearch = (newFilteredOffers: Offer[]) => {
    setFilteredOffers(newFilteredOffers)
  }
  useEffect(() => {}, [filteredOffers])

  useEffect(() => {
    setFilteredOffers(offers)
  }, [offers])
  return (
    <section className={styles.banner} style={{ background: `url(${Banner.src})` }}>
      <HeaderComponent offers={offers} onSearch={handleSearch} titlesList={titlesList} />

      <div className={styles.banner__inner}>
        <h1 className={styles.banner__title}>
          Лише <span>актуальні</span>
          <br />
          офіси в твоєму місті
        </h1>
        <form onSubmit={onSubmit} className={styles.banner__containSearch}>
          <div className={styles.banner__whiteWrap}>
            <div className={styles.banner__listFiltr}>
              <Autocomplete
                disablePortal
                options={categoriesList}
                sx={{
                  width: 165,
                  '& .MuiOutlinedInput-root': {
                    width: 160,
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                }}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    label='Категорія'
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
                )}
                className='banner__label'
                onChange={(event, value) => setSelectedCategory(value)}
              />
              <div className={styles.banner__line}></div>
              <Autocomplete
                disablePortal
                options={areasList}
                sx={{
                  width: 165,
                  '& .MuiOutlinedInput-root': {
                    width: 160,
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                }}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    label='Площа'
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
                )}
                className='banner__label'
                onChange={(event, value) => setSelectedArea(value)}
              />
              <div className={styles.banner__line}></div>
              <Autocomplete
                disablePortal
                options={pricesList}
                sx={{
                  width: 100,
                  '& .MuiOutlinedInput-root': {
                    width: 160,
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                }}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    label='Ціна'
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
                )}
                className='banner__label'
                onChange={(event, value) => setSelectedPrice(value)}
              />
            </div>
          </div>
          <button className={styles.banner__btnSearch} type='submit'>
            Шукати
          </button>
        </form>
        <div className={styles.banner__rowParts}>
          <StatisticsBlockComponent title='Вільних' count={75040} subtitle='офісів' color='green' />
          <StatisticsBlockComponent
            title='Бізнес центрів'
            count={2508}
            subtitle='у Києві'
            color='blue'
          />
        </div>
        <div className={styles.banner__darkBlock}>
          <Image src={Emblem} alt='icon' width={106} height={84} />
          <div className={styles.banner__wrap}>
            <h5 className={styles.banner__subtitle}>Люблінський парк</h5>
            <h6 className={styles.banner__description}>15 хв пішки до м “Братиславська”</h6>
          </div>
          <button className={styles.banner__darkBtn}>Дізнатися ціни</button>
        </div>
      </div>
    </section>
  )
}

export default BannerComponent
