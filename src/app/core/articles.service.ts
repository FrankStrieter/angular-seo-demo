import { tap, find, flatMap, concatMap, concatAll } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Article } from './models/article';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private _articles: Article[] = [];

  apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  get articles() {
    if (this._articles && this._articles.length > 0) {
      return of(this._articles);
    } else {
      return this.all();
    }
  }
  all() {
    this._articles.splice(0, this._articles.length);
    return this.http
      .get<Article[]>(`${this.apiUrl}/articles.json`)
      .pipe(tap(articles => (this._articles.push(...articles))));
  }

  getByName(name: string): Observable<Article> {
    return this.articles.pipe(
      concatAll(),
      find(article => article.uniqueName === name)
    );
  }
}
