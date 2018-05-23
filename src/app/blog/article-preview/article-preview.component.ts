import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wmd-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article;
  constructor() {}

  ngOnInit() {}
}
