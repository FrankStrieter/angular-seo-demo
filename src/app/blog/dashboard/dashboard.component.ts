import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../core/articles.service';

@Component({
  selector: 'wmd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  articles;
  constructor(private articleService: ArticlesService) {
    this.articleService.all().subscribe(articles => (this.articles = articles));
  }
}
