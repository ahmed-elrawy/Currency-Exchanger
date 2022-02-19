import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '@shared/components/not-found/not-found.component';
import {LayoutComponent} from '@shared/components/layout/layout.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';


let children: Routes;
children = [
  {
    path: '',
    redirectTo: 'convert',
    pathMatch: 'full',
  },
  {
    path: 'convert',
    component: CurrencyConverterComponent
  },
  {
    path: 'details/:from/:to/:amount',
    component: CurrencyDetailsComponent
  },
  {
    path: 'currency/:type',
    component:CurrencyComponent
  },

  {
    path: '**',
    component: NotFoundComponent,
  }
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyConverterRoutingModule {
}
