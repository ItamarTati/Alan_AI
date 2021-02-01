import React, {useEffect, useState} from 'react';
//@ts-ignore
import * as alanBtn from '@alan-ai/alan-sdk-web'
import NEWSCARDS from './components/NewsCards/NewsCards'
import wordsToNumbers from 'words-to-numbers';
import useStyles from './styles';
import image from './alan-logo.jpeg'

interface Article{
  author: string, 
  content: string, 
  description: string, 
  publishedAt: string, 
  source: {
    id: string, 
    name: string
  }, 
  title: string, 
  url: string, 
  urlToImage: string
}
interface Command{
  command: string,
  articles: Article[],
  number: any
}



const alanKey: string = 'c14ffd86f37efd1f70092413640945c92e956eca572e1d8b807a3e2338fdd0dc/stage';


const App: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);
  const classes = useStyles();
  const [activeArticle, setActiveArticle] = useState<number>(-1)
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }: Command) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening..., if article is not opening, please make sure your browser isn\'t blocking redirects...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className = {classes.logoContainer}>
        <img src={image} className={classes.alanLogo}alt ="alan logo"/>
      </div>
      <NEWSCARDS key = 'news' articles = {newsArticles} activeArticle = {activeArticle}/>
    </div>
  );
}

export default App;

