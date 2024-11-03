'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import styles from './article.module.scss'

interface IArticleProps {
  imageSrc: StaticImageData
}

const ArticleComponent: FC<Readonly<IArticleProps>> = ({ imageSrc }) => {
  return (
    <div className={styles.article}>
      <div className={styles.article__inner}>
        <Image
          className={styles.article__img}
          src={imageSrc.src}
          alt='photo'
          width={52}
          height={52}
        />
        <div className={styles.article__content}>
          <Link href={'#'}>
            <h4 className={styles.article__title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit empor
            </h4>
          </Link>
          <h5 className={styles.article__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua...
          </h5>
        </div>
      </div>
    </div>
  )
}

export default ArticleComponent
