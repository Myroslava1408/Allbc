import { loadYamlData } from '@/libs/loadYaml'
import { languageTag } from '@/libs/localization/paraglide/runtime'

interface ICategory {
  id: number
  title: string
  category: string
}

interface IOption {
  id: string | null
  label: string
}

interface IOfferType {
  id: string
  title: string
  category: string
}

interface IOfferTypesData {
  types: IOfferType[]
}

export const getTypesForSale = () => {
  const language = languageTag()
  const types = (loadYamlData('offer-types', language) as { types: ICategory[] }).types
  return types.filter((item) => item.category === 'sale')
}

export const getTypesForRent = () => {
  const language = languageTag()
  const types = (loadYamlData('offer-types', language) as { types: ICategory[] }).types
  return types.filter((item) => item.category === 'rent')
}

export const getTypesList = (): IOption[] => {
  const language = languageTag()
  const typesData = loadYamlData('offer-types', language) as IOfferTypesData

  return typesData.types.map((type: IOfferType) => ({
    id: type.id,
    label: type.title,
  }))
}
