import { loadYamlData } from '@/libs/loadYaml'

interface IDistrictOffice {
  districtName: string
  category: string
}

export const getDistrictsForSale = () => {
  const categories = (loadYamlData('district-offices') as { districts: IDistrictOffice[] })
    .districts
  return categories.filter((item) => item.category === 'sale')
}

export const getDistrictsForRent = () => {
  const categories = (loadYamlData('district-offices') as { districts: IDistrictOffice[] })
    .districts
  return categories.filter((item) => item.category === 'rent')
}
