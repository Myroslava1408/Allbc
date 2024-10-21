import { RootLayoutComponent } from '@/app/modules/layout'
import { ReactNode } from 'react'
import { mainFont } from '@/fonts'


interface ProvidersProps {
    children: ReactNode;
}

const Providers: ({ children }: ProvidersProps) => Promise<JSX.Element> = async ({ children }) => {
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
