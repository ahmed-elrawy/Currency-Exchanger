import {NgModule} from '@angular/core';

import {CurrencyConverterRoutingModule} from './currency-converter-routing.module';

import {SharedModule} from '@shared/shared.module';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyDetailsComponent } from '../currency-details/currency-details.component';
import { CurrencyComponent } from '../currency/currency.component';



@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyDetailsComponent,
    CurrencyComponent

  ],
  imports: [
    CurrencyConverterRoutingModule,
    SharedModule,
    ]
})
export class CurrencyConverterModule {
}
