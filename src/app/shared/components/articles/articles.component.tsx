"use client";
import { FC, ReactNode } from 'react'

import ArticleComponent from "@/app/shared/components/article/article.component"
import {ArticleFirst, ArticleSecond, ArticleThird} from "@/app/shared/images"

interface IArticlesProps {
    settings: ReactNode
}

const ArticlesComponent: FC<Readonly<IArticlesProps>> = ({ settings }) => {
    return (
        <div className="flex flex-col gap-1.5">
            <ArticleComponent imageSrc={ArticleFirst}/>
            <ArticleComponent imageSrc={ArticleSecond}/>
            <ArticleComponent imageSrc={ArticleThird}/>
        </div>
    )
}

export default ArticlesComponent
