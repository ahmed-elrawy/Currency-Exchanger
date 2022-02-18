import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '@shared/components/not-found/not-found.component';
import {LayoutComponent} from '@shared/components/layout/layout.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyDetailsComponent } from '../currency-details/currency-details.component';


let children: Routes;
children = [
  {
    path: '',
    component: CurrencyConverterComponent
  },
  {
    path: 'details',
    component: CurrencyDetailsComponent
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
