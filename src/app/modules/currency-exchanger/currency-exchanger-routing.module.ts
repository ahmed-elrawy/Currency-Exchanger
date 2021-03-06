import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '@shared/components/not-found/not-found.component';
import {LayoutComponent} from '@shared/components/layout/layout.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrencyConverterResolver } from '@app/@core/resolver/currency-converter-resolver.service';


let children: Routes;
children = [
  {
    path: '',
    redirectTo: 'convert',
    pathMatch: 'full',
  },
  {
    path: 'convert',
    component: CurrencyConverterComponent,
    resolve: {
      resolve: CurrencyConverterResolver
    },
    data: { tab: 1 }
  },
  {
    path: 'details/:from/:to/:amount',
    component: CurrencyDetailsComponent,
    data: { tab: 2 }
  },
  {
    path: 'currency/:type',
    component:CurrencyComponent,
    data: { tab: 3 }
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
