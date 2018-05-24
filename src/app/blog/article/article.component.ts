import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../core/models/article';

@Component({
  selector: 'wmd-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  ngOnInit() {}
}
