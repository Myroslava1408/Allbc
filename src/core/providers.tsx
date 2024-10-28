import { ReactNode } from 'react'

import '@/styles/globals.scss'

import { RootLayoutComponent } from '@/app/modules/layout'
import { mainFont } from '@/fonts'

interface ProvidersProps {
  children: ReactNode
}

const Providers: ({ children }: ProvidersProps) => Promise<JSX.Element> = async ({ children }) => {
  return (
    <html>
      <body className={mainFont.className}>
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </body>
    </html>
  )
}

export default Providers
