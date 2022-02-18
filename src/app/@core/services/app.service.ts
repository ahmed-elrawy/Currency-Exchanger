import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {ConvertData, latestData } from '../data/Api';
import {Symbols, SymbolsData } from '../data/fake-symbole-data';


@Injectable({
  providedIn: 'root'
})
export class AppService {
// http://data.fixer.io/api/latest?access_key=2e98c169f61ac9f91708c18c648655d7&format=1
constructor(private http: HttpClient) {
  }


  Latest(base: string="USD", symbols :string="GBP,JPY,EUR"): Observable<ApiResponse<latestData>> {
    return this.http.get<ApiResponse<latestData>>(`${env.ApiUrl}/latest?access_key=${env.access_key}`)
    // (`${env.ApiUrl}/latest?access_key=2e98c169f61ac9f91708c18c648655d7${base}&symbols${symbols}`);
  }

  convert(from:string, to:string, amount:string):Observable<ConvertData> {
    //  this.http.get<ConvertData>(`${env.ApiUrl}/convert?access_key=${env.access_key}&from=${from}&to=${to}&amount=${amount}`)
     return of({
              "success": true,
              "query": {
                  "from": from,
                  "to": to,
                  "amount": +amount
              },
              "info": {
                  "timestamp": 1519328414,
                  "rate": 148.972231
              },
              "historical": "",
              "date": "2018-02-22",
              "result": 3724.305775
          })
  }

  symbols():Observable<Symbols> {
    // return this.http.get<any>(`${env.ApiUrl}/symbols?access_key=${env.access_key}`)
    return of(SymbolsData)
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


