import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../core/articles.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'wmd-article-reader',
  templateUrl: './article-reader.component.html',
  styleUrls: ['./article-reader.component.scss'],
})
export class ArticleReaderComponent implements OnInit {
  relatedArticles: any[];
  article;
  constructor(
    private articleService: ArticlesService,
    private ar: ActivatedRoute
  ) {
    this.articleService.articles.subscribe(articles => {
      this.relatedArticles = articles;
      console.log(this.relatedArticles);
      this.ar.params
        .pipe(
          flatMap(params => {
            console.log('1', params.name);
            return this.articleService.getByName(params.name);
          })
        )
        .subscribe(article => {
          console.log('2', article);
          this.article = article;
        });
    });
  }

  ngOnInit() {}
}
