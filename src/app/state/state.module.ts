import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StateRoutingModule } from './state-routing.module';
import { StatePresenterComponent } from './dashboard/state-presenter/state-presenter.component';

@NgModule({
  imports: [CommonModule, StateRoutingModule, SharedModule],
  declarations: [DashboardComponent, StatePresenterComponent]
})
export class StateModule {}
