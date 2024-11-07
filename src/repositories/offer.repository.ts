import { loadYamlData } from '@/libs/loadYaml'
import {languageTag} from "@/libs/localization/paraglide/runtime";

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
  const language = languageTag();
  return loadYamlData('offers',language) as IOffer[]
}
