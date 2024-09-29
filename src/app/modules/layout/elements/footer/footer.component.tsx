import { FC, ReactNode } from 'react'
import styles from './footer.module.scss'

interface IFooterProps {
    settings: ReactNode,
}

const FooterComponent: FC<Readonly<IFooterProps>> = ({ settings }) => {
    return (
        <footer>
            Footer
        </footer>
    )
}

export default FooterComponent
