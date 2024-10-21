"use client";
import React, { FC } from 'react'
import Link from "next/link";

interface IDistrictOffice {
    districtName: string
    category: string
}

interface IDistrictOfficesProps {
    districts: IDistrictOffice[]
    title: string
}

const DistrictOfficesComponent: FC<Readonly<IDistrictOfficesProps>> = ({ districts, title }) => {
    const columns = {
        firstColumn: districts.slice(0, 5),
        secondColumn: districts.slice(5, 8),
        thirdColumn: districts.slice(8, 13),
    };

    return (
        <div className="flex flex-col">
            <h3>{title}</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {Object.entries(columns).map(([column, districts]) => (
                    <ul className="flex flex-col gap-3" key={column}>
                        {districts.map((district, index) => (
                            <li key={index}>
                                <Link href="#">
                                    {district.districtName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};
export default DistrictOfficesComponent;
