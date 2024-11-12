'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Autocomplete, IconButton } from '@mui/material'

import classNames from 'classnames'

import React, { FC, useEffect, useRef, useState } from 'react'

import BurgerComponent from '@/app/shared/components/burger/burger.component'
import { LangSelectComponent } from '@/app/shared/components/lang-select'
import NavigateComponent from '@/app/shared/components/navigate/navigate.component'
import { AddOffice, ArrDown, Like, Push, Search } from '@/app/shared/icons'
import { ImageLogo } from '@/app/shared/images'
import { CustomTextField } from '@/constants/banner.constants'
import * as m from '@/libs/localization/paraglide/messages'

import styles from './header.module.scss'

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

interface IHeaderProps {
  offers: Offer[]
  onSearch: (filteredOffers: Offer[]) => void
  titlesList: IOption[]
}

const HeaderComponent: FC<IHeaderProps> = ({ offers = [], onSearch, titlesList }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [isFormVisible, setIsFormVisible] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const searchButtonRef = useRef<HTMLButtonElement>(null)

  const onSubmitHand = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault()
    }

    const filteredOffers = Array.isArray(offers)
      ? offers.filter((offer) => offer.title.toLowerCase().includes(searchInput.toLowerCase()))
      : []
    onSearch(filteredOffers)

    const queryString = `title=${encodeURIComponent(searchInput)}`
    return router.push(`/search?${queryString}`)
  }

  const handleWishlistClick = () => {
    router.push('/wishlist')
  }

  const handleInputChange = (event: React.SyntheticEvent, value: string | null) => {
    setSearchInput(value || '')
  }

  const handleIconButtonClick = () => {
    if (isFormVisible) {
      onSubmitHand()
    } else {
      setIsFormVisible(true)
    }
  }

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev)
  }
  const handleLogoClick = () => {
    if (pathname === '/') {
      window.location.reload()
    } else {
      window.location.href = '/'
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside =
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target as Node)

      if (isOutside) {
        setIsFormVisible(false)
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.header__headerWrap}>
        <div className={styles.header__inner}>
          <div className={styles.header__rowHeader}>
            <BurgerComponent onToggle={toggleSidebar} />
            <div className={styles.header__row}>
              <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <Image className='logo' src={ImageLogo} alt='logo' width={92} height={31} />
              </div>
              <div className={styles.header__line}></div>
            </div>
          </div>
          <div className={styles.header__cities}>
            <ul>
              <li>
                <p className={styles.header__citiesName}>{m.city()}</p>
              </li>
            </ul>
            <button>
              <ArrDown alt='svg' width={10} height={6} className={styles.header__colorIcon} />
            </button>
          </div>
        </div>
        <nav className={styles.header__navigate}>
          <ul className={styles.header__navigateList}>
            <NavigateComponent />
          </ul>
        </nav>
        <div
          className={`${styles.sidebar} ${sidebarVisible ? 'open' : ''}`}
          style={{ right: sidebarVisible ? '0px' : '-250px' }}
        >
          <nav className={styles.header__navigateSidebar}>
            <ul className={styles.header__listSidebar}>
              <NavigateComponent />
            </ul>
          </nav>
          <div className={styles.header__rowIcons}>
            <button className={styles.header__wishlist} onClick={handleWishlistClick}>
              <Like
                alt='icon'
                width={20}
                height={19}
                className={classNames(styles.header__wishlist, styles.header__colorIcon)}
              />
            </button>
            <button className={styles.header__notifications}>
              <Push alt='icon' width={20} height={21} className={styles.header__colorIcon} />
            </button>
            <div className={styles.header__sidebarRow}>
              <LangSelectComponent />
            </div>
          </div>
          <div className={styles.header__citiesSidebar}>
            <ul>
              <li>
                <p className={styles.header__citiesName}>{m.city()}</p>
              </li>
            </ul>
            <button>
              <ArrDown alt='icon' width={10} height={6} className={styles.header__colorIcon} />
            </button>
          </div>
          <button className={styles.header__add}>
            <AddOffice alt='icon' width={14} height={14} className={styles.header__colorIcon} />
            Додати офіс
          </button>
          <button className={styles.header__loginSidebar}>Вхід</button>
        </div>
        <div className={styles.header__rowSearch}>
          {isFormVisible && (
            <form onSubmit={onSubmitHand} className={styles.header__searchInput} ref={formRef}>
              <Autocomplete
                disablePortal
                disableCloseOnSelect
                disableClearable
                options={titlesList}
                inputValue={searchInput}
                onInputChange={handleInputChange}
                className={styles.customAutocomplete}
                sx={{
                  width: 160,
                  '& .MuiOutlinedInput-root': {
                    width: 260,
                    background: 'white',
                    height: '42px',
                    '& fieldset': {
                      border: 'black',
                    },
                  },
                  '& .MuiSvgIcon-root': {
                    display: 'none',
                  },
                }}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    label={m.search_by_name()}
                    InputLabelProps={{
                      shrink: true,
                      style: { top: '20px', left: '0px' },
                    }}
                  />
                )}
              />
            </form>
          )}
          <div className={styles.header__rowIconsSidebar}>
            <IconButton
              type='button'
              style={{ cursor: 'pointer' }}
              onClick={handleIconButtonClick}
              ref={searchButtonRef}
              className={isFormVisible ? styles.header__searchBtn : ''}
            >
              <Search alt='icon' width={24} height={24} className={styles.header__colorIcon} />
            </IconButton>
          </div>
          <button className={styles.header__notificationsLaptop}>
            <Push alt='icon' width={20} height={21} className={styles.header__colorIcon} />
          </button>
          <button className={styles.header__wishlistLaptop}>
            <Like
              alt='icon'
              width={20}
              height={19}
              className={styles.header__colorIcon}
              onClick={handleWishlistClick}
            />
          </button>
          <div className={styles.header__citiesLaptop}>
            <LangSelectComponent />
          </div>
        </div>
      </div>
      <div className={styles.header__laptopRow}>
        <div className={styles.header__btnsRow}>
          <button className={styles.header__addLaptop}>
            <AddOffice alt='icon' width={14} height={14} className={styles.header__colorIcon} />
            {m.add()}
          </button>
          <button className={styles.header__login}>{m.login()}</button>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
