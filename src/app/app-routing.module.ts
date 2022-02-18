import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './modules/currency/currency.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'currency-converter',
    pathMatch: 'full',
  },
  {
    path: 'currency-converter',
    loadChildren: () =>
      import('./modules/currency-converter/currency-converter.module').then(
        (m) => m.CurrencyConverterModule
      ),
  },

  {
    path: 'currency-converter',
    loadChildren: () =>
      import('./modules/currency-converter/currency-converter.module').then(
        (m) => m.CurrencyConverterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
