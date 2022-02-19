import {NgModule} from '@angular/core';

import {CurrencyConverterRoutingModule} from './currency-exchanger-routing.module';

import {SharedModule} from '@shared/shared.module';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';



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
export class CurrencyExchangerModule {
}
