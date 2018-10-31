import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaunchCssComponent } from './launch-css/launch-css.component';
import { LoadingComponent } from './loading/loading.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LaunchCssComponent,
    LoadingComponent,
    CardComponent
  ],
  exports: [
    LaunchCssComponent,
    LoadingComponent,
    CardComponent,
    RouterModule
  ]
})
export class SharedModule {}
  