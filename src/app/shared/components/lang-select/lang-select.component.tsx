'use client'

import { Select, SelectItem } from '@nextui-org/react'
import { Key } from '@react-types/shared'

import { FC } from 'react'

import { IconArrow, IconUk, IconUkr } from '@/app/shared/icons'
import { usePathname, useRouter } from '@/libs/localization/i18n'
import { languageTag } from '@/libs/localization/paraglide/runtime'

import styles from './lang-select.module.scss'

//interface
interface ILangSelectProps {}

const langs: { lang: string; icon: any }[] = [
  { lang: 'uk', icon: IconUkr },
  { lang: 'en', icon: IconUk },
]

//component
const LangSelectComponent: FC<Readonly<ILangSelectProps>> = () => {
  const router = useRouter()
  const pathname = usePathname()
  const selectedLang = langs.find((el) => el.lang === languageTag());

  //return
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
      selectorIcon={<IconArrow />}
      renderValue={(items) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return items?.map(({ data: { lang, icon: Icon } }) => (
          <Icon key={lang} className={styles.lang__icon} />
        ))
      }}
    >
      {({ lang, icon: Icon }) => (
        <SelectItem key={lang} textValue={lang}>
          <Icon className={styles.lang__icon} />
        </SelectItem>
      )}
    </Select>
  )
}

export default LangSelectComponent
