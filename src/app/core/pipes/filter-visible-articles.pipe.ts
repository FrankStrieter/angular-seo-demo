import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article';

@Pipe({ name: 'articleFilter' })
export class ArticleFilter implements PipeTransform {
  transform(articles: Article[]) {
    return articles.filter(a => a.visible);
  }
}
