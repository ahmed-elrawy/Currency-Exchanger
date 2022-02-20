import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import { Observable, of} from 'rxjs';
import {ConvertData, LatestData, Symbols, Timeseries } from '../data/Api';
import { SymbolsData } from '../data/fake-symbole-data';
import { latestEUR, latestUSD } from '../data/fake-latest-data';
import { Convert } from '../data/fake-conver-data';
import { timeseries, timeseriesUSD } from '../data/fake-Timeseries-data';


@Injectable({
  providedIn: 'root'
})
export class AppService {


constructor(private http: HttpClient) {
  }

//---------------------------- Latest endPoint Api ----------------------------//

  Latest(base: string="USD", symbols :string="GBP,JPY,EUR"): Observable<LatestData> {

    return this.http.get<LatestData>(`${env.ApiUrl}/latest?access_key=2e98c169f61ac9f91708c18c648655d7${base}&symbols${symbols}`)

  }

//---------------------------- LatestUSD endPoint Api ----------------------------//

  LatestUSD(): Observable<LatestData> {
    return of(latestUSD)
  }

  Currency(currency:string): Observable<LatestData> {
     let param = currency == "USD" ? latestUSD : latestEUR;
    return of(param)
  }
//---------------------------- LatestEUR endPoint Api ----------------------------//

  LatestEUR(): Observable<LatestData> {
    return of(latestEUR)
  }

//---------------------------- symbols endPoint Api ----------------------------//

  symbols():Observable<Symbols> {
    // return this.http.get<any>(`${env.ApiUrl}/symbols?access_key=${env.access_key}`)
    return of(SymbolsData)
  }

//---------------------------- timeseries endPoint Api ----------------------------//

  timeseries(start:string, end:string, base:string, symbols?:string):Observable<Timeseries> {
    // return this.http.get<any>(`${env.ApiUrl}/symbols?access_key=${env.access_key}&start_date=${start}&end_date=${end}&base=${base}&symbols=${symbols}`)
    const times = (base == "USD")?timeseriesUSD: timeseries; //timeseriesUSD
    // times.base = base
    return of(times)
  }

  //---------------------------- convert endPoint Api ----------------------------//


  convert(from:string, to:string, amount:string):Observable<ConvertData> {
    //  this.http.get<ConvertData>(`${env.ApiUrl}/convert?access_key=${env.access_key}&from=${from}&to=${to}&amount=${amount}`)
    const convert = Convert;
    convert.query.from = from
    convert.query.to = to
    convert.query.to = to
    convert.info.timestamp =1519328414      
    return of(convert)
  }


}// End of Class





