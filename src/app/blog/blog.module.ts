import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, ArticleComponent]
})
export class BlogModule { }
