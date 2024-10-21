"use client";
import { FC, ReactNode } from 'react'
import styles from './magazine.module.scss'
import {Man} from "@/app/shared/images"
import ArticlesComponent from "@/app/shared/components/articles/articles.component"

interface IMagazineProps {
    settings: ReactNode
}

const MagazineComponent: FC<Readonly<IMagazineProps>> = ({ settings }) => {
    return (
        <section className={`${styles.sectionSixth} flex flex-col`}>
            <h3>Журнал</h3>
            <div className="flex w-full justify-between">
                <p className={`${styles.titleSixth} uppercase`}>Статті</p>
                <button className={`${styles.blueBtn} flex items-center gap-1.5 justify-center`}>
                    Всі статті
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0417 1.66675L13.875 4.50008M13.875 4.50008L11.0417 7.33341M13.875 4.50008H1.125"
                              stroke="black" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-5">
                <div className={styles.magazineBlock}
                     style={{background: `url(${Man.src})`}}
                >
                    <h5 className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h5>
                </div>
                <div className="flex md:flex-row flex-col gap-5">
                        <ArticlesComponent settings={settings} />
                        <ArticlesComponent settings={settings} />
                </div>
            </div>
        </section>
    )
}
export default MagazineComponent
