'use client';
import { FC } from 'react';

import ArticleComponent from '@/app/shared/components/article/article.component';
import { ArticleFirst, ArticleSecond, ArticleThird } from '@/app/shared/images';

const ArticlesComponent: FC = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <ArticleComponent imageSrc={ArticleFirst} />
      <ArticleComponent imageSrc={ArticleSecond} />
      <ArticleComponent imageSrc={ArticleThird} />
    </div>
  );
};

export default ArticlesComponent;
