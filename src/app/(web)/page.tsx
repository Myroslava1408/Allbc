import { initializeLanguage } from '@inlang/paraglide-next'

import CategoriesComponent from '@/app/modules/layout/elements/categories/categories.component'
import MagazineComponent from '@/app/modules/layout/elements/magazine/magazine.component'
import OfficeSpaceComponent from '@/app/modules/layout/elements/office-space/office-space.component'
import PopularOffersComponent from '@/app/modules/layout/elements/popular-offers/popular-offers.component'
import RecommendedCentersComponent from '@/app/modules/layout/elements/recommended-centers/recommended-centers.component'
import ServicesComponent from '@/app/modules/layout/elements/services/services.component'
import { getAdditionalServices } from '@/repositories/additional-services.repository'
import { getCategoriesEstate } from '@/repositories/categories-estate.repository'
import {
  getCategoriesOffersForRent,
  getCategoriesOffersForSale,
} from '@/repositories/categories-offers.repository'
import {
  getDistrictsForRent,
  getDistrictsForSale,
} from '@/repositories/district-offices.repository'
import { getAreas, getCities, getStations } from '@/repositories/location.repository'
import { getOffers } from '@/repositories/offer.repository'
import { getTypesForRent, getTypesForSale } from '@/repositories/offer-types.repository'
import {
  getCategoriesListWithOffers,
  getOffersForRent,
  getOffersForSale,
} from '@/repositories/offers.repository'
import { getBrokers, getBuilders, getOwners } from '@/repositories/participants.repository'
import { getSettingsMain } from '@/repositories/settings.repository'

const Page: () => Promise<JSX.Element> = async () => {
  await initializeLanguage()

  const settings = getSettingsMain()
  const additionalServices = getAdditionalServices()
  const offerTypesForSale = getTypesForSale()
  const offerTypesForRent = getTypesForRent()
  const offersForSale = getOffersForSale(9)
  const offersForRent = getOffersForRent(9)
  const builders = getBuilders()
  const owners = getOwners()
  const brokers = getBrokers()
  const offers = getOffers()
  const categoryEstate = getCategoriesEstate()
  const categoriesOffersForSale = getCategoriesOffersForSale()
  const categoriesOffersForRent = getCategoriesOffersForRent()
  const districtsForSale = getDistrictsForSale()
  const districtsForRent = getDistrictsForRent()
  const stations = getStations()
  const cities = getCities()
  const areas = getAreas()
  const categoriesListWithOffers = getCategoriesListWithOffers()

  return (
    <>
      <CategoriesComponent
        categoryEstate={categoryEstate}
        categoriesOffersForSale={categoriesOffersForSale}
        categoriesOffersForRent={categoriesOffersForRent}
      />
      <RecommendedCentersComponent offers={{ offers }} />
      <PopularOffersComponent
        offerTypesForRent={offerTypesForRent}
        offerTypesForSale={offerTypesForSale}
        offersForRent={offersForRent}
        offersForSale={offersForSale}
        builders={builders}
        owners={owners}
        brokers={brokers}
        categoriesListWithOffers={categoriesListWithOffers}
      />
      <ServicesComponent additionalServices={additionalServices} />
      <MagazineComponent />
      <OfficeSpaceComponent
        settings={settings}
        districtsForSale={districtsForSale}
        districtsForRent={districtsForRent}
        stations={{ stations }}
        cities={cities}
        areas={areas}
      />
    </>
  )
}

export default Page
