import React from 'react'
import {Grid, Grow, Typography} from '@material-ui/core'
import useStyles from './styles'
import NEWSCARD from '../NewsCard/NewsCard'


interface Article{
    author: string, content: string, description: string, publishedAt: string, source: {id: string, name: string}, title: string, url: string, urlToImage: string
  }
  interface Command{
    articles: Article[],
  }

const NewsCards = ({articles}: Command) => {
    const classes= useStyles()

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article: Article, index: number) =>
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}} >
                    
                        <NEWSCARD 
                        key = 'news' 
                        //@ts-ignore
                        article = {article} index={index}/>
                    </Grid> 
                )}
            </Grid>
        
        </Grow>
    )
}

export default NewsCards
