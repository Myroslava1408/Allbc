import { FC, useState } from 'react'

import styles from '@/app/shared/components/filter-list/filter-list.module.scss'

interface IListItem {
  id: number
  title: string
  category: string
}
interface IFilterListProps {
  list: IListItem[]
  onCategorySelect: (categoryId: number) => void
  defaultCategoryId: number
}
const FilterListComponent: FC<Readonly<IFilterListProps>> = ({
  list,
  onCategorySelect,
  defaultCategoryId,
}) => {
  const [activeId, setActiveId] = useState<number | null>(defaultCategoryId)

  const handleClick = (id: number) => {
    setActiveId(id)
    onCategorySelect(id)
  }
  return (
    <div className={styles.aRow}>
      {Array.isArray(list) && list.length > 0 ? (
        list.map((listItem, index) => {
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
        })
      ) : (
        <p>Список порожній</p>
      )}
    </div>
  )
}

export default FilterListComponent
