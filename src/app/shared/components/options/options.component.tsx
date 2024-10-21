"use client";
import React, { FC, ReactNode } from 'react'
import Link from "next/link";

interface IOptionBlock {
    option: string;
    category: string;
}
interface IOptionsProps {
    settings: ReactNode,
    title: string,
    options: IOptionBlock[];
}

const OptionsComponent:  FC<Readonly<IOptionsProps>> = ({settings, title, options}) => {
    return (
        <div className="flex flex-col">
            <span className="text-white">{title}</span>
            <ul className="flex flex-col gap-4 pt-5">
                {options.map((optionName, index) => (
                    <li key={index}>
                        <Link className="text-white" href="#">
                            {optionName.option}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default OptionsComponent