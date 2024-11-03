'use client'
import { FC } from 'react'

import ArticleComponent from '@/app/shared/components/article/article.component'
import { ArticleFirst, ArticleSecond, ArticleThird } from '@/app/shared/images'

import styles from './articles.module.scss'

const ArticlesComponent: FC = () => {
  return (
    <div className={styles.articlesBlock}>
      <ArticleComponent imageSrc={ArticleFirst} />
      <ArticleComponent imageSrc={ArticleSecond} />
      <ArticleComponent imageSrc={ArticleThird} />
    </div>
  )
}

export default ArticlesComponent
