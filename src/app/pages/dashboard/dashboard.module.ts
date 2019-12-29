import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
