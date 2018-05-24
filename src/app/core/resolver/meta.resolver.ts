import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Article } from '../models/article';

@Injectable()
export class MetaResolver implements Resolve<Observable<Article>> {
  constructor(
    public meta: Meta,
    public articlesService: ArticlesService,
    public title: Title
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.articlesService.getByName(route.params.name).pipe(
      tap(article => {
        this.title.setTitle(article.post.header);
        this.meta.updateTag({
          property: 'author',
          content: article.author.name,
        });
        this.meta.updateTag({
          property: 'description',
          content: article.description,
        });
        this.meta.updateTag({
          property: 'og:description',
          content: article.description,
        });
        this.meta.updateTag({
          property: 'twitter: description',
          content: article.description,
        });
      })
    );
  }
}
