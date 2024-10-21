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
import {getTypesList} from "@/repositories/offer-types.repository";

interface ILayoutProps {
    settings: ReactNode
    children: ReactNode
}

const RootLayoutComponent: FC<Readonly<ILayoutProps>> = ({ settings, children }) => {
    const aboutUsOptions = getAboutUsOptions();
    const privacyPolicyOptions = getPrivacyPolicyOptions();
    const forOwnersOptions = getForOwnersOptions();
    const businessCentersOptions = getBusinessCentersOptions();

    const areasList = getAreasList();
    const pricesList = getPricesList();
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
