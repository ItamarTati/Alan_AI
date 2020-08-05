import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles';
interface Article{
    author: string, content: string, description: string, publishedAt: string, source: {id: string, name: string}, title: string, url: string, urlToImage: string
  }



export default NewsCard;