import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import OptionsComponent from '@/app/shared/components/options/options.component'
import SocialsComponent from '@/app/shared/components/socials/socials.component'
import { ImageLogo } from '@/app/shared/images'

import styles from './footer.module.scss'

interface IOptionBlock {
  option: string
  category: string
}

interface IFooterProps {
  aboutUsOptions: IOptionBlock[]
  privacyPolicyOptions: IOptionBlock[]
  forOwnersOptions: IOptionBlock[]
  businessCentersOptions: IOptionBlock[]
}

const FooterComponent: FC<Readonly<IFooterProps>> = ({
  aboutUsOptions,
  businessCentersOptions,
  privacyPolicyOptions,
  forOwnersOptions,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerWrap} flex flex-col justify-between`}>
        <div className='flex justify-between md:flex-row flex-col'>
          <Link href='#'>
            <Image src={ImageLogo} alt='logo' className='logo' width={97} height={92} />
          </Link>
          <div className={`${styles.listGrid} flex justify-between`}>
            <OptionsComponent title={'About us'} options={aboutUsOptions} />
            <OptionsComponent title={'Політика конфіденційності'} options={privacyPolicyOptions} />
            <OptionsComponent title={'For owners'} options={forOwnersOptions} />
            <OptionsComponent title={'Business Centers'} options={businessCentersOptions} />
          </div>
          <div className={`${styles.contacts} flex flex-col`}>
            <span className='text-white'>Contacts</span>
            <div className='flex pt-5 pl-7'>
              <button className={`${styles.btnFoot} w-5 h-5`}>
                <svg
                  className='relative z-10 left-2'
                  width='21'
                  height='21'
                  viewBox='0 0 21 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z'
                    fill='#2A3842'
                  />
                </svg>
              </button>
              <input
                type='text'
                name='text'
                placeholder='Пошук по сайту...'
                className={`${styles.inputSearch} absolute z-0`}
              />
            </div>
            <h5 className='text-white'>+38 (067) 966 07 24</h5>
            <h6>info@allbc.info</h6>
            <SocialsComponent />
          </div>
        </div>
        <p className={styles.copyright}>© 2013-2021 Allbc. All rights reserved</p>
      </div>
    </footer>
  )
}

export default FooterComponent
