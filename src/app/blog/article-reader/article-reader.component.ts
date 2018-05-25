import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../core/articles.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { Article } from '../../core/models/article';

@Component({
  selector: 'wmd-article-reader',
  templateUrl: './article-reader.component.html',
  styleUrls: ['./article-reader.component.scss'],
})
export class ArticleReaderComponent implements OnInit {
  relatedArticles: Article[];
  article: Article;
  constructor(
    private articleService: ArticlesService,
    private ar: ActivatedRoute
  ) {
    this.articleService.articles.subscribe(articles => {
      this.relatedArticles = articles;
      this.ar.params
        .pipe(
          flatMap(params => this.articleService.getByName(params.name))
        )
        .subscribe(article => this.article = article);
    });
  }

  ngOnInit() {}
}
