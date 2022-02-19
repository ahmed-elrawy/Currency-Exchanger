import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvertData, Symbols } from '@app/@core/data/Api';
import { SymbolsData } from '@app/@core/data/fake-symbole-data';
import { AppService } from '@app/@core/services/app.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
  
})
export class CurrencyDetailsComponent implements OnInit {
  public details?: ConvertData
  public symbols : Symbols= SymbolsData

  constructor(private service: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe( params => {
      this.service.convert(params['from'],params['to'],params['amount']).pipe(
        map( res => {
          res.info.timestamp = this.format_time(+res.info.timestamp) //change timestamp to time
          res.query.from = this.symbols[res.query.from]  //full name of currency
          res.query.to = this.symbols[res.query.to]
           return  res
        })).subscribe( (res:ConvertData) => { 
         this.details = res     
      })
    })
  }

  format_time(s:number):string {
    const dtFormat = new Intl.DateTimeFormat('en-GB', {
      timeStyle: 'medium',
      timeZone: 'UTC'
    });
    return dtFormat.format(new Date(s * 1e3));
  }

}
