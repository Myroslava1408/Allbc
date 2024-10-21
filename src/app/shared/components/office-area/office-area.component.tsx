"use client";
import React, { FC, ReactNode } from 'react'
import Link from "next/link";

interface IArea {
    area: string
}

interface IOfficeAreaProps {
    settings: ReactNode
    areas: IArea[]
}

const OfficeAreaComponent: FC<Readonly<IOfficeAreaProps>> = ({ settings, areas }) => {
        return (
            <ul className="flex flex-col gap-3">
                {areas.areas.map((areaItem, index) => (
                    <li key={index}>
                        <Link href="#">
                            {areaItem.area}
                        </Link>
                    </li>
                ))}
            </ul>
        )
}
export default OfficeAreaComponent