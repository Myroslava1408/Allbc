import { loadYamlData } from '@/libs/loadYaml'
import { languageTag } from '@/libs/localization/paraglide/runtime'

interface IOptionBlock {
  option: string
  category: string
}

interface IOptionsData {
  options: {
    aboutUs: IOptionBlock[]
    privacyPolicy: IOptionBlock[]
    forOwners: IOptionBlock[]
    businessCenters: IOptionBlock[]
  }
}

export const getAboutUsOptions = () => {
  const language = languageTag()
  const data = loadYamlData('options', language) as IOptionsData
  const aboutUs = data?.options?.aboutUs || []
  return aboutUs.filter((item) => item.category === 'aboutUs')
}

export const getPrivacyPolicyOptions = () => {
  const language = languageTag()
  const data = loadYamlData('options', language) as IOptionsData
  const privacy = data?.options?.privacyPolicy || []
  return privacy.filter((item) => item.category === 'privacy')
}

export const getForOwnersOptions = () => {
  const language = languageTag()
  const data = loadYamlData('options', language) as IOptionsData
  const forOwners = data?.options?.forOwners || []
  return forOwners.filter((item) => item.category === 'forOwners')
}

export const getBusinessCentersOptions = () => {
  const language = languageTag()
  const data = loadYamlData('options', language) as IOptionsData
  const businessCenters = data?.options?.businessCenters || []
  return businessCenters.filter((item) => item.category === 'centers')
}
