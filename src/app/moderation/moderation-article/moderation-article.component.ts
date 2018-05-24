import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../core/models/article';

@Component({
  selector: 'wmd-moderation-article',
  templateUrl: './moderation-article.component.html',
  styleUrls: ['./moderation-article.component.scss'],
})
export class ModerationArticleComponent {
  @Input() article: Article;
}
