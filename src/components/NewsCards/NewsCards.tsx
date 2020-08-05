import React from 'react'
import NEWSCARD from '../NewsCard/NewsCard'
interface Articles{
    author: string, content: string, description: string, publishedAt: string, source: {id: string, name: string}, title: string, url: string, urlToImage: string
  }
  interface Command{
    articles: Articles[],
  }
const NewsCards = ({articles}: Command) => {
    return (
        <div>
            <h1>News Cards</h1>
            {articles.map((article: Articles, index: number) =>
                <NEWSCARD />
            )}
        </div>
    )
}

export default NewsCards
