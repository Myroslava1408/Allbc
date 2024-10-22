"use client";

import React, { FC, ReactNode, useState } from 'react'
import {usePathname, useRouter} from 'next/navigation'
import Image from 'next/image'
import { ImageLogo } from '@/app/shared/images'
import { ArrDown } from '@/app/shared/images'
import { Like } from '@/app/shared/images'
import { Push } from '@/app/shared/images'
import { Search } from '@/app/shared/images'
import { AddOffice } from '@/app/shared/images'
import Link from 'next/link'

import styles from './header.module.scss'


import BurgerComponent from "@/app/shared/components/burger/burger.component"
import NavigateComponent from "@/app/shared/components/navigate/navigate.component"

interface IHeaderProps {
    settings: ReactNode,
}

const HeaderComponent: FC<IHeaderProps> = ({ settings }) => {

    const pathname = usePathname();
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };
    const handleLogoClick = () => {
        if (pathname === '/') {
            window.location.reload();
        } else {
            window.location.href = '/';
        }
    };

    return (
        <header className={`${styles.header} flex lg:gap-0 gap-4 justify-center items-center p-5`}>
            <div className={`${styles.headerWrap} flex sm:gap-0 gap-5 items-center`}>
                <div className="flex items-center w-auto md:justify-start justify-between flex-row">
                    <div className={`${styles.rowHeader} flex items-center`}>
                        <BurgerComponent onToggle={toggleSidebar} />
                        <div className="flex gap-4 pl-6">
                            <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                                <Image
                                    className="logo"
                                    src={ImageLogo}
                                    alt="logo"
                                    width={92}
                                    height={31}
                                />
                            </div>
                            <div className={`${styles.line} lg:block hidden`}></div>
                        </div>
                    </div>
                    <div className="lg:flex hidden items-center gap-1 pl-3.5">
                        <ul>
                            <li>
                                <p className="text-white">Івано-Франківськ</p>
                            </li>
                        </ul>
                        <button>
                            <Image
                                src={ArrDown}
                                alt="svg"
                                width={10}
                                height={6}
                            />
                        </button>
                    </div>
                </div>
                <nav className="lg:flex lg:pl-2 xl:pl-6 hidden">
                    <ul className="flex gap-10">
                        <NavigateComponent  />
                    </ul>
                </nav>
                <div
                    className={`${styles.sidebar} ${sidebarVisible ? 'open' : ''}`}
                    style={{ right: sidebarVisible ? '0px' : '-250px' }}
                >
                    <nav className="flex pl-6">
                        <ul className="flex flex-col p-8 gap-10">
                            <NavigateComponent  />
                        </ul>
                    </nav>
                    <div className="flex items-center justify-between w-full p-4">
                        <button className={`${styles.wishlist} items-center justify-center flex`}>
                            <Image
                                src={Like}
                                alt="icon"
                                width={20}
                                height={19}
                            />
                        </button>
                        <button className={`${styles.notifications} items-center justify-center flex`}>
                            <Image
                                src={Push}
                                alt="icon"
                                width={20}
                                height={21}
                            />
                        </button>
                        <div className="text-white  flex items-center justify-center gap-1 lg:hidden">
                            <ul>
                                <li>
                                    <Link href="#" className="text-white">EN</Link>
                                </li>
                            </ul>
                            <button className="w-full">
                                <Image
                                    src={ArrDown}
                                    alt="icon"
                                    width={10}
                                    height={6}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 p-8">
                        <ul>
                            <li>
                                <p className="text-white">Івано-Франківськ</p>
                            </li>
                        </ul>
                        <button>
                            <Image
                                src={ArrDown}
                                alt="icon"
                                width={10}
                                height={6}
                            />
                        </button>
                    </div>
                    <button className={`${styles.add} flex items-center ml-3 gap-2 text-white`}>
                        <Image
                            src={AddOffice}
                            alt="icon"
                            width={14}
                            height={14}
                        />
                        Додати офіс
                    </button>
                </div>
                <div className="flex items-center md:gap-4 gap-3  lg:pl-2 xl:pl-12 justify-center">
                    <button className={`${styles.search} w-full pl-0`}>
                        <Image
                            src={Search}
                            alt="icon"
                            width={24}
                            height={24}
                        />
                    </button>
                    <button className={`${styles.notifications} w-full pl-0`}>
                        <Image
                            src={Push}
                            alt="icon"
                            width={20}
                            height={21}
                        />
                    </button>
                    <button className={`${styles.wishlist} lg:flex hidden w-full`}>
                        <Image
                            src={Like}
                            alt="icon"
                            width={20}
                            height={19}
                        />
                    </button>
                    <div className="text-white lg:flex hidden items-center justify-center gap-1 lg:pl-2 xl:pl-5">
                        <ul>
                            <li>
                                <Link href="#" className="text-white">EN</Link>
                            </li>
                        </ul>
                        <button className={`${styles.BtnDown} w-full`}>
                            <Image
                                src={ArrDown}
                                alt="icon"
                                width={10}
                                height={6}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-5">
                <div className="flex gap-3 lg:pl-4 xl:pl-9">
                    <button className={`${styles.add} lg:flex hidden items-center gap-2 text-white`}>
                        <Image
                            src={AddOffice}
                            alt="icon"
                            width={14}
                            height={14}
                        />
                        Додати офіс
                    </button>
                    <button className={`${styles.login} text-white`}>
                        Вхід
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
