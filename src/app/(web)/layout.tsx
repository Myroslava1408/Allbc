import { FC, ReactNode } from 'react'

import Providers from '@/core/providers'

interface RootLayoutProps {
    children: ReactNode,
}

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
    return (
        <Providers>{children}</Providers>
    )
}

export default RootLayout
