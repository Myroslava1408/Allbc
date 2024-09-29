'use client'

import dynamic from 'next/dynamic'

import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import {
    FooterComponent,
} from '@/app/modules/layout/elements'

import styles from './layout.module.scss'

interface ILayoutProps {
    settings: ReactNode,
    children: ReactNode,
}

const RootLayoutComponent: FC<Readonly<ILayoutProps>> = ({ settings, children }) => {
    return (
        <div>
            <main>{children}</main>
            <FooterComponent settings={settings} />
        </div>
    )
}

export default RootLayoutComponent
