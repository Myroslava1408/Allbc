import { Inter } from 'next/font/google'

// main font
export const mainFont = Inter({
    weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['cyrillic', 'latin'],
    display: 'swap',
    preload: true,
})