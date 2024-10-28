import { loadYamlData } from '@/libs/loadYaml'

interface ICategory {
  nameCategory: string
  amount: number
  category: string
}

export const getCategoriesOffersForSale = () => {
  const categories = (loadYamlData('categories-offers') as { categories: ICategory[] }).categories
  return categories.filter((item) => item.category === 'sale')
}

export const getCategoriesOffersForRent = () => {
  const categories = (loadYamlData('categories-offers') as { categories: ICategory[] }).categories
  return categories.filter((item) => item.category === 'rent')
}
