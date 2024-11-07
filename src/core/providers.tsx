import {Metadata, ResolvingMetadata} from "next";
import {generateAlternateLinks, LanguageProvider} from '@inlang/paraglide-next'
import { NextUIProvider } from '@nextui-org/react'
import { strategy } from '@/libs/localization/i18n'

import { ReactNode } from 'react'

import '@/styles/globals.scss'

import { RootLayoutComponent } from '@/app/modules/layout'
import { languageTag } from '@/libs/localization/paraglide/runtime'
import {cookies} from "next/headers";

export const generateMetadata = (_params: never, parent: ResolvingMetadata): Metadata => {
    // return
    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),

        alternates: {
            languages: generateAlternateLinks({
                origin: `${process.env.NEXT_PUBLIC_APP_URL}` as `http${string}`,
                strategy: strategy,
                resolvingMetadata: parent,
            }),
        },
    }
}

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    const locale = cookies().get('lang')?.value || 'uk';

    console.log('Current locale in Providers:', locale);
    return (
        <LanguageProvider>
            <NextUIProvider locale={locale}>
                <RootLayoutComponent>{children}</RootLayoutComponent>
            </NextUIProvider>
        </LanguageProvider>
    )
}

export default Providers
