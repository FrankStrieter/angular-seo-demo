import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MetaResolver } from './resolver/meta.resolver';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [MetaResolver],
})
export class CoreModule {}
