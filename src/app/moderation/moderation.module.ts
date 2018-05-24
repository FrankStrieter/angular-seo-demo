import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModerationRoutingModule } from './moderation-routing.module';
import { ModerationDashboardComponent } from './moderation-dashboard/moderation-dashboard.component';

import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  imports: [CommonModule, ModerationRoutingModule, TransferHttpCacheModule],
  declarations: [ModerationDashboardComponent],
})
export class ModerationModule {}
