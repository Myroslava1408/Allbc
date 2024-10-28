import { loadYamlData } from '@/libs/loadYaml'

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
  prices: Array<{ [key: string]: number }>
  options: Array<{ [key: string]: string }>
}

export const getOffers = (): IOffer[] => {
  return loadYamlData('offers') as IOffer[]
}
