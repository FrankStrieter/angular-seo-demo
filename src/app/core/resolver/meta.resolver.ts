import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ArticlesService } from '../articles.service';

@Injectable()
export class MetaResolver implements Resolve<any> {
  constructor(
    public meta: Meta,
    public articlesService: ArticlesService,
    public title: Title
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.articlesService
      .getByName(route.params.name)
      .subscribe(article => {
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
      });
  }
}
