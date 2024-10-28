import { loadYamlData } from '@/libs/loadYaml'

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
  return loadYamlData('areas') as IArea[]
}

export const getCities = (): ICityOffice[] => {
  return loadYamlData('cities') as ICityOffice[]
}

export const getStations = (): IMetroStation[] => {
  return loadYamlData('stations') as IMetroStation[]
}
