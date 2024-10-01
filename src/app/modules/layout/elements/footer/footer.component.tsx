import { FC, ReactNode } from 'react'
import Image from 'next/image'
import {ImageLogo, Instagram } from '@/app/shared/images'
import { Facebook } from '@/app/shared/images'
import { Twiter } from '@/app/shared/images'
import { Linkedin } from '@/app/shared/images'
import Link from 'next/link'

import styles from './footer.module.scss'

interface IFooterProps {
    settings: ReactNode,
}

const FooterComponent: FC<Readonly<IFooterProps>> = ({ settings }) => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerWrap} flex flex-col justify-between`}>
                <div className="flex justify-between md:flex-row flex-col">
                    <Link href="#">
                        <Image
                            src={ ImageLogo }
                            alt="logo"
                            className="logo"
                            width={97}
                            height={92}
                        />
                    </Link>
                    <div className={`${styles.listGrid} flex justify-between`}>
                        <div className="flex flex-col">
                            <span className="text-white">About us</span>
                            <ul className="flex flex-col gap-4 pt-5">
                                <li>
                                    <Link className="text-white" href="#">
                                        Оренда
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Продаж
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Новобудови
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Коворкінги
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Статистика
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Тарифи
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white">Політика конфіденційності</span>
                            <ul className="flex flex-col gap-4 pt-5">
                                <li>
                                    <Link className="text-white" href="#">
                                        Реклама на сайті
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Умови використання сайту
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Карта сайту
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Публічна оферта
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white">For owners</span>
                            <ul className="flex flex-col gap-4 pt-5">
                                <li>
                                    <Link className="text-white" href="#">
                                        Office Rental
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Office for Sale
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white">Business Centers</span>
                            <ul className="flex flex-col gap-4 pt-5">
                                <li>
                                    <Link className="text-white" href="#">
                                        Class “A”
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Class “B”
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Class “C”
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Class “OSZ”
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white" href="#">
                                        Class “AZ”
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.contacts} flex flex-col`}>
                        <span className="text-white">Contacts</span>
                        <div className="flex pt-5 pl-7">
                            <button className={`${styles.btnFoot} w-5 h-5`}>
                                <svg className="relative z-10 left-2" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" fill="#2A3842"/>
                                </svg>
                            </button>
                            <input type="text" name="text" placeholder="Пошук по сайту..." className={`${styles.inputSearch} absolute z-0`} />
                        </div>
                        <h5 className="text-white">+38 (067) 966 07 24</h5>
                        <h6>info@allbc.info</h6>
                        <div className="flex pt-3 gap-2">
                            <button>
                                    <Image
                                        src={ Instagram }
                                        alt="icon"
                                        width={32}
                                        height={32}
                                    />
                            </button>
                            <button>
                                <Image
                                    src={ Twiter }
                                    alt="icon"
                                    width={32}
                                    height={32}
                                />
                            </button>
                            <button>
                                <Image
                                    src={ Linkedin }
                                    alt="icon"
                                    width={32}
                                    height={32}
                                />
                            </button>
                            <button>
                                <Image
                                    src={ Facebook }
                                    alt="icon"
                                    width={32}
                                    height={32}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <p className={styles.copyright}>© 2013-2021 Allbc. All rights reserved</p>
            </div>
        </footer>
    )
}

export default FooterComponent
