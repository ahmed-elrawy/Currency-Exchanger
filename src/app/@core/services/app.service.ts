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

  Latest(): Observable<ApiResponse<latest>> {
    return this.http.get<ApiResponse<latest>>
    (`${env.ApiUrl}/latest?access_key=71352595cb1eb4c72be94991b25ca8bb`);
  }

}// End of Class

export interface ApiResponse<T>{
  success: boolean;
  latest?: T
}
export interface latest {
  timestamp: number
  base: string
  date: string
  rates:{[key: string]: number}
}


