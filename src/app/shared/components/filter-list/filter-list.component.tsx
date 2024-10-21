import {FC} from "react";
import { useState } from 'react'

import styles from "@/app/shared/components/filter-list/filter-list.module.scss"


interface IListItem {
    id: number;
    title: string
    category: string
}
interface IFilterListProps {
    list: IListItem[]
    onCategorySelect: (categoryId: number) => void
}
const FilterListComponent: FC<Readonly<IFilterListProps>> = ({ list, onCategorySelect }) => {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setActiveId(id);
        onCategorySelect(id);
    };
    return (
        <div className={`${styles.aRow} gap-5 flex`}>
            {list.map((listItem, index) => {
                return (
                    <button key={index} onClick={() => handleClick(listItem.id)}>
                        <div
                            className={`${styles.blockRed} ${activeId === listItem.id ? styles.active : ''}`}
                        >
                            <p className={activeId === listItem.id ? styles.activeText : ''}>
                                {listItem.title}
                            </p>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default FilterListComponent
