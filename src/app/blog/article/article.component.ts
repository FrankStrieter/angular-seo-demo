import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wmd-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article;
  constructor() {}

  ngOnInit() {}
}
