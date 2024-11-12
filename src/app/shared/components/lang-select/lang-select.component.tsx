'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { Key } from '@react-types/shared'

import { FC } from 'react'

import { usePathname, useRouter } from '@/libs/localization/i18n'
import { languageTag } from '@/libs/localization/paraglide/runtime'

import styles from './lang-select.module.scss'

interface ILangSelectProps {}

const langs: { lang: string; label: string }[] = [
  { lang: 'uk', label: 'UK' },
  { lang: 'en', label: 'EN' },
]

const LangSelectComponent: FC<Readonly<ILangSelectProps>> = () => {
  const router = useRouter()
  const pathname = usePathname()
  const selectedLang = langs.find((el) => el.lang === languageTag())

  return (
    <Select
      items={langs}
      variant={'bordered'}
      aria-label={'lang select'}
      defaultSelectedKeys={selectedLang ? ([selectedLang.lang] as Key[]) : []}
      classNames={{
        base: styles.lang__base,
        popoverContent: styles.lang__popover,
        listbox: styles.lang__value,
        trigger: styles.lang__trigger,
        innerWrapper: styles.lang__inner_wrapper,
        mainWrapper: styles.lang__main_wrapper,
      }}
      onChange={(e) =>
        router.push(pathname, {
          locale: e?.target?.value === 'uk' ? 'uk' : e?.target?.value === 'en' ? 'en' : 'en',
        })
      }
      renderValue={(items) => {
        return items?.map(({ data }) => {
          if (data && data.label) {
            return (
              <span key={data.label} className={styles.lang__label}>
                {data.label}
              </span>
            )
          }
          return null
        })
      }}
    >
      {({ lang, label }) => (
        <SelectItem key={lang} textValue={label}>
          {label}
        </SelectItem>
      )}
    </Select>
  )
}

export default LangSelectComponent
