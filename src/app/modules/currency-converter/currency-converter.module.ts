import {NgModule} from '@angular/core';

import {CurrencyConverterRoutingModule} from './currency-converter-routing.module';

import {SharedModule} from '@shared/shared.module';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';



@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    CurrencyConverterRoutingModule,
    SharedModule
    ]
})
export class CurrencyConverterModule {
}
