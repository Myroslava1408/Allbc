import { FC, ReactNode } from 'react'
import HeaderComponent from "@/app/modules/layout/elements/header/header.component";
import Image from 'next/image'
import {Emblem} from "@/app/shared/images";
import {Baner} from "@/app/shared/images";


import styles from './firstSection.module.scss'


interface IFirstSectionProps {
    settings: ReactNode,
}

const FirstSectionComponent: FC<Readonly<IFirstSectionProps>> = ({ settings }) => {
    return (
        <section
            className={`${styles.sectionFirst} flex flex-col m-auto w-full`}
            style={{background: `url(${Baner.src})`}}
        >

            <HeaderComponent settings={settings}/>

            <div className={`${styles.firstText} flex flex-col`}>
                <h1>
                    Лише <span>актуальні</span><br />офіси в твоєму місті
                </h1>
                <div className={`${styles.containSearch} flex containSearch`}>
                    <div className={`${styles.whiteWrap} flex lg:flex-row flex-col`}>
                        <div className={`${styles.listFiltr} flex items-center justify-between`}>
                            <ul>
                                <li>
                                    <p>Новобудови</p>
                                </li>
                            </ul>
                            <button>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.00001 4.28145L8.30001 0.981445L9.24267 1.92411L5.00001 6.16678L0.757339 1.92411L1.70001 0.981445L5.00001 4.28145Z"
                                        fill="#BFBFBF"/>
                                </svg>
                            </button>
                        </div>
                        <div className={styles.line}></div>
                        <div className={`${styles.listFiltr} flex items-center justify-between`}>
                            <ul>
                                <li>
                                    <p>Площа</p>
                                </li>
                            </ul>
                            <button>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.00001 4.28145L8.30001 0.981445L9.24267 1.92411L5.00001 6.16678L0.757339 1.92411L1.70001 0.981445L5.00001 4.28145Z"
                                        fill="#BFBFBF"/>
                                </svg>
                            </button>
                        </div>
                        <div className={styles.line}></div>
                        <div className={`${styles.listFiltr} flex items-center justify-between mr-6`}>
                            <ul>
                                <li>
                                    <p>Ціна</p>
                                </li>
                            </ul>
                            <button>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.00001 4.28145L8.30001 0.981445L9.24267 1.92411L5.00001 6.16678L0.757339 1.92411L1.70001 0.981445L5.00001 4.28145Z"
                                        fill="#BFBFBF"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button className={styles.btnSearch}>
                        Шукати
                    </button>
                </div>
                <div className={`${styles.rowParts} flex sm:flex-row flex-col`}>
                    <div className={`${styles.greenPart} flex`}>
                        <div className={styles.greenBox}></div>
                        <h2 className={styles.greenH2}>75 040</h2>
                        <h4>Вільних<br/> офісів</h4>
                    </div>
                    <div className={`${styles.bluePart} flex`}>
                        <div className={styles.blueBox}></div>
                        <h2 className={styles.blueH2}>2 508</h2>
                        <h4>Бізнес центрів <br/> у Києві</h4>
                    </div>
                </div>
                <div className={`${styles.darkBlock} flex sm:flex-row flex-col`}>
                    <Image
                        src={Emblem}
                        alt="icon"
                        width={106}
                        height={84}
                    />
                    <div className="flex flex-col">
                        <h5 className="text-white">Люблінський парк</h5>
                        <h6 className="text-white">15 хв пішки до м “Братиславська”</h6>
                    </div>
                    <button className={styles.darkBtn}>Дізнатися ціни</button>
                </div>
            </div>
        </section>
    )
}

export default FirstSectionComponent