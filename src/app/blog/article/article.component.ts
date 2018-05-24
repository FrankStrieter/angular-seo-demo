import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../core/models/article';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'wmd-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articleContent: SafeHtml;
  @Input() article: Article;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.articleContent = this.sanitizer.bypassSecurityTrustHtml(
      this.article.post.content
    );
  }
}
