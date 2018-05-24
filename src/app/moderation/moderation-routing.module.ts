import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModerationDashboardComponent } from './moderation-dashboard/moderation-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ModerationDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModerationRoutingModule {}
