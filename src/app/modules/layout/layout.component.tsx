import { FC, ReactNode } from 'react'

import BannerComponent from "./elements/banner/banner.component"
import {
    FooterComponent,
} from '@/app/modules/layout/elements'

import {
    getAboutUsOptions,
    getBusinessCentersOptions,
    getForOwnersOptions,
    getPrivacyPolicyOptions
} from "@/repositories/options.repository"
import {getAreasList, getPricesList} from "@/repositories/offers.repository"
import {getTypesList} from "@/repositories/offer-types.repository"

interface ILayoutProps {
    settings: ReactNode
    children: ReactNode
}
interface IOption {
    id: string | null
    label: string
}

const RootLayoutComponent: FC<Readonly<ILayoutProps>> = ({ settings, children }) => {
    const aboutUsOptions = getAboutUsOptions();
    const privacyPolicyOptions = getPrivacyPolicyOptions();
    const forOwnersOptions = getForOwnersOptions();
    const businessCentersOptions = getBusinessCentersOptions();

    const areasList: IOption[] = getAreasList();
    const pricesList: IOption[] = getPricesList();
    const categoriesList = getTypesList();

    return (
        <div>
            <BannerComponent
                settings={settings}
                areasList={areasList}
                pricesList={pricesList}
                categoriesList={categoriesList}
            />
            <main>{children}</main>
            <FooterComponent
                settings={settings}
                aboutUsOptions={aboutUsOptions}
                privacyPolicyOptions={privacyPolicyOptions}
                forOwnersOptions={forOwnersOptions}
                businessCentersOptions={businessCentersOptions}
            />
        </div>
    )
}

export default RootLayoutComponent
