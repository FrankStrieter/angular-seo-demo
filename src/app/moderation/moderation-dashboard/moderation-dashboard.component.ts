import { Component, OnInit } from '@angular/core';
import { Article } from '../../core/models/article';
import { ArticlesService } from '../../core/articles.service';

@Component({
  selector: 'wmd-moderation-dashboard',
  templateUrl: './moderation-dashboard.component.html',
  styleUrls: ['./moderation-dashboard.component.scss'],
})
export class ModerationDashboardComponent {
  articles: Article[];
  constructor(private articleService: ArticlesService) {
    this.articleService.articles.subscribe(
      articles => (this.articles = articles)
    );
  }
}
