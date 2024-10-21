"use client";

import { FC, ReactNode } from 'react'
import styles from './services.module.scss'
import {AdditionalService} from "@/app/shared/components/additional-service"

interface IServicesProps {
    additionalServices: ReactNode
}

const ServicesComponent: FC<Readonly<IServicesProps>> = ({ additionalServices }) => {
    const type1Services = additionalServices.filter(item => item.service.type === 1);
    const type2Services = additionalServices.filter(item => item.service.type === 2);

    return (
        <section className={`${styles.sectionFifth}  flex flex-col`}>
            <h3 className="flex items-start font-bold">Додаткові послуги</h3>
             <div className={` ${styles.itemsGrid} gap-6`}>
                 <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:p-0 p-2 gap-7 justify-center">
                     {type1Services.map((block, blockItem) => {
                         const className = (blockItem === type1Services.length - 1) ? 'md:col-span-2 lg:col-span-1' : '';
                         return (
                             <AdditionalService block={block.service} key={blockItem} className={className} />
                         )
                     })}
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 lg:p-0 p-2 justify-center">
                    {type2Services.map((block, index) => (
                        <AdditionalService block={block.service} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesComponent
