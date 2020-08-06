import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

interface Props{
    article: Article,
    index: number
}
interface Article{
    author: string, content: string, description: string, publishedAt: string, source: {id: string, name: string}, title: string, url: string, urlToImage: string
  }

  const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, index}: Props) => {
    const classes= useStyles()  
    return (
      <Card>
          <CardActionArea>
              <CardMedia className={classes.media} image ={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}/>
              <div>
                  <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                  <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
              </div>
              <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
              <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary" href=''>Learn More</Button>
              <Typography variant="h5" color="textSecondary" component="h2">{index + 1}</Typography>
          </CardActions>

      </Card>
      )
  }


export default NewsCard;