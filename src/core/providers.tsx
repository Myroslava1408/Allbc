import { LanguageProvider } from '@inlang/paraglide-next'
import { NextUIProvider } from '@nextui-org/react'

import { ReactNode } from 'react'

import '@/styles/globals.scss'

import { RootLayoutComponent } from '@/app/modules/layout'
import { languageTag } from '@/libs/localization/paraglide/runtime'

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <LanguageProvider>
      <NextUIProvider locale={languageTag()}>
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </NextUIProvider>
    </LanguageProvider>
  )
}

export default Providers
