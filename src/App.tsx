import React, {useEffect, useState} from 'react';
//@ts-ignore
import * as alanBtn from '@alan-ai/alan-sdk-web'
import NEWSCards from './components/NewsCards/NewsCards'
interface Articles{
  author: string, content: string, description: string, publishedAt: string, source: {id: string, name: string}, title: string, url: string, urlToImage: string
}
interface Command{
  command: string,
  articles: Articles[],
}
interface IArticles {
}


const alanKey: string = 'c14ffd86f37efd1f70092413640945c92e956eca572e1d8b807a3e2338fdd0dc/stage';


const App: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<Articles[]>([])
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ( { command, articles }: Command ) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles) 
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NEWSCards key = 'news' articles = {newsArticles}/>
    </div>
  );
}

export default App;

