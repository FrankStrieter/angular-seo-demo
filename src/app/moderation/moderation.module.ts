import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModerationRoutingModule } from './moderation-routing.module';
import { ModerationDashboardComponent } from './moderation-dashboard/moderation-dashboard.component';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { ModerationArticleComponent } from './moderation-article/moderation-article.component';
import { ModerationInformationComponent } from './moderation-information/moderation-information.component';

@NgModule({
  imports: [
    CommonModule,
    ModerationRoutingModule,
    FormsModule,
    TransferHttpCacheModule,
  ],
  declarations: [
    ModerationDashboardComponent,
    ModerationArticleComponent,
    ModerationInformationComponent,
  ],
})
export class ModerationModule {}
