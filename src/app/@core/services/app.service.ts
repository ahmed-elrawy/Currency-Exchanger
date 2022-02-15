import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  Latest(base: string="USD", symbols :string="GBP,JPY,EUR"): Observable<ApiResponse<latest>> {
    return this.http.get<ApiResponse<latest>>
    (`${env.ApiUrl}/latest?access_key=71352595cb1eb4c72be94991b25ca8bb&base${base}&symbols${symbols}`);
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


