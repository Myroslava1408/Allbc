import { imagesMap } from '@/libs/imagesMap'
import { loadYamlData } from '@/libs/loadYaml'

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
  return loadYamlData('additional-services') as IAdditionalService[]
}
