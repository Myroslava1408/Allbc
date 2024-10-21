"use client";

import Link from "next/link";

import styles from './additional-service.module.scss'
import {imagesMap} from "@/libs/imagesMap";
import {FC} from "react";

interface IBlock {
    type: number
    title: string
    background: string
}

interface IAdditionalServiceProps {
    block: IBlock
    className?: string
}

const AdditionalServiceComponent: FC<Readonly<IAdditionalServiceProps>> = ({ block, className }) => {

    const background = imagesMap[block.background];

    let fullClassName = (block.type === 1 ? styles.itemTop : styles.itemBottom);
    if (className) {
        fullClassName += (" " + className);
    }

    return (
        <div
            className={ fullClassName }
            style={{ backgroundImage: `url(${ background.src })` }}
        >
            <Link href="#">{block.title}</Link>
        </div>
    )
}
export default AdditionalServiceComponent
