import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MetaResolver } from './resolver/meta.resolver';
import { ArticleFilter } from './pipes/filter-visible-articles.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, ArticleFilter],
  exports: [HeaderComponent, FooterComponent, ArticleFilter],
  providers: [MetaResolver],
})
export class CoreModule {}
