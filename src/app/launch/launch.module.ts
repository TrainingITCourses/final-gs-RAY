import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchPresenterComponent } from './dashboard/launch-presenter/launch-presenter.component';

@NgModule({
  imports: [CommonModule, LaunchRoutingModule, SharedModule],
  declarations: [DashboardComponent, LaunchPresenterComponent]
})
export class LaunchModule {}
