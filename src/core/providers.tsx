import { RootLayoutComponent } from '@/app/modules/layout'
import { FC, ReactNode } from 'react'
import { mainFont } from '@/fonts'

interface IProviderProps {
    children: ReactNode
}

const Providers: ({children}: { children: any }) => Promise<JSX.Element> = async ({ children }) => {
    const settings = [];

    return (
        <html>
            <body className={mainFont.className}>
                <RootLayoutComponent settings={settings}>{children}</RootLayoutComponent>
            </body>
        </html>
    )
}

export default Providers
