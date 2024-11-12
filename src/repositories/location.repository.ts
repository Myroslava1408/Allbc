import { loadYamlData } from '@/libs/loadYaml'
import { languageTag } from '@/libs/localization/paraglide/runtime'

interface IArea {
  area: string
}

interface ICityOffice {
  cityName: string
}

interface IMetroStation {
  stationName: string
}

export const getAreas = (): IArea[] => {
  const language = languageTag()
  return loadYamlData('areas', language) as IArea[]
}

export const getCities = (): ICityOffice[] => {
  const language = languageTag()
  return loadYamlData('cities', language) as ICityOffice[]
}

export const getStations = (): IMetroStation[] => {
  const language = languageTag()
  return loadYamlData('stations', language) as IMetroStation[]
}
