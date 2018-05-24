import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../core/articles.service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'wmd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  articles: Article[];
  constructor(private articleService: ArticlesService) {
    this.articleService.articles.subscribe(
      articles => (this.articles = articles)
    );
  }
}
