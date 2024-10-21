"use client";
import React, { FC } from 'react'
import Link from "next/link";

interface IArea {
    area: string
}

interface IOfficeAreaProps {
    areas: IArea[]
}

const OfficeAreaComponent: FC<Readonly<IOfficeAreaProps>> = ({ areas }) => {
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