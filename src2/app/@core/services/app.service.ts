import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
// http://data.fixer.io/api/latest?access_key=2e98c169f61ac9f91708c18c648655d7&format=1
constructor(private http: HttpClient) {
  }


  Latest(base: string="USD", symbols :string="GBP,JPY,EUR"): Observable<ApiResponse<latest>> {
    return this.http.get<ApiResponse<latest>>(`${env.ApiUrl}/latest?access_key=${env.access_key}`)
    // (`${env.ApiUrl}/latest?access_key=2e98c169f61ac9f91708c18c648655d7${base}&symbols${symbols}`);
  }

  convert(from:string, to:string, amount:string):Observable<any> {
    return this.http.get<any>(`${env.ApiUrl}/convert?access_key=${env.access_key}&from=${from}&to=${to}&amount=${amount}`)
  }

  symbols():Observable<any> {
    return this.http.get<any>(`${env.ApiUrl}/symbols?access_key=${env.access_key}`)
  }


}// End of Class

export interface ApiResponse<T>{
  success: boolean;
  timestamp: number
  base: string
  date: string
  // latest?: T
  rates:{[key: string]: number}
}
export interface latest {
 
  rates:{[key: string]: number}
}


