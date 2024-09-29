import { RootLayoutComponent } from '@/app/modules/layout'
import { FC, ReactNode } from 'react'

interface IProviderProps {
    children: ReactNode,
}

const Providers: FC<Readonly<IProviderProps>> = async ({ children }) => {
    const settings = [];

    return (
        <html>
            <body>
                <RootLayoutComponent settings={settings}>{children}</RootLayoutComponent>
            </body>
        </html>
    )
}

export default Providers
