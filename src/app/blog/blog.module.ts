import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [CommonModule, BlogRoutingModule],
  declarations: [ArticleComponent, ArticlePreviewComponent, DashboardComponent, AddressComponent],
})
export class BlogModule {}
