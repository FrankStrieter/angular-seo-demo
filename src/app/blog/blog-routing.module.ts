import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleReaderComponent } from './article-reader/article-reader.component';
import { MetaResolver } from '../core/resolver/meta.resolver';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'article/:name',
    component: ArticleReaderComponent,
    resolve: { meta: MetaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
