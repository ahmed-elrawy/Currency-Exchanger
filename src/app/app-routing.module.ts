import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
