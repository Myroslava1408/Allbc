import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import OptionsComponent from '@/app/shared/components/options/options.component'
import SocialsComponent from '@/app/shared/components/socials/socials.component'
import { ImageLogo } from '@/app/shared/images'
import * as m from '@/libs/localization/paraglide/messages'

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
      <div className={styles.footer__footerWrap}>
        <div className={styles.footer__inner}>
          <Link className={styles.footer__logo} href='#'>
            <Image src={ImageLogo} alt='logo' width={97} height={92} />
          </Link>
          <div className={styles.footer__listGrid}>
            <OptionsComponent title={m.about_us()} options={aboutUsOptions} />
            <OptionsComponent title={m.privacy_policy()} options={privacyPolicyOptions} />
            <OptionsComponent title={m.for_owners()} options={forOwnersOptions} />
            <OptionsComponent title={m.business_centers()} options={businessCentersOptions} />
          </div>
          <div className={styles.footer__contacts}>
            <span className={styles.footer__contactsTitle}>{m.contacts()}</span>
            <div className={styles.footer__group}>
              <button className={styles.footer__btnFoot}>
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
                placeholder={m.search()}
                className={styles.footer__inputSearch}
              />
            </div>
            <h5 className={styles.footer__number}>+38 (067) 966 07 24</h5>
            <h6 className={styles.footer__email}>info@allbc.info</h6>
            <SocialsComponent />
          </div>
        </div>
        <p className={styles.copyright}>© 2013-2021 Allbc. All rights reserved</p>
      </div>
    </footer>
  )
}

export default FooterComponent
