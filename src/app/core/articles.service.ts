import { tap, find, flatMap, concatMap, concatAll } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private _articles: any[];
  apiUrl = 'http://localhost:4200/assets';
  constructor(private http: HttpClient) {}

  get articles() {
    if (this._articles) {
      return of(this._articles);
    } else {
      return this.all();
    }
  }
  all() {
    return this.http
      .get<any[]>(`${this.apiUrl}/articles.json`)
      .pipe(tap(articles => (this._articles = articles)));
  }

  getByName(name: string): Observable<any> {
    return this.articles.pipe(
      concatAll(),
      find(article => article.uniqueName === name)
    );
  }
}
