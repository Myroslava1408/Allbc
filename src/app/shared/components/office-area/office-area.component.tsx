"use client";
import React, { FC } from 'react'
import Link from "next/link";

interface IArea {
    area: string
}

interface IOfficeAreaProps {
    areas: IArea[] | { areas: IArea[] } | null
}

const OfficeAreaComponent: FC<Readonly<IOfficeAreaProps>> = ({ areas }) => {
    const areasArray = Array.isArray(areas)
        ? areas
        : areas && Array.isArray(areas.areas)
            ? areas.areas
            : [];

    if (!areasArray.length) {
        return <p>Немає міст</p>;
    }
        return (
            <ul className="flex flex-col gap-3">
                {Array.isArray(areasArray) && areasArray.length > 0 ? (
                    areasArray.map((areaItem, index) => (
                        <li key={index}>
                            <Link href="#">
                                {areaItem.area}
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>Немає доступних зон</p>
                )}
            </ul>
        )
}
export default OfficeAreaComponent