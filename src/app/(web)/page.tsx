import CategoriesComponent from "@/app/modules/layout/elements/categories/categories.component"
import RecommendedCentersComponent from "@/app/modules/layout/elements/recommended-centers/recommended-centers.component"
import PopularOffersComponent  from "@/app/modules/layout/elements/popular-offers/popular-offers.component"
import ServicesComponent from "@/app/modules/layout/elements/services/services.component"
import MagazineComponent from "@/app/modules/layout/elements/magazine/magazine.component"
import OfficeSpaceComponent from "@/app/modules/layout/elements/office-space/office-space.component"



import {getAdditionalServices} from "@/repositories/additional-services.repository"
import {getTypesForSale, getTypesForRent} from "@/repositories/offer-types.repository"
import {getCategoriesListWithOffers, getOffersForSale} from "@/repositories/offers.repository"
import {getOffersForRent} from "@/repositories/offers.repository"
import {getBuilders} from "@/repositories/participants.repository"
import {getOwners} from "@/repositories/participants.repository"
import {getBrokers} from "@/repositories/participants.repository"
import {getOffers} from "@/repositories/offer.repository"
import {getCategoriesEstate} from "@/repositories/categories-estate.repository"
import {getCategoriesOffersForRent, getCategoriesOffersForSale} from "@/repositories/categories-offers.repository"
import {getDistrictsForRent, getDistrictsForSale} from "@/repositories/district-offices.repository"
import {getStations} from "@/repositories/location.repository"
import {getCities} from "@/repositories/location.repository"
import {getAreas} from "@/repositories/location.repository"

const Page: () => Promise<JSX.Element> = async () => {
    const settings = {};
    const additionalServices = getAdditionalServices();
    const offerTypesForSale = getTypesForSale();
    const offerTypesForRent = getTypesForRent();
    const offersForSale = getOffersForSale(9);
    const offersForRent = getOffersForRent(9);
    const builders = getBuilders();
    const owners = getOwners();
    const brokers = getBrokers();
    const offers = getOffers();
    const categoryEstate = getCategoriesEstate();
    const categoriesOffersForSale = getCategoriesOffersForSale();
    const categoriesOffersForRent = getCategoriesOffersForRent();
    const districtsForSale = getDistrictsForSale();
    const districtsForRent = getDistrictsForRent();
    const stations = getStations();
    const cities = getCities();
    const areas = getAreas();
    const categoriesListWithOffers = getCategoriesListWithOffers();

    return (
       <>
           <CategoriesComponent
               settings={settings}
               categoryEstate={categoryEstate}
               categoriesOffersForSale={categoriesOffersForSale}
               categoriesOffersForRent={categoriesOffersForRent}
           />
           <RecommendedCentersComponent settings={settings} offers={offers} />
           <PopularOffersComponent
               settings={settings}
               offerTypesForRent={offerTypesForRent}
               offerTypesForSale={offerTypesForSale}
               offersForRent={offersForRent}
               offersForSale={offersForSale}
               builders={builders}
               owners={owners}
               brokers={brokers}
               categoriesListWithOffers={categoriesListWithOffers}

           />
           <ServicesComponent settings={settings} additionalServices={additionalServices} />
           <MagazineComponent settings={settings} />
           <OfficeSpaceComponent
               settings={settings}
               districtsForSale={districtsForSale}
               districtsForRent={districtsForRent}
               stations={stations}
               cities={cities}
               areas={areas}
           />
       </>
   )
}

export default Page
