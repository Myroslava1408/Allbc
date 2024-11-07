import { loadYamlData } from '@/libs/loadYaml'
import {languageTag} from "@/libs/localization/paraglide/runtime";

interface ICategory {
  nameCategory: string
  amount: number
  category: string
}

export const getCategoriesOffersForSale = () => {
  const language = languageTag();
  const categories = (loadYamlData('categories-offers',language) as { categories: ICategory[] }).categories
  return categories.filter((item) => item.category === 'sale')
}

export const getCategoriesOffersForRent = () => {
  const language = languageTag();
  const categories = (loadYamlData('categories-offers',language) as { categories: ICategory[] }).categories
  return categories.filter((item) => item.category === 'rent')
}
