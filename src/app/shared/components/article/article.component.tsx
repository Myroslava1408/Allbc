'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import styles from './article.module.scss';

interface IArticleProps {
  imageSrc: StaticImageData;
}

const ArticleComponent: FC<Readonly<IArticleProps>> = ({ imageSrc }) => {
  return (
    <div className={`flex gap-4 ${styles.article}`}>
      <div className="flex gap-4 p-4">
        <Image
          className={styles.imgArticle}
          src={imageSrc.src}
          alt="photo"
          width={52}
          height={52}
        />
        <div className="flex flex-col">
          <Link href={'#'}>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit empor
            </h4>
          </Link>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;
