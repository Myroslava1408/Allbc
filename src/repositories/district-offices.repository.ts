import { loadYamlData } from '@/libs/loadYaml'
import { languageTag } from '@/libs/localization/paraglide/runtime'

interface IDistrictOffice {
  districtName: string
  category: string
}

export const getDistrictsForSale = () => {
  const language = languageTag()
  const categories = (
    loadYamlData('district-offices', language) as { districts: IDistrictOffice[] }
  ).districts
  return categories.filter((item) => item.category === 'sale')
}

export const getDistrictsForRent = () => {
  const language = languageTag()
  const categories = (
    loadYamlData('district-offices', language) as { districts: IDistrictOffice[] }
  ).districts
  return categories.filter((item) => item.category === 'rent')
}
