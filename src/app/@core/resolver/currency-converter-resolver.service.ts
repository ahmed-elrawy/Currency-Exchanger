import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { catchError, EMPTY, Observable } from 'rxjs';
import { Symbols } from '../data/Api';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterResolver implements Resolve<Symbols>{
   

  constructor(private Service: AppService ,private router: Router) { }

  resolve(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):  Observable<Symbols>  {
    console.log("resolver is working ")
   return this.Service.symbols().pipe(
     catchError((err) => {
       return EMPTY
     })
   )
  }
 
 
}
