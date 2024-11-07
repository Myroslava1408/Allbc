import { imagesMap } from '@/libs/imagesMap'
import { loadYamlData } from '@/libs/loadYaml'
import {languageTag} from "@/libs/localization/paraglide/runtime";

type BackgroundKeys = keyof typeof imagesMap
interface ICategory {
  id: number
  title: string
  title_html: string
  background: BackgroundKeys
  rentalPrice: string
  salePrice: string
}

interface ICategoryEstate {
  category: ICategory
}


export const getCategoriesEstate = (): ICategoryEstate[] => {
  const language = languageTag();
  return loadYamlData('categories-estate', language) as ICategoryEstate[];
}
