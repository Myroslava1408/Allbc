import { imagesMap } from '@/libs/imagesMap'
import { loadYamlData } from '@/libs/loadYaml'
import {languageTag} from "@/libs/localization/paraglide/runtime";

type BackgroundKeys = keyof typeof imagesMap
interface IBlock {
  type: number
  title: string
  background: BackgroundKeys
}
interface IService extends IBlock {
  type: number
}
interface IAdditionalService {
  service: IService
}

export const getAdditionalServices = (): IAdditionalService[] => {
  const language = languageTag();
  return loadYamlData('additional-services', language) as IAdditionalService[];
}
