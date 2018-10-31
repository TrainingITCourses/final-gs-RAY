import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { CoreRoutingModule } from './core-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LaunchEffects } from './store/launch/launch.effects';
import { TypeStatusEffects } from './store/type-status/type-status.effects';
import { metaReducers, reducers } from './store';
import { ShellContainerComponent } from './shell-container/shell-container.component';
import { NavBarComponent } from './shell-container/nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      CommonModule,
      CoreRoutingModule,
      HttpClientModule,
      StoreModule.forRoot(reducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
      EffectsModule.forRoot([LaunchEffects, TypeStatusEffects]),
      ServiceWorkerModule.register('/ngsw-worker.js', {
        enabled: environment.production
      }),
      SharedModule
    ],
    declarations: [NavBarComponent, ShellContainerComponent],
    exports: [ShellContainerComponent]
  })
  export class CoreModule {}
  