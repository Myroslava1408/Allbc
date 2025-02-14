import BannerComponent from './elements/banner/banner.component'

import { FC, ReactNode } from 'react'

import { FooterComponent } from '@/app/modules/layout/elements'
import { getOffers } from '@/repositories/offer.repository'
import { getTypesList } from '@/repositories/offer-types.repository'
import { getAreasList, getPricesList, getTitlesList } from '@/repositories/offers.repository'
import {
  getAboutUsOptions,
  getBusinessCentersOptions,
  getForOwnersOptions,
  getPrivacyPolicyOptions,
} from '@/repositories/options.repository'

interface ILayoutProps {
  children: ReactNode
}
interface IOption {
  id: string | null
  label: string
}

const RootLayoutComponent: FC<Readonly<ILayoutProps>> = ({ children }) => {
  const aboutUsOptions = getAboutUsOptions()
  const privacyPolicyOptions = getPrivacyPolicyOptions()
  const forOwnersOptions = getForOwnersOptions()
  const businessCentersOptions = getBusinessCentersOptions()

  const areasList: IOption[] = getAreasList()
  const pricesList: IOption[] = getPricesList()
  const categoriesList = getTypesList()
  const titlesList = getTitlesList()

  return (
    <div>
      <BannerComponent
        areasList={areasList}
        pricesList={pricesList}
        categoriesList={categoriesList}
        titlesList={titlesList}
        offers={getOffers()}
      />
      <main>{children}</main>
      <FooterComponent
        aboutUsOptions={aboutUsOptions}
        privacyPolicyOptions={privacyPolicyOptions}
        forOwnersOptions={forOwnersOptions}
        businessCentersOptions={businessCentersOptions}
      />
    </div>
  )
}

export default RootLayoutComponent
