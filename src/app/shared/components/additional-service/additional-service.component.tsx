"use client";

import Link from "next/link"

import styles from './additional-service.module.scss'
import {imagesMap} from "@/libs/imagesMap"
import {FC} from "react"

type BackgroundKeys = keyof typeof imagesMap;

interface IBlock {
    type: number
    title: string
    background: BackgroundKeys
}

interface IAdditionalServiceProps {
    block: IBlock
    className?: string
}

const AdditionalServiceComponent: FC<Readonly<IAdditionalServiceProps>> = ({ block, className }) => {

    const backgroundKey = block.background;
    const background = backgroundKey in imagesMap ? imagesMap[backgroundKey] : null;

    let fullClassName = (block.type === 1 ? styles.itemTop : styles.itemBottom);
    if (className) {
        fullClassName += (" " + className);
    }

    return (
        <div
            className={ fullClassName }
            style={{ backgroundImage: background ? `url(${background.src})` : undefined }}
        >
            <Link href="#">{block.title}</Link>
        </div>
    )
}
export default AdditionalServiceComponent
