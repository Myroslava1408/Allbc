"use client";
import React, { FC, ReactNode } from 'react'
import OfficeAreaComponent from "@/app/shared/components/office-area/office-area.component"

interface IOfficeAreasProps {
    settings: ReactNode
    title: string
    areas: string
}

const OfficeAreasComponent: FC<Readonly<IOfficeAreasProps>> = ({ settings, title, areas }) => {
    return (
        <div className="flex flex-col">
            <h3>{title}</h3>
            <div className="flex flex-col gap-12">
                <div className="grid md:grid-cols-6 grid-cols-3 gap-8 md:gap-20">
                    <OfficeAreaComponent settings={settings} areas={areas} />
                    <OfficeAreaComponent settings={settings} areas={areas} />
                    <OfficeAreaComponent settings={settings} areas={areas} />
                    <OfficeAreaComponent settings={settings} areas={areas} />
                    <OfficeAreaComponent settings={settings} areas={areas} />
                    <OfficeAreaComponent settings={settings} areas={areas} />
                </div>
            </div>
        </div>
    )
}
export default OfficeAreasComponent