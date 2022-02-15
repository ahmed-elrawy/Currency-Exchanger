import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/*----------------------   Imports  ----------------------*/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import * as Shared from './index';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  declarations: [
    ...Shared.pipes,
    ...Shared.components,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...Shared.pipes,
    ...Shared.components
  ]
})
export class SharedModule {
}
