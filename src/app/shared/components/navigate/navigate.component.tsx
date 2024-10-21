import React, { FC, ReactNode } from 'react'
import Link from "next/link";


interface INavigateProps {
    settings: ReactNode
}

const NavigateComponent: FC<Readonly<INavigateProps>> = ({  settings }) => {

    const links =  {
        Rent: "Оренда",
        Sale: "Продаж",
        newConstructions: "Новобудови",
        Coworkings: "Коворкінги",
    };

    return (
        <>
            {Object.entries(links).map(([link, linkName]) => (
                <li key={link}>
                    <Link className="text-white" href="#">
                        {linkName}
                    </Link>
                </li>
            ))}
        </>
    )
}

export default NavigateComponent