"use client";

import React, { FC, useEffect, useState } from 'react'
import styles from './categories-sidebar.module.scss'
import Link from "next/link"

interface ICategory {
    nameCategory: string
    amount: number
    category: string
}

interface ICategoriesSidebarProps {
    titleHeader: string
    categories: ICategory[]
}

const CategoriesSidebarComponent: FC<Readonly<ICategoriesSidebarProps>> = ({ titleHeader, categories }) => {
    const [visibleItems, setVisibleItems] = useState(4);
    const [isExpanded, setIsExpanded] = useState(false);
    const [displayedCategories, setDisplayedCategories] = useState<ICategory[]>([]);
    const defaultAmount = 4;
    const additionalAmount = 2;

    const getRandomItems = (items: ICategory[], count: number) => {
        if (!Array.isArray(items)) {
            console.error("Expected items to be an array");
            return [];
        }

        const shuffled = items.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        setDisplayedCategories(getRandomItems(categories, visibleItems));
    }, [categories, visibleItems]);

    const toggleItems = () => {
        if (isExpanded) {
            setVisibleItems(defaultAmount);
        } else {
            setVisibleItems(prev => prev + additionalAmount);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.listOffice} flex flex-col`}>
            <p>{titleHeader}</p>
            <ul className="pt-3 flex flex-col gap-2">
                {Array.isArray(displayedCategories) && displayedCategories.length > 0 ? (
                    displayedCategories.map((category, index) => (
                        <li key={index}>
                            <div className={`${styles.listUl} flex justify-between`}>
                                <Link href="#">
                                    {category.nameCategory}
                                </Link>
                                <div className={styles.numbBlue}>
                                    <span>{category.amount}</span>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>Немає доступних категорій</p>
                )}

            </ul>
            <div className={`${styles.moreBlock} flex`}>
                <button onClick={toggleItems} className="flex items-center pt-2 gap-3">
                    <p>{isExpanded ? 'Сховати' : 'Ще'}</p>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{ transform: isExpanded ? 'rotate(180deg)' : 'none' }}>
                        <path
                            d="M4.99999 3.78145L8.29999 0.481445L9.24266 1.42411L4.99999 5.66678L0.757324 1.42411L1.69999 0.481445L4.99999 3.78145Z"
                            fill="#005E7D" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CategoriesSidebarComponent
