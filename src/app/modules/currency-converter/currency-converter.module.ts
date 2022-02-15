import {NgModule} from '@angular/core';

import {CurrencyConverterRoutingModule} from './currency-converter-routing.module';

import {SharedModule} from '@shared/shared.module';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyDetailsComponent } from '../currency-details/currency-details.component';



@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyDetailsComponent,

  ],
  imports: [
    CurrencyConverterRoutingModule,
    SharedModule
    ]
})
export class CurrencyConverterModule {
}
