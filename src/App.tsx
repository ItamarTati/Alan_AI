import React, {useEffect, useState} from 'react';
//@ts-ignore
import * as alanBtn from '@alan-ai/alan-sdk-web'
import NEWSCARDS from './components/NewsCards/NewsCards'
import useStyles from './styles';

interface Article{
  author: string, content: string, description: string, publishedAt: string, source: {id: string, name: string}, title: string, url: string, urlToImage: string
}
interface Command{
  command: string,
  articles: Article[],
}



const alanKey: string = 'c14ffd86f37efd1f70092413640945c92e956eca572e1d8b807a3e2338fdd0dc/stage';


const App: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);
  const classes = useStyles();
  const [activeArticle, setActiveArticle] = useState<number>(-1)
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ( { command, articles }: Command ) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles) 
          setActiveArticle(-1)
        } else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1)
        }
      }
    })
  }, [])

  return (
    <div>
      <div className = {classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo}alt ="alan logo"/>
      </div>
      <NEWSCARDS key = 'news' articles = {newsArticles} activeArticle = {activeArticle}/>
    </div>
  );
}

export default App;

