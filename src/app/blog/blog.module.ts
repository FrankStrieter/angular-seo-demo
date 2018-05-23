import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './address/address.component';
import { InformationComponent } from './information/information.component';
import { ArticleReaderComponent } from './article-reader/article-reader.component';
import { CoreModule } from '../core/core.module';
import { MetaResolver } from '../core/resolver/meta.resolver';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, CoreModule],
  declarations: [
    ArticleComponent,
    ArticlePreviewComponent,
    DashboardComponent,
    AddressComponent,
    InformationComponent,
    ArticleReaderComponent,
  ],
  providers: [],
})
export class BlogModule {}
