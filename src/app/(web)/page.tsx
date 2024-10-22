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
import  {getSettingsMain} from "@/repositories/settings.repository";


interface IPrice {
    amount: number
    price: number
}
interface IOption {
    title: string
    name: string
}
interface IOffer {
    type: number
    id: number
    title: string
    description: string
    total_offices: number
    address: string
    street: string
    metro_location: string
    metro_time: string
    prices: IPrice[]
    options: IOption[]
    category_id?: number
}

const Page: () => Promise<JSX.Element> = async () => {
    const settings = getSettingsMain();
    const additionalServices = getAdditionalServices();
    const offerTypesForSale = getTypesForSale();
    const offerTypesForRent = getTypesForRent();
    const offersForSaleRaw = getOffersForSale(9);
    const offersForRentRaw =  getOffersForRent(9);
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

    const categoriesListWithOffersRaw = getCategoriesListWithOffers();

    const mapOfferData = (offer: Record<string, unknown>): IOffer => ({
        id: offer.id as number,
        title: offer.title as string,
        description: offer.description as string,
        category_id: offer.category_id as number,
        prices: offer.prices as IPrice[],
        options: offer.options as IOption[],


        type: offer.type as number,
        total_offices: offer.total_offices as number,
        address: offer.address as string,
        street: offer.street as string,
        metro_location: offer.metro_location as string,
        metro_time: offer.metro_time as string,
    });

    const categoriesListWithOffers: IOffer[] = categoriesListWithOffersRaw.map(mapOfferData);
    const offersForSale: IOffer[] = offersForSaleRaw.map(mapOfferData);
    const offersForRent: IOffer[] = offersForRentRaw.map(mapOfferData);

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
